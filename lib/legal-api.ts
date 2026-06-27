import { apiFetch, apiFetchAuth } from "./api"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LegalDocument {
  id: string
  title: string
  slug: string
  content: string // HTML
  effectiveDate: string
  lastUpdated: string
  version: string
}

export interface ConsentLog {
  id: string
  userId: string
  email: string
  documentType: string
  version: string
  acceptedAt: string
  ipAddress: string
  userAgent: string
}

export interface PrivacyRequest {
  id: string
  userId: string
  email: string
  type: "data_export" | "account_deletion" | "data_correction"
  status: "pending" | "processing" | "completed" | "rejected"
  createdAt: string
  completedAt?: string
  notes?: string
}

export interface ActiveSession {
  id: string
  device: string
  browser: string
  ipAddress: string
  location: string
  lastActive: string
  isCurrent: boolean
}

export interface LoginHistoryEntry {
  id: string
  ipAddress: string
  location: string
  device: string
  browser: string
  timestamp: string
  status: "success" | "failed"
}

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

export interface MarketingPreferences {
  email: boolean
  sms: boolean
  pushNotifications: boolean
  updatedAt: string
}

export interface ConsentStatus {
  termsAccepted: boolean
  privacyAccepted: boolean
  termsVersion: string
  privacyVersion: string
  acceptedAt: string
}

export interface Paginated<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

// ─── Public: Legal Documents ──────────────────────────────────────────────────

export const getLegalDocument = (slug: string) =>
  apiFetch<LegalDocument>(`/legal/${slug}`)

// ─── User: Privacy & Security ─────────────────────────────────────────────────

export const getUserConsentStatus = (token: string) =>
  apiFetchAuth<ConsentStatus>("/user/consent-status", token)

export const getUserCookiePreferences = (token: string) =>
  apiFetchAuth<CookiePreferences>("/user/privacy/cookie-preferences", token)

export const updateCookiePreferences = (
  token: string,
  prefs: Partial<CookiePreferences>
) =>
  apiFetchAuth<CookiePreferences>("/user/privacy/cookie-preferences", token, {
    method: "PUT",
    body: JSON.stringify(prefs),
  })

export const getMarketingPreferences = (token: string) =>
  apiFetchAuth<MarketingPreferences>(
    "/user/privacy/marketing-preferences",
    token
  )

export const updateMarketingPreferences = (
  token: string,
  prefs: Partial<MarketingPreferences>
) =>
  apiFetchAuth<MarketingPreferences>(
    "/user/privacy/marketing-preferences",
    token,
    { method: "PUT", body: JSON.stringify(prefs) }
  )

export const requestDataExport = (token: string) =>
  apiFetchAuth<{ requestId: string; message: string }>(
    "/user/privacy/data-export",
    token,
    { method: "POST" }
  )

export const requestAccountDeletion = (token: string, reason?: string) =>
  apiFetchAuth<{ requestId: string; message: string }>(
    "/user/privacy/account-deletion",
    token,
    { method: "POST", body: JSON.stringify({ reason }) }
  )

export const getActiveSessions = (token: string) =>
  apiFetchAuth<ActiveSession[]>("/user/sessions", token)

export const revokeSession = (token: string, sessionId: string) =>
  apiFetchAuth<void>(`/user/sessions/${sessionId}`, token, {
    method: "DELETE",
  })

export const getLoginHistory = (token: string) =>
  apiFetchAuth<LoginHistoryEntry[]>("/user/login-history", token)

// ─── Admin: Compliance ────────────────────────────────────────────────────────

export const adminGetLegalDocuments = (token: string) =>
  apiFetchAuth<LegalDocument[]>("/admin/legal-documents", token)

export const adminUpdateLegalDocument = (
  token: string,
  id: string,
  data: Partial<LegalDocument>
) =>
  apiFetchAuth<LegalDocument>(`/admin/legal-documents/${id}`, token, {
    method: "PUT",
    body: JSON.stringify(data),
  })

export const adminGetConsentLogs = (
  token: string,
  page = 1,
  limit = 50,
  search = ""
) =>
  apiFetchAuth<Paginated<ConsentLog>>(
    `/admin/consent-logs?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
    token
  )

export const adminGetPrivacyRequests = (
  token: string,
  status = "",
  type = "",
  page = 1
) =>
  apiFetchAuth<Paginated<PrivacyRequest>>(
    `/admin/privacy-requests?status=${status}&type=${type}&page=${page}`,
    token
  )

export const adminUpdatePrivacyRequest = (
  token: string,
  id: string,
  status: string,
  notes?: string
) =>
  apiFetchAuth<PrivacyRequest>(`/admin/privacy-requests/${id}`, token, {
    method: "PUT",
    body: JSON.stringify({ status, notes }),
  })

export const adminGetDataExportRequests = (token: string, page = 1) =>
  apiFetchAuth<Paginated<PrivacyRequest>>(
    `/admin/privacy-requests?type=data_export&page=${page}`,
    token
  )

export const adminGetAccountDeletionRequests = (token: string, page = 1) =>
  apiFetchAuth<Paginated<PrivacyRequest>>(
    `/admin/privacy-requests?type=account_deletion&page=${page}`,
    token
  )
