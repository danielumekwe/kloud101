"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { getAuthToken } from "@/lib/api"
import {
  getUserConsentStatus,
  getUserCookiePreferences,
  updateCookiePreferences,
  getMarketingPreferences,
  updateMarketingPreferences,
  requestDataExport,
  requestAccountDeletion,
  getActiveSessions,
  revokeSession,
  getLoginHistory,
  type ConsentStatus,
  type CookiePreferences,
  type MarketingPreferences,
  type ActiveSession,
  type LoginHistoryEntry,
} from "@/lib/legal-api"
import { cn } from "@/lib/utils"
import {
  Shield,
  FileText,
  Cookie,
  Mail,
  Download,
  Trash2,
  Monitor,
  History,
  Check,
  ChevronRight,
  Lock,
  AlertCircle,
  Loader2,
  LogOut,
  RefreshCw,
  Info,
  Bell,
  Smartphone,
  X,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

type SectionState = "idle" | "loading" | "success" | "error"

// ─── Shared ───────────────────────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
  description,
  iconColor = "text-blue-400",
  bgColor = "bg-blue-500/10 border-blue-500/20",
}: {
  icon: React.ElementType
  title: string
  description: string
  iconColor?: string
  bgColor?: string
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0", bgColor)}>
        <Icon className={cn("w-5 h-5", iconColor)} />
      </div>
      <div>
        <h2 className="font-semibold text-slate-900 dark:text-white">{title}</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </div>
  )
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6", className)}>
      {children}
    </div>
  )
}

function Toggle({
  enabled,
  onChange,
  disabled,
  label,
}: {
  enabled: boolean
  onChange: (v: boolean) => void
  disabled?: boolean
  label: string
}) {
  return (
    <button
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!enabled)}
      className={cn(
        "relative w-11 h-6 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        enabled ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform",
          enabled && "translate-x-5"
        )}
      />
    </button>
  )
}

function StatusBadge({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium",
        ok
          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
          : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
      )}
    >
      {ok ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
      {label}
    </span>
  )
}

// ─── Confirm Dialog ───────────────────────────────────────────────────────────

function ConfirmDialog({
  title,
  message,
  confirmLabel,
  confirmClass,
  onConfirm,
  onCancel,
  loading,
  children,
}: {
  title: string
  message: string
  confirmLabel: string
  confirmClass?: string
  onConfirm: () => void
  onCancel: () => void
  loading?: boolean
  children?: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} aria-hidden="true" />
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl p-6 max-w-md w-full">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{message}</p>
        {children}
        <div className="flex gap-3 mt-5">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 px-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors disabled:opacity-60",
              confirmClass ?? "bg-red-600 hover:bg-red-700 text-white"
            )}
          >
            {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacySecurityPage() {
  const [token, setToken] = useState<string | null>(null)
  const [authChecked, setAuthChecked] = useState(false)

  // Section data
  const [consent, setConsent] = useState<ConsentStatus | null>(null)
  const [cookiePrefs, setCookiePrefs] = useState<CookiePreferences | null>(null)
  const [marketingPrefs, setMarketingPrefs] = useState<MarketingPreferences | null>(null)
  const [sessions, setSessions] = useState<ActiveSession[]>([])
  const [loginHistory, setLoginHistory] = useState<LoginHistoryEntry[]>([])

  // UI state
  const [cookieState, setCookieState] = useState<SectionState>("idle")
  const [marketingState, setMarketingState] = useState<SectionState>("idle")
  const [exportState, setExportState] = useState<SectionState>("idle")
  const [deleteState, setDeleteState] = useState<SectionState>("idle")
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteReason, setDeleteReason] = useState("")
  const [revokingId, setRevokingId] = useState<string | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  // Auth check
  useEffect(() => {
    const t = getAuthToken()
    setToken(t)
    setAuthChecked(true)
  }, [])

  // Load all data
  const loadData = useCallback(async (t: string) => {
    setLoadError(null)
    try {
      const [consentData, cookieData, marketingData, sessionData, historyData] =
        await Promise.allSettled([
          getUserConsentStatus(t),
          getUserCookiePreferences(t),
          getMarketingPreferences(t),
          getActiveSessions(t),
          getLoginHistory(t),
        ])

      if (consentData.status === "fulfilled") setConsent(consentData.value)
      if (cookieData.status === "fulfilled") setCookiePrefs(cookieData.value)
      if (marketingData.status === "fulfilled") setMarketingPrefs(marketingData.value)
      if (sessionData.status === "fulfilled") setSessions(sessionData.value)
      if (historyData.status === "fulfilled") setLoginHistory(historyData.value)
    } catch {
      setLoadError("Failed to load some data. Please refresh.")
    }
  }, [])

  useEffect(() => {
    if (token) loadData(token)
  }, [token, loadData])

  // ── Cookie preferences update ──────────────────────────────────────────────

  async function saveCookiePrefs(patch: Partial<CookiePreferences>) {
    if (!token || !cookiePrefs) return
    setCookieState("loading")
    const next = { ...cookiePrefs, ...patch }
    setCookiePrefs(next)
    try {
      await updateCookiePreferences(token, next)
      setCookieState("success")
    } catch {
      setCookiePrefs(cookiePrefs)
      setCookieState("error")
    } finally {
      setTimeout(() => setCookieState("idle"), 2000)
    }
  }

  // ── Marketing preferences update ───────────────────────────────────────────

  async function saveMarketingPrefs(patch: Partial<MarketingPreferences>) {
    if (!token || !marketingPrefs) return
    setMarketingState("loading")
    const next = { ...marketingPrefs, ...patch }
    setMarketingPrefs(next)
    try {
      await updateMarketingPreferences(token, next)
      setMarketingState("success")
    } catch {
      setMarketingPrefs(marketingPrefs)
      setMarketingState("error")
    } finally {
      setTimeout(() => setMarketingState("idle"), 2000)
    }
  }

  // ── Data export request ────────────────────────────────────────────────────

  async function handleDataExport() {
    if (!token) return
    setExportState("loading")
    try {
      await requestDataExport(token)
      setExportState("success")
    } catch {
      setExportState("error")
    } finally {
      setTimeout(() => setExportState("idle"), 4000)
    }
  }

  // ── Account deletion request ───────────────────────────────────────────────

  async function handleAccountDeletion() {
    if (!token) return
    setDeleteState("loading")
    try {
      await requestAccountDeletion(token, deleteReason)
      setDeleteState("success")
      setShowDeleteConfirm(false)
    } catch {
      setDeleteState("error")
    } finally {
      setTimeout(() => setDeleteState("idle"), 4000)
    }
  }

  // ── Session revoke ─────────────────────────────────────────────────────────

  async function handleRevokeSession(sessionId: string) {
    if (!token) return
    setRevokingId(sessionId)
    try {
      await revokeSession(token, sessionId)
      setSessions((prev) => prev.filter((s) => s.id !== sessionId))
    } catch {
      // leave as-is
    } finally {
      setRevokingId(null)
    }
  }

  // ── Not authenticated ──────────────────────────────────────────────────────

  if (authChecked && !token) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh] px-6">
          <div className="text-center max-w-md">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-7 h-7 text-slate-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Sign in to access Privacy & Security
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Your privacy settings and security information are available after signing in.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/login"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="px-6 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 font-medium rounded-xl text-sm transition-colors"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // ── Loading ────────────────────────────────────────────────────────────────

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
        <Footer />
      </div>
    )
  }

  // ── Main Page ──────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0f]">
      <Navbar />

      {/* Hero */}
      <section className="bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link href="/dashboard" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              Dashboard
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span>Settings</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 dark:text-white">Privacy & Security</span>
          </nav>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
            Privacy & Security
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Manage your data, consents, active sessions and account security.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">

        {loadError && (
          <div className="flex items-center gap-2.5 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl text-sm text-yellow-700 dark:text-yellow-400">
            <Info className="w-4 h-4 flex-shrink-0" />
            {loadError}
            <button
              onClick={() => token && loadData(token)}
              className="ml-auto flex items-center gap-1 underline"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retry
            </button>
          </div>
        )}

        {/* ── Privacy Policy Status ──────────────────────────────────────── */}

        <Card>
          <SectionHeader
            icon={FileText}
            title="Privacy Policy Status"
            description="Your current acceptance status for our legal documents."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Privacy Policy
                </span>
                <StatusBadge
                  ok={consent?.privacyAccepted ?? false}
                  label={consent?.privacyAccepted ? "Accepted" : "Not accepted"}
                />
              </div>
              {consent?.privacyAccepted && (
                <p className="text-xs text-slate-500">
                  Version {consent.privacyVersion} · Accepted{" "}
                  {new Date(consent.acceptedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </p>
              )}
              <Link href="/privacy-policy" className="mt-3 inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline">
                View document <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Terms of Service
                </span>
                <StatusBadge
                  ok={consent?.termsAccepted ?? false}
                  label={consent?.termsAccepted ? "Accepted" : "Not accepted"}
                />
              </div>
              {consent?.termsAccepted && (
                <p className="text-xs text-slate-500">
                  Version {consent.termsVersion} · Accepted{" "}
                  {new Date(consent.acceptedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </p>
              )}
              <Link href="/terms-of-service" className="mt-3 inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline">
                View document <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </Card>

        {/* ── Cookie Preferences ────────────────────────────────────────────── */}

        <Card>
          <SectionHeader
            icon={Cookie}
            title="Cookie Preferences"
            description="Control which cookies we use to personalise your experience."
            iconColor="text-amber-400"
            bgColor="bg-amber-500/10 border-amber-500/20"
          />

          <div className="space-y-3">
            {[
              {
                key: "necessary" as const,
                label: "Necessary",
                desc: "Essential for the site to function. Cannot be disabled.",
                locked: true,
                value: true,
              },
              {
                key: "analytics" as const,
                label: "Analytics",
                desc: "Help us understand how you use our platform.",
                locked: false,
                value: cookiePrefs?.analytics ?? false,
              },
              {
                key: "marketing" as const,
                label: "Marketing",
                desc: "Personalised offers and promotional content.",
                locked: false,
                value: cookiePrefs?.marketing ?? false,
              },
            ].map(({ key, label, desc, locked, value }) => (
              <div
                key={key}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{label}</span>
                    {locked && (
                      <span className="text-xs px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                        Always on
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
                </div>
                <Toggle
                  enabled={value}
                  onChange={(v) => saveCookiePrefs({ [key]: v })}
                  disabled={locked || cookieState === "loading"}
                  label={`${label} cookies`}
                />
              </div>
            ))}
          </div>

          {cookieState !== "idle" && (
            <div className={cn("mt-3 flex items-center gap-2 text-xs", cookieState === "error" ? "text-red-500" : "text-green-500")}>
              {cookieState === "loading" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {cookieState === "success" && <Check className="w-3.5 h-3.5" />}
              {cookieState === "loading" ? "Saving…" : cookieState === "success" ? "Saved" : "Failed to save"}
            </div>
          )}
        </Card>

        {/* ── Marketing Preferences ─────────────────────────────────────────── */}

        <Card>
          <SectionHeader
            icon={Bell}
            title="Marketing Preferences"
            description="Choose how we communicate with you about offers and updates."
            iconColor="text-purple-400"
            bgColor="bg-purple-500/10 border-purple-500/20"
          />

          <div className="space-y-3">
            {[
              {
                key: "email" as const,
                icon: Mail,
                label: "Email marketing",
                desc: "Promotions, offers and product updates by email.",
                value: marketingPrefs?.email ?? false,
              },
              {
                key: "sms" as const,
                icon: Smartphone,
                label: "SMS notifications",
                desc: "Text messages for offers and important alerts.",
                value: marketingPrefs?.sms ?? false,
              },
              {
                key: "pushNotifications" as const,
                icon: Bell,
                label: "Push notifications",
                desc: "Browser and app push notifications.",
                value: marketingPrefs?.pushNotifications ?? false,
              },
            ].map(({ key, icon: Icon, label, desc, value }) => (
              <div
                key={key}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
                  </div>
                </div>
                <Toggle
                  enabled={value}
                  onChange={(v) => saveMarketingPrefs({ [key]: v })}
                  disabled={marketingState === "loading"}
                  label={label}
                />
              </div>
            ))}
          </div>

          {marketingState !== "idle" && (
            <div className={cn("mt-3 flex items-center gap-2 text-xs", marketingState === "error" ? "text-red-500" : "text-green-500")}>
              {marketingState === "loading" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {marketingState === "success" && <Check className="w-3.5 h-3.5" />}
              {marketingState === "loading" ? "Saving…" : marketingState === "success" ? "Saved" : "Failed to save"}
            </div>
          )}
        </Card>

        {/* ── Active Sessions ───────────────────────────────────────────────── */}

        <Card>
          <SectionHeader
            icon={Monitor}
            title="Active Sessions"
            description="Devices currently signed in to your account."
            iconColor="text-cyan-400"
            bgColor="bg-cyan-500/10 border-cyan-500/20"
          />

          {sessions.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">No active sessions found.</p>
          ) : (
            <div className="space-y-3">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <Monitor className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                          {session.device} · {session.browser}
                        </span>
                        {session.isCurrent && (
                          <span className="text-xs px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                            Current session
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {session.location} · {session.ipAddress}
                      </p>
                      <p className="text-xs text-slate-400">
                        Last active: {new Date(session.lastActive).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {!session.isCurrent && (
                    <button
                      onClick={() => handleRevokeSession(session.id)}
                      disabled={revokingId === session.id}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg transition-colors disabled:opacity-50 flex-shrink-0 ml-3"
                    >
                      {revokingId === session.id ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <LogOut className="w-3 h-3" />
                      )}
                      Revoke
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* ── Login History ─────────────────────────────────────────────────── */}

        <Card>
          <SectionHeader
            icon={History}
            title="Login History"
            description="Recent sign-in attempts to your account."
            iconColor="text-indigo-400"
            bgColor="bg-indigo-500/10 border-indigo-500/20"
          />

          {loginHistory.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">No login history available.</p>
          ) : (
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-sm min-w-[540px]">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left text-xs font-semibold text-slate-500 dark:text-slate-400 pb-3 pr-4">
                      Date & Time
                    </th>
                    <th className="text-left text-xs font-semibold text-slate-500 dark:text-slate-400 pb-3 pr-4">
                      Device
                    </th>
                    <th className="text-left text-xs font-semibold text-slate-500 dark:text-slate-400 pb-3 pr-4">
                      Location
                    </th>
                    <th className="text-left text-xs font-semibold text-slate-500 dark:text-slate-400 pb-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loginHistory.map((entry) => (
                    <tr key={entry.id} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                      <td className="py-3 pr-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {new Date(entry.timestamp).toLocaleString()}
                      </td>
                      <td className="py-3 pr-4 text-slate-700 dark:text-slate-300">
                        {entry.device} · {entry.browser}
                      </td>
                      <td className="py-3 pr-4 text-slate-600 dark:text-slate-400">
                        {entry.location} ({entry.ipAddress})
                      </td>
                      <td className="py-3">
                        <StatusBadge
                          ok={entry.status === "success"}
                          label={entry.status === "success" ? "Success" : "Failed"}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        {/* ── Download My Data ──────────────────────────────────────────────── */}

        <Card>
          <SectionHeader
            icon={Download}
            title="Download My Data"
            description="Request a copy of all personal data we hold about you."
            iconColor="text-green-400"
            bgColor="bg-green-500/10 border-green-500/20"
          />
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
            Your data export will be prepared and sent to your registered email address
            within 72 hours. You can request a copy once every 30 days.
          </p>

          {exportState === "success" ? (
            <div className="flex items-center gap-2.5 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-green-700 dark:text-green-400">
              <Check className="w-4 h-4 flex-shrink-0" />
              Export requested! Check your email within 72 hours.
            </div>
          ) : exportState === "error" ? (
            <div className="flex items-center gap-2.5 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-sm text-red-700 dark:text-red-400">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Request failed. Please try again or contact support.
            </div>
          ) : (
            <button
              onClick={handleDataExport}
              disabled={exportState === "loading"}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 disabled:opacity-60 transition-colors"
            >
              {exportState === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              Request data export
            </button>
          )}
        </Card>

        {/* ── Request Account Deletion ──────────────────────────────────────── */}

        <Card>
          <SectionHeader
            icon={Trash2}
            title="Request Account Deletion"
            description="Permanently delete your account and all associated data."
            iconColor="text-red-400"
            bgColor="bg-red-500/10 border-red-500/20"
          />

          <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl mb-5">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 dark:text-red-400">
                Account deletion is permanent and irreversible. All your servers, data,
                billing records and backups will be permanently removed after a 14-day
                grace period.
              </p>
            </div>
          </div>

          {deleteState === "success" ? (
            <div className="flex items-center gap-2.5 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-green-700 dark:text-green-400">
              <Check className="w-4 h-4 flex-shrink-0" />
              Deletion request submitted. Our team will contact you within 48 hours.
            </div>
          ) : (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              disabled={deleteState === "loading"}
              className="flex items-center gap-2 px-5 py-2.5 border border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 font-medium text-sm rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-60 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Request account deletion
            </button>
          )}
        </Card>

      </div>

      {/* Delete confirm dialog */}
      {showDeleteConfirm && (
        <ConfirmDialog
          title="Delete your account?"
          message="This action cannot be undone. All your data will be permanently deleted after a 14-day grace period."
          confirmLabel="Submit deletion request"
          confirmClass="bg-red-600 hover:bg-red-700 text-white"
          onConfirm={handleAccountDeletion}
          onCancel={() => setShowDeleteConfirm(false)}
          loading={deleteState === "loading"}
        >
          <div>
            <label htmlFor="deleteReason" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Reason (optional)
            </label>
            <textarea
              id="deleteReason"
              value={deleteReason}
              onChange={(e) => setDeleteReason(e.target.value)}
              rows={3}
              placeholder="Tell us why you're leaving…"
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
          </div>
        </ConfirmDialog>
      )}

      <Footer />
    </div>
  )
}
