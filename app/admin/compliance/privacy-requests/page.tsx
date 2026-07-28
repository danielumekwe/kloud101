"use client"

import { useState, useEffect, useCallback } from "react"
import { getAuthToken } from "@/lib/api"
import {
  adminGetPrivacyRequests,
  adminUpdatePrivacyRequest,
  type PrivacyRequest,
} from "@/lib/legal-api"
import { cn } from "@/lib/utils"
import {
  RefreshCw,
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  XCircle,
  Clock,
  Cog,
  X,
} from "lucide-react"

type Filter = { status: string; type: string }

const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  processing: "bg-blue-500/10 border-blue-500/20 text-blue-600",
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

function TypeBadge({ type }: { type: string }) {
  const labels: Record<string, string> = {
    data_export: "Data Export",
    account_deletion: "Account Deletion",
    data_correction: "Data Correction",
  }
  return (
    <span className="text-xs px-2 py-0.5 bg-blue-100 text-slate-700 rounded-full border border-slate-200">
      {labels[type] ?? type}
    </span>
  )
}

export default function PrivacyRequestsPage() {
  const [requests, setRequests] = useState<PrivacyRequest[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState<Filter>({ status: "", type: "" })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updating, setUpdating] = useState<string | null>(null)
  const [selectedRequest, setSelectedRequest] = useState<PrivacyRequest | null>(null)
  const [notes, setNotes] = useState("")

  const load = useCallback(async (p: number, f: Filter) => {
    const token = getAuthToken()
    if (!token) return
    setLoading(true)
    setError(null)
    try {
      const res = await adminGetPrivacyRequests(token, f.status, f.type, p)
      setRequests(res.data)
      setTotal(res.total)
    } catch {
      setError("Failed to load privacy requests.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load(page, filter) }, [page, filter, load])

  async function handleUpdateStatus(id: string, status: string) {
    const token = getAuthToken()
    if (!token) return
    setUpdating(id)
    try {
      const updated = await adminUpdatePrivacyRequest(token, id, status, notes)
      setRequests((prev) => prev.map((r) => (r.id === id ? updated : r)))
      setSelectedRequest(null)
      setNotes("")
    } catch {
      // silent
    } finally {
      setUpdating(null)
    }
  }

  const totalPages = Math.ceil(total / 50)

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Privacy Requests</h1>
          <p className="text-sm text-slate-600 mt-1">
            All user-submitted privacy-related requests.
          </p>
        </div>
        <button
          onClick={() => load(page, filter)}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 text-slate-700 rounded-xl border border-slate-200 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={filter.status}
          onChange={(e) => { setPage(1); setFilter((f) => ({ ...f, status: e.target.value })) }}
          className="px-3 py-2 text-sm bg-blue-50 border border-slate-200 text-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Filter by status"
        >
          <option value="">All statuses</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
          <option value="rejected">Rejected</option>
        </select>

        <select
          value={filter.type}
          onChange={(e) => { setPage(1); setFilter((f) => ({ ...f, type: e.target.value })) }}
          className="px-3 py-2 text-sm bg-blue-50 border border-slate-200 text-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Filter by type"
        >
          <option value="">All types</option>
          <option value="data_export">Data Export</option>
          <option value="account_deletion">Account Deletion</option>
          <option value="data_correction">Data Correction</option>
        </select>

        {(filter.status || filter.type) && (
          <button
            onClick={() => { setPage(1); setFilter({ status: "", type: "" }) }}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-blue-100 transition-colors"
          >
            <X className="w-3.5 h-3.5" /> Clear filters
          </button>
        )}
      </div>

      <p className="text-xs text-slate-500 mb-4">{total.toLocaleString()} request{total !== 1 ? "s" : ""}</p>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2.5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400 mb-4">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Table */}
      {loading && requests.length === 0 ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-slate-500" />
        </div>
      ) : requests.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <ShieldCheck className="w-10 h-10 text-slate-700 mb-3" />
          <p className="text-slate-500">No requests found.</p>
        </div>
      ) : (
        <div className="bg-blue-50 border border-slate-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200">
                  {["User", "Type", "Status", "Submitted", "Actions"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-500 px-4 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req.id} className="border-b border-slate-200 last:border-0 hover:bg-blue-100/30 transition-colors">
                    <td className="px-4 py-3 text-slate-900">{req.email}</td>
                    <td className="px-4 py-3"><TypeBadge type={req.type} /></td>
                    <td className="px-4 py-3"><StatusBadge status={req.status} /></td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap text-xs">
                      {new Date(req.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      {req.status === "pending" && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleUpdateStatus(req.id, "processing")}
                            disabled={updating === req.id}
                            className="px-2.5 py-1 text-xs bg-blue-600/15 border border-blue-500/20 text-blue-600 hover:bg-blue-600/25 rounded-lg transition-colors disabled:opacity-50"
                          >
                            {updating === req.id ? <Loader2 className="w-3 h-3 animate-spin" /> : "Process"}
                          </button>
                          <button
                            onClick={() => { setSelectedRequest(req); setNotes("") }}
                            className="px-2.5 py-1 text-xs bg-blue-100 border border-slate-200 text-slate-700 hover:bg-blue-200 rounded-lg transition-colors"
                          >
                            Review
                          </button>
                        </div>
                      )}
                      {req.status === "processing" && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleUpdateStatus(req.id, "completed")}
                            disabled={updating === req.id}
                            className="px-2.5 py-1 text-xs bg-green-600/15 border border-green-500/20 text-green-400 hover:bg-green-600/25 rounded-lg transition-colors disabled:opacity-50"
                          >
                            Complete
                          </button>
                          <button
                            onClick={() => handleUpdateStatus(req.id, "rejected")}
                            disabled={updating === req.id}
                            className="px-2.5 py-1 text-xs bg-red-600/15 border border-red-500/20 text-red-400 hover:bg-red-600/25 rounded-lg transition-colors disabled:opacity-50"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                      {(req.status === "completed" || req.status === "rejected") && (
                        <span className="text-xs text-slate-600">
                          {req.completedAt ? new Date(req.completedAt).toLocaleDateString() : "—"}
                        </span>
                      )}
                    </td>
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
          <p className="text-xs text-slate-500">Page {page} of {totalPages}</p>
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

      {/* Review modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Review request">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedRequest(null)} aria-hidden="true" />
          <div className="relative bg-blue-50 border border-slate-200 rounded-2xl shadow-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900">Review Request</h3>
              <button onClick={() => setSelectedRequest(null)} className="text-slate-600 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">User:</span>
                <span className="text-slate-900">{selectedRequest.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Type:</span>
                <TypeBadge type={selectedRequest.type} />
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Submitted:</span>
                <span className="text-slate-700 text-xs">{new Date(selectedRequest.createdAt).toLocaleString()}</span>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="review-notes" className="block text-sm font-medium text-slate-600 mb-1.5">
                Notes (optional)
              </label>
              <textarea
                id="review-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 bg-blue-100 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Internal notes…"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleUpdateStatus(selectedRequest.id, "completed")}
                disabled={updating === selectedRequest.id}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-xl disabled:opacity-60 transition-colors"
              >
                {updating === selectedRequest.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                Approve
              </button>
              <button
                onClick={() => handleUpdateStatus(selectedRequest.id, "rejected")}
                disabled={updating === selectedRequest.id}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-600 hover:bg-red-700 text-slate-900 text-sm font-medium rounded-xl disabled:opacity-60 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
