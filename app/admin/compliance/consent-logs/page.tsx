"use client"

import { useState, useEffect, useCallback } from "react"
import { getAuthToken } from "@/lib/api"
import { adminGetConsentLogs, type ConsentLog } from "@/lib/legal-api"
import { cn } from "@/lib/utils"
import {
  Search,
  RefreshCw,
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ScrollText,
  X,
} from "lucide-react"

const PAGE_SIZE = 50

export default function ConsentLogsPage() {
  const [logs, setLogs] = useState<ConsentLog[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (p: number, q: string) => {
    const token = getAuthToken()
    if (!token) return
    setLoading(true)
    setError(null)
    try {
      const res = await adminGetConsentLogs(token, p, PAGE_SIZE, q)
      setLogs(res.data)
      setTotal(res.total)
    } catch {
      setError("Failed to load consent logs.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load(page, search) }, [page, load])

  function handleSearch() {
    setPage(1)
    load(1, search)
  }

  const totalPages = Math.ceil(total / PAGE_SIZE)

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Consent Logs</h1>
          <p className="text-sm text-slate-600 mt-1">
            Record of all user consents to legal documents.
          </p>
        </div>
        <button
          onClick={() => load(page, search)}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 text-slate-700 rounded-xl border border-slate-200 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
          Refresh
        </button>
      </div>

      {/* Search */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by email or document…"
            className="w-full pl-9 pr-4 py-2.5 bg-blue-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {search && (
            <button
              onClick={() => { setSearch(""); setPage(1); load(1, "") }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              aria-label="Clear"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
        >
          Search
        </button>
      </div>

      {/* Total */}
      <p className="text-xs text-slate-500 mb-4">{total.toLocaleString()} record{total !== 1 ? "s" : ""}</p>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2.5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400 mb-4">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Table */}
      {loading && logs.length === 0 ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-slate-500" />
        </div>
      ) : logs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <ScrollText className="w-10 h-10 text-slate-700 mb-3" />
          <p className="text-slate-500">No consent logs found.</p>
        </div>
      ) : (
        <div className="bg-blue-50 border border-slate-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200">
                  {["Email", "Document", "Version", "Accepted At", "IP Address"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-500 px-4 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-slate-200 last:border-0 hover:bg-blue-100/30 transition-colors">
                    <td className="px-4 py-3 text-slate-900 font-medium">{log.email}</td>
                    <td className="px-4 py-3 text-slate-700">
                      <span className="capitalize">{log.documentType.replace(/-/g, " ")}</span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">v{log.version}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                      {new Date(log.acceptedAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-slate-500 font-mono text-xs">{log.ipAddress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-slate-500">
            Page {page} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1 || loading}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 border border-slate-200 text-slate-700 rounded-lg hover:bg-blue-200 disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages || loading}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 border border-slate-200 text-slate-700 rounded-lg hover:bg-blue-200 disabled:opacity-40 transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
