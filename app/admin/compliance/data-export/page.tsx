"use client"

import { useState, useEffect, useCallback } from "react"
import { getAuthToken } from "@/lib/api"
import {
  adminGetDataExportRequests,
  adminUpdatePrivacyRequest,
  type PrivacyRequest,
} from "@/lib/legal-api"
import { cn } from "@/lib/utils"
import {
  Download,
  RefreshCw,
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Clock,
  Cog,
} from "lucide-react"

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  processing: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  completed: "bg-green-500/10 border-green-500/20 text-green-400",
  rejected: "bg-red-500/10 border-red-500/20 text-red-400",
}

const STATUS_ICONS: Record<string, React.ElementType> = {
  pending: Clock,
  processing: Cog,
  completed: CheckCircle,
  rejected: XCircle,
}

function StatusBadge({ status }: { status: string }) {
  const Icon = STATUS_ICONS[status] ?? Clock
  return (
    <span className={cn("inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border capitalize", STATUS_COLORS[status] ?? STATUS_COLORS.pending)}>
      <Icon className="w-3 h-3" />
      {status}
    </span>
  )
}

export default function DataExportRequestsPage() {
  const [requests, setRequests] = useState<PrivacyRequest[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updating, setUpdating] = useState<string | null>(null)

  const load = useCallback(async (p: number) => {
    const token = getAuthToken()
    if (!token) return
    setLoading(true)
    setError(null)
    try {
      const res = await adminGetDataExportRequests(token, p)
      setRequests(res.data)
      setTotal(res.total)
    } catch {
      setError("Failed to load data export requests.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load(page) }, [page, load])

  async function handleUpdate(id: string, status: string) {
    const token = getAuthToken()
    if (!token) return
    setUpdating(id)
    try {
      const updated = await adminUpdatePrivacyRequest(token, id, status)
      setRequests((prev) => prev.map((r) => (r.id === id ? updated : r)))
    } catch { /* silent */ }
    finally { setUpdating(null) }
  }

  const totalPages = Math.ceil(total / 50)

  const pending = requests.filter((r) => r.status === "pending").length
  const processing = requests.filter((r) => r.status === "processing").length
  const completed = requests.filter((r) => r.status === "completed").length

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Data Export Requests</h1>
          <p className="text-sm text-slate-400 mt-1">
            GDPR / NDPR data portability requests from users.
          </p>
        </div>
        <button
          onClick={() => load(page)}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total", value: total, color: "text-white" },
          { label: "Pending", value: pending, color: "text-yellow-400" },
          { label: "Processing", value: processing, color: "text-blue-400" },
          { label: "Completed", value: completed, color: "text-green-400" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-xs text-slate-500 mb-1">{label}</p>
            <p className={cn("text-2xl font-bold", color)}>{value}</p>
          </div>
        ))}
      </div>

      {error && (
        <div className="flex items-center gap-2.5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400 mb-4">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {loading && requests.length === 0 ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-slate-500" />
        </div>
      ) : requests.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Download className="w-10 h-10 text-slate-700 mb-3" />
          <p className="text-slate-500">No data export requests.</p>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800">
                  {["User", "Status", "Submitted", "Completed", "Actions"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-500 px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req.id} className="border-b border-slate-800/50 last:border-0 hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-3 text-white">{req.email}</td>
                    <td className="px-4 py-3"><StatusBadge status={req.status} /></td>
                    <td className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">
                      {new Date(req.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-slate-400 text-xs">
                      {req.completedAt ? new Date(req.completedAt).toLocaleDateString() : "—"}
                    </td>
                    <td className="px-4 py-3">
                      {req.status === "pending" && (
                        <button
                          onClick={() => handleUpdate(req.id, "processing")}
                          disabled={updating === req.id}
                          className="px-2.5 py-1 text-xs bg-blue-600/15 border border-blue-500/20 text-blue-400 hover:bg-blue-600/25 rounded-lg transition-colors disabled:opacity-50"
                        >
                          {updating === req.id ? <Loader2 className="w-3 h-3 animate-spin" /> : "Start processing"}
                        </button>
                      )}
                      {req.status === "processing" && (
                        <button
                          onClick={() => handleUpdate(req.id, "completed")}
                          disabled={updating === req.id}
                          className="px-2.5 py-1 text-xs bg-green-600/15 border border-green-500/20 text-green-400 hover:bg-green-600/25 rounded-lg transition-colors disabled:opacity-50"
                        >
                          {updating === req.id ? <Loader2 className="w-3 h-3 animate-spin" /> : "Mark complete"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-slate-500">Page {page} of {totalPages}</p>
          <div className="flex gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1 || loading}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-700 disabled:opacity-40 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages || loading}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-700 disabled:opacity-40 transition-colors">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
