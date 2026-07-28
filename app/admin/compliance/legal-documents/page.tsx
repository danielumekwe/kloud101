"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getAuthToken } from "@/lib/api"
import { adminGetLegalDocuments, type LegalDocument } from "@/lib/legal-api"
import { cn } from "@/lib/utils"
import {
  FileText,
  ExternalLink,
  Calendar,
  Tag,
  Clock,
  RefreshCw,
  Loader2,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

const DOCUMENT_SLUGS = [
  { slug: "privacy-policy", label: "Privacy Policy" },
  { slug: "terms-of-service", label: "Terms of Service" },
  { slug: "acceptable-use-policy", label: "Acceptable Use Policy" },
  { slug: "cookie-policy", label: "Cookie Policy" },
  { slug: "refund-policy", label: "Refund Policy" },
  { slug: "service-level-agreement", label: "Service Level Agreement" },
  { slug: "abuse-policy", label: "Abuse Policy" },
  { slug: "dmca-policy", label: "DMCA Policy" },
]

export default function LegalDocumentsPage() {
  const [docs, setDocs] = useState<LegalDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function load() {
    const token = getAuthToken()
    if (!token) return
    setLoading(true)
    setError(null)
    try {
      const data = await adminGetLegalDocuments(token)
      setDocs(data)
    } catch {
      setError("Failed to load legal documents.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  // Build a map for quick lookup by slug
  const docMap = new Map(docs.map((d) => [d.slug, d]))

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Legal Documents</h1>
          <p className="text-sm text-slate-600 mt-1">
            Manage and review all published legal documents.
          </p>
        </div>
        <button
          onClick={load}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 text-slate-700 rounded-xl border border-slate-200 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total documents", value: DOCUMENT_SLUGS.length },
          { label: "Published", value: docs.length },
          { label: "Pending", value: DOCUMENT_SLUGS.length - docs.length },
          { label: "Last updated", value: docs.length > 0 ? new Date(Math.max(...docs.map((d) => new Date(d.lastUpdated).getTime()))).toLocaleDateString() : "—" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-blue-50 border border-slate-200 rounded-xl p-4">
            <p className="text-xs text-slate-500 mb-1">{label}</p>
            <p className="text-xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2.5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400 mb-6">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Documents grid */}
      {loading && docs.length === 0 ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-slate-500" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {DOCUMENT_SLUGS.map(({ slug, label }) => {
            const doc = docMap.get(slug)
            return (
              <div
                key={slug}
                className="bg-blue-50 border border-slate-200 rounded-xl p-5 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{label}</p>
                      <p className="text-xs text-slate-500">/{slug}</p>
                    </div>
                  </div>

                  {doc ? (
                    <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex-shrink-0">
                      <CheckCircle className="w-3 h-3" />
                      Live
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded-full flex-shrink-0">
                      <AlertCircle className="w-3 h-3" />
                      Missing
                    </span>
                  )}
                </div>

                {doc ? (
                  <div className="space-y-1.5 text-xs text-slate-500 flex-1">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      Version {doc.version}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      Effective: {new Date(doc.effectiveDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      Updated: {new Date(doc.lastUpdated).toLocaleDateString()}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-600 flex-1">
                    This document has not been published to the API yet.
                  </p>
                )}

                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-3">
                  <Link
                    href={`/${slug}`}
                    target="_blank"
                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-slate-600 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View live
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
