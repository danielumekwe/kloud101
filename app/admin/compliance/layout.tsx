"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getAuthToken } from "@/lib/api"
import { cn } from "@/lib/utils"
import {
  FileText,
  ScrollText,
  ShieldCheck,
  Download,
  Trash2,
  ChevronRight,
  Lock,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react"

const NAV = [
  {
    href: "/admin/compliance/legal-documents",
    label: "Legal Documents",
    icon: FileText,
  },
  {
    href: "/admin/compliance/consent-logs",
    label: "Consent Logs",
    icon: ScrollText,
  },
  {
    href: "/admin/compliance/privacy-requests",
    label: "Privacy Requests",
    icon: ShieldCheck,
  },
  {
    href: "/admin/compliance/data-export",
    label: "Data Export Requests",
    icon: Download,
  },
  {
    href: "/admin/compliance/account-deletion",
    label: "Account Deletion Requests",
    icon: Trash2,
  },
]

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [token, setToken] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setToken(getAuthToken())
    setChecked(true)
  }, [])

  if (!checked) return null

  if (!token) {
    return (
      <div className="min-h-screen bg-blue-50 text-slate-900 flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-slate-200 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-7 h-7 text-slate-600" />
          </div>
          <h1 className="text-xl font-bold mb-2">Admin access required</h1>
          <p className="text-slate-600 text-sm mb-6">
            You need to be signed in as an administrator to access this area.
          </p>
          <Link
            href="https://my.kloud101.com/admin/login"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-colors"
          >
            Sign in
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blue-50 text-slate-900 flex">

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-blue-50 border-r border-slate-200 flex flex-col transition-transform lg:translate-x-0 lg:static lg:inset-auto lg:z-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Admin navigation"
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-200 flex-shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/kloud101logo.png" alt="Kloud101" width={102} height={32} />
          </Link>
          <button
            className="lg:hidden p-1 text-slate-600 hover:text-slate-900"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Admin label */}
        <div className="px-5 py-4 border-b border-slate-200 flex-shrink-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Admin Panel
          </p>
          <p className="text-sm font-medium text-slate-900 mt-0.5">Compliance</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3" aria-label="Compliance navigation">
          <div className="mb-2 px-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
              Compliance
            </p>
          </div>

          <ul className="space-y-1" role="list">
            {NAV.map(({ href, label, icon: Icon }) => {
              const active = pathname === href || pathname.startsWith(href + "/")
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors",
                      active
                        ? "bg-blue-600/15 text-blue-600 font-medium"
                        : "text-slate-600 hover:text-slate-900 hover:bg-blue-100"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {label}
                    {active && <ChevronRight className="w-3 h-3 ml-auto" />}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-6 px-2 mb-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
              Navigation
            </p>
          </div>
          <ul className="space-y-1" role="list">
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-blue-100 transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" />
                Back to site
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-slate-200 bg-blue-50 flex items-center justify-between px-5 flex-shrink-0">
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Kloud101
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/admin/compliance" className="hover:text-slate-900 transition-colors">
              Admin
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Compliance</span>
          </div>

          <div className="w-8" aria-hidden="true" />
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
