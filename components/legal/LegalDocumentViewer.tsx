"use client"

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  KeyboardEvent,
} from "react"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ReadingProgress from "./ReadingProgress"
import { getLegalDocument, LegalDocument } from "@/lib/legal-api"
import { cn } from "@/lib/utils"
import {
  Search,
  Printer,
  Share2,
  Copy,
  Check,
  Menu,
  X,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  FileText,
  Calendar,
  Tag,
  Clock,
  AlertCircle,
  Loader2,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

interface TOCItem {
  id: string
  text: string
  level: number
}

interface Props {
  slug: string
  fallbackTitle?: string
  category?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(text: string, index: number): string {
  return (
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .substring(0, 60) +
    "-" +
    index
  )
}

function highlightSearch(html: string, query: string): string {
  if (!query.trim()) return html
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const regex = new RegExp(`(${escaped})`, "gi")
  return html.replace(
    regex,
    '<mark class="bg-yellow-300 dark:bg-yellow-600 text-slate-900 dark:text-white rounded px-0.5">$1</mark>'
  )
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
}

function countMatches(html: string, query: string): number {
  if (!query.trim()) return 0
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return (stripHtml(html).match(new RegExp(escaped, "gi")) ?? []).length
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function LegalDocumentViewer({
  slug,
  fallbackTitle,
  category = "Legal",
}: Props) {
  const [doc, setDoc] = useState<LegalDocument | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [tocOpen, setTocOpen] = useState(false)

  const [search, setSearch] = useState("")
  const [matchCount, setMatchCount] = useState(0)

  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  // ─── Fetch Document ──────────────────────────────────────────────────────

  useEffect(() => {
    setLoading(true)
    setError(null)
    getLegalDocument(slug)
      .then(setDoc)
      .catch((err) => {
        setError(
          err?.status === 404
            ? "This document is not available yet."
            : "Failed to load document. Please try again later."
        )
      })
      .finally(() => setLoading(false))
  }, [slug])

  // ─── Build TOC from DOM headings ─────────────────────────────────────────

  useEffect(() => {
    if (!doc || !contentRef.current) return

    const headings = Array.from(
      contentRef.current.querySelectorAll("h1, h2, h3")
    ) as HTMLHeadingElement[]

    const items: TOCItem[] = headings.map((el, i) => {
      const id = slugify(el.textContent ?? `section-${i}`, i)
      el.id = id
      el.setAttribute("tabindex", "-1")
      return {
        id,
        text: el.textContent ?? "",
        level: parseInt(el.tagName[1]),
      }
    })

    setToc(items)
    if (items.length > 0) setActiveId(items[0].id)
  }, [doc])

  // ─── Intersection Observer for active TOC item ───────────────────────────

  useEffect(() => {
    if (!contentRef.current || toc.length === 0) return

    const headingEls = toc
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )

    headingEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [toc])

  // ─── Search match count ──────────────────────────────────────────────────

  useEffect(() => {
    if (!doc) return
    setMatchCount(countMatches(doc.content, search))
  }, [search, doc])

  // ─── Actions ─────────────────────────────────────────────────────────────

  const handlePrint = useCallback(() => window.print(), [])

  const handleCopyLink = useCallback(async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      await navigator.share({ title: doc?.title, url: window.location.href })
    } else {
      await handleCopyLink()
    }
    setShared(true)
    setTimeout(() => setShared(false), 2000)
  }, [doc, handleCopyLink])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.focus()
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setTocOpen(false)
  }, [])

  const handleSearchKey = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        setSearch("")
        searchRef.current?.blur()
      }
    },
    []
  )

  const processedContent = doc
    ? highlightSearch(doc.content, search)
    : ""

  // ─── Loading ─────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-4 text-slate-500">
            <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
            <p className="text-lg">Loading document…</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // ─── Error ────────────────────────────────────────────────────────────────

  if (error || !doc) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh] px-6">
          <div className="flex flex-col items-center gap-4 text-center max-w-md">
            <AlertCircle className="w-12 h-12 text-red-500" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {fallbackTitle ?? slug.replace(/-/g, " ")}
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              {error ?? "Document unavailable."}
            </p>
            <Link
              href="/"
              className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Return home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // ─── Main Render ──────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <ReadingProgress />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}

      <section className="relative bg-slate-950 text-white overflow-hidden print:hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <nav
            className="flex items-center gap-2 text-sm text-slate-400 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-300">{category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{doc.title}</span>
          </nav>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                {doc.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  Effective: {new Date(doc.effectiveDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Updated: {new Date(doc.lastUpdated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-blue-400" />
                  Version {doc.version}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────────── */}

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">

          {/* ── Sidebar ─────────────────────────────────────────────────── */}

          <aside className="print:hidden">

            {/* Mobile TOC Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setTocOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300"
                aria-expanded={tocOpen}
                aria-controls="toc-panel"
              >
                <span className="flex items-center gap-2">
                  <Menu className="w-4 h-4" />
                  Table of Contents
                </span>
                {tocOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {tocOpen && (
                <nav
                  id="toc-panel"
                  className="mt-2 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800"
                  aria-label="Table of contents"
                >
                  <TOCList
                    items={toc}
                    activeId={activeId}
                    onSelect={scrollToSection}
                  />
                </nav>
              )}
            </div>

            {/* Desktop sticky sidebar */}
            <div className="hidden lg:block sticky top-8">

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                <input
                  ref={searchRef}
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleSearchKey}
                  placeholder="Search document…"
                  aria-label="Search within document"
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {search && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 px-1">
                  {matchCount === 0
                    ? "No matches found"
                    : `${matchCount} match${matchCount !== 1 ? "es" : ""} found`}
                </p>
              )}

              {/* TOC */}
              {toc.length > 0 && (
                <nav
                  className="mb-6"
                  aria-label="Table of contents"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 px-1">
                    Contents
                  </p>
                  <TOCList
                    items={toc}
                    activeId={activeId}
                    onSelect={scrollToSection}
                  />
                </nav>
              )}

              {/* Actions */}
              <div className="border-t border-slate-200 dark:border-slate-800 pt-6 space-y-2">
                <button
                  onClick={handlePrint}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print this document
                </button>

                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copied ? "Link copied!" : "Copy link"}
                </button>

                <button
                  onClick={handleShare}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {shared ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                  {shared ? "Shared!" : "Share"}
                </button>
              </div>
            </div>
          </aside>

          {/* ── Content ─────────────────────────────────────────────────── */}

          <main>

            {/* Mobile search */}
            <div className="lg:hidden mb-6 print:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleSearchKey}
                  placeholder="Search document…"
                  aria-label="Search within document"
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              {search && matchCount > 0 && (
                <p className="text-xs text-slate-500 mt-2">
                  {matchCount} match{matchCount !== 1 ? "es" : ""}
                </p>
              )}
            </div>

            {/* Mobile actions */}
            <div className="lg:hidden flex items-center gap-3 mb-8 print:hidden">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Print document"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Copy link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy link"}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Share document"
              >
                <Share2 className="w-3.5 h-3.5" />
                Share
              </button>
            </div>

            {/* Document content */}
            <article
              ref={contentRef}
              className="legal-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
              aria-label={doc.title}
            />

            {/* Print metadata */}
            <div className="hidden print:block mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500 space-y-1">
              <p>Document: {doc.title}</p>
              <p>Version: {doc.version}</p>
              <p>Effective: {new Date(doc.effectiveDate).toLocaleDateString()}</p>
              <p>Last updated: {new Date(doc.lastUpdated).toLocaleDateString()}</p>
              <p>Printed from: {typeof window !== "undefined" ? window.location.href : ""}</p>
            </div>

            {/* Footer note */}
            <div className="mt-16 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 print:hidden">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                If you have questions about this document, contact us at{" "}
                <a
                  href="mailto:legal@kloud101.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  legal@kloud101.com
                </a>{" "}
                or visit our{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  contact page
                </Link>
                .
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// ─── TOC List Sub-component ───────────────────────────────────────────────────

function TOCList({
  items,
  activeId,
  onSelect,
}: {
  items: TOCItem[]
  activeId: string
  onSelect: (id: string) => void
}) {
  return (
    <ul className="space-y-1" role="list">
      {items.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => onSelect(item.id)}
            className={cn(
              "w-full text-left text-sm leading-snug px-2 py-1.5 rounded-md transition-colors",
              item.level === 1 && "font-medium",
              item.level === 2 && "pl-4",
              item.level === 3 && "pl-6 text-xs",
              activeId === item.id
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-medium"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900"
            )}
            aria-current={activeId === item.id ? "location" : undefined}
          >
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  )
}
