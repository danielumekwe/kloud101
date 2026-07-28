"use client"

import { useState, useEffect, useCallback } from "react"
import { getAuthToken } from "@/lib/api"
import {
  adminGetAccountDeletionRequests,
  adminUpdatePrivacyRequest,
  type PrivacyRequest,
} from "@/lib/legal-api"
import { cn } from "@/lib/utils"
import {
  Trash2,
  RefreshCw,
  Loader2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Clock,
  Cog,
  AlertTriangle,
  X,
} from "lucide-react"

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
    <span className={cn("inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border capitalize", STATUS_COLORS[status])}>
      <Icon className="w-3 h-3" />
      {status}
    </span>
  )
}

export default function AccountDeletionRequestsPage() {
  const [requests, setRequests] = useState<PrivacyRequest[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updating, setUpdating] = useState<string | null>(null)
  const [confirmReq, setConfirmReq] = useState<PrivacyRequest | null>(null)
  const [confirmNotes, setConfirmNotes] = useState("")

  const load = useCallback(async (p: number) => {
    const token = getAuthToken()
    if (!token) return
    setLoading(true)
    setError(null)
    try {
      const res = await adminGetAccountDeletionRequests(token, p)
      setRequests(res.data)
      setTotal(res.total)
    } catch {
      setError("Failed to load account deletion requests.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load(page) }, [page, load])

  async function handleUpdate(id: string, status: string, notes?: string) {
    const token = getAuthToken()
    if (!token) return
    setUpdating(id)
    try {
      const updated = await adminUpdatePrivacyRequest(token, id, status, notes)
      setRequests((prev) => prev.map((r) => (r.id === id ? updated : r)))
      setConfirmReq(null)
      setConfirmNotes("")
    } catch { /* silent */ }
    finally { setUpdating(null) }
  }

  const totalPages = Math.ceil(total / 50)
  const pending = requests.filter((r) => r.status === "pending").length
  const processing = requests.filter((r) => r.status === "processing").length

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Account Deletion Requests</h1>
          <p className="text-sm text-slate-600 mt-1">
            Review and process user account deletion requests.
          </p>
        </div>
        <button
          onClick={() => load(page)}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 text-slate-700 rounded-xl border border-slate-200 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
          Refresh
        </button>
      </div>

      {/* Warning */}
      <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl mb-6">
        <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-red-400">
          Account deletion is permanent. Once completed, all user data, servers, billing records
          and backups are permanently removed. Always confirm with the user before processing.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total", value: total, color: "text-slate-900" },
          { label: "Awaiting review", value: pending, color: "text-yellow-400" },
          { label: "In progress", value: processing, color: "text-blue-600" },
          { label: "Completed", value: requests.filter((r) => r.status === "completed").length, color: "text-green-400" },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-blue-50 border border-slate-200 rounded-xl p-4">
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
          <Trash2 className="w-10 h-10 text-slate-700 mb-3" />
          <p className="text-slate-500">No account deletion requests.</p>
        </div>
      ) : (
        <div className="bg-blue-50 border border-slate-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200">
                  {["User", "Status", "Submitted", "Notes", "Actions"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-500 px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req.id} className="border-b border-slate-200 last:border-0 hover:bg-blue-100/30 transition-colors">
                    <td className="px-4 py-3 text-slate-900">{req.email}</td>
                    <td className="px-4 py-3"><StatusBadge status={req.status} /></td>
                    <td className="px-4 py-3 text-slate-600 text-xs whitespace-nowrap">
                      {new Date(req.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs max-w-[200px] truncate">
                      {req.notes ?? "—"}
                    </td>
                    <td className="px-4 py-3">
                      {(req.status === "pending" || req.status === "processing") && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => { setConfirmReq(req); setConfirmNotes("") }}
                            className="px-2.5 py-1 text-xs bg-red-600/15 border border-red-500/20 text-red-400 hover:bg-red-600/25 rounded-lg transition-colors"
                          >
                            Review
                          </button>
                          {req.status === "pending" && (
                            <button
                              onClick={() => handleUpdate(req.id, "rejected")}
                              disabled={updating === req.id}
                              className="px-2.5 py-1 text-xs bg-blue-100 border border-slate-200 text-slate-600 hover:bg-blue-200 rounded-lg transition-colors disabled:opacity-50"
                            >
                              Reject
                            </button>
                          )}
                        </div>
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
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 border border-slate-200 text-slate-700 rounded-lg hover:bg-blue-200 disabled:opacity-40 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages || loading}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-100 border border-slate-200 text-slate-700 rounded-lg hover:bg-blue-200 disabled:opacity-40 transition-colors">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Confirm deletion dialog */}
      {confirmReq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Confirm deletion">
          <div className="absolute inset-0 bg-black/70" onClick={() => setConfirmReq(null)} aria-hidden="true" />
          <div className="relative bg-blue-50 border border-red-900/50 rounded-2xl shadow-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold text-slate-900">Confirm Account Deletion</h3>
              </div>
              <button onClick={() => setConfirmReq(null)} className="text-slate-600 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 mb-4">
              You are about to permanently delete the account for{" "}
              <strong className="text-slate-900">{confirmReq.email}</strong>. This cannot be undone.
            </p>

            <div className="mb-4">
              <label htmlFor="del-notes" className="block text-sm font-medium text-slate-600 mb-1.5">
                Admin notes (optional)
              </label>
              <textarea
                id="del-notes"
                value={confirmNotes}
                onChange={(e) => setConfirmNotes(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 bg-blue-100 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                placeholder="Reason or notes…"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setConfirmReq(null)}
                className="flex-1 py-2.5 text-sm border border-slate-200 text-slate-600 hover:bg-blue-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdate(confirmReq.id, "completed", confirmNotes)}
                disabled={updating === confirmReq.id}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-600 hover:bg-red-700 text-slate-900 text-sm font-medium rounded-xl disabled:opacity-60 transition-colors"
              >
                {updating === confirmReq.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                Confirm deletion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
