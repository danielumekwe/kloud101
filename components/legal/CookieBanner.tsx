"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Cookie, Settings, X, Check, ChevronDown, ChevronUp, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

interface CookiePrefs {
  necessary: true
  analytics: boolean
  marketing: boolean
  savedAt: string
}

const STORAGE_KEY = "kloud101-cookie-prefs"

// ─── Component ────────────────────────────────────────────────────────────────

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [panel, setPanel] = useState<"banner" | "customize">("banner")
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [saving, setSaving] = useState(false)
  const firstFocusRef = useRef<HTMLButtonElement>(null)
  const customizeFirstRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        setTimeout(() => setVisible(true), 800)
      }
    } catch {
      // localStorage unavailable
    }
  }, [])

  // Trap focus on customize panel open
  useEffect(() => {
    if (panel === "customize") customizeFirstRef.current?.focus()
    if (panel === "banner") firstFocusRef.current?.focus()
  }, [panel])

  function persist(prefs: Omit<CookiePrefs, "savedAt">) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...prefs, savedAt: new Date().toISOString() })
      )
    } catch {
      // ignore
    }
  }

  function acceptAll() {
    setSaving(true)
    persist({ necessary: true, analytics: true, marketing: true })
    setTimeout(() => {
      setVisible(false)
      setSaving(false)
    }, 300)
  }

  function rejectNonEssential() {
    persist({ necessary: true, analytics: false, marketing: false })
    setVisible(false)
  }

  function saveCustom() {
    setSaving(true)
    persist({ necessary: true, analytics, marketing })
    setTimeout(() => {
      setVisible(false)
      setSaving(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-[2px] print:hidden"
        aria-hidden="true"
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie preferences"
        className="fixed bottom-4 left-4 right-4 z-[100] max-w-2xl mx-auto print:hidden"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">

          {/* Main banner */}
          {panel === "banner" && (
            <div className="p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-slate-900 dark:text-white mb-1">
                    We use cookies
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    We use cookies to improve your experience, analyse traffic,
                    and personalise content. You can choose which categories to
                    allow.{" "}
                    <Link
                      href="/cookie-policy"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  ref={firstFocusRef}
                  onClick={acceptAll}
                  disabled={saving}
                  className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Accept All
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setPanel("customize")}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
              </div>
            </div>
          )}

          {/* Customize panel */}
          {panel === "customize" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-slate-900 dark:text-white">
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setPanel("banner")}
                  className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Back to banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary */}
                <CookieCategory
                  ref={customizeFirstRef}
                  name="Necessary"
                  description="Required for the site to function. Cannot be disabled."
                  enabled={true}
                  locked
                  icon={<Shield className="w-4 h-4 text-green-500" />}
                />

                {/* Analytics */}
                <CookieCategory
                  name="Analytics"
                  description="Help us understand how visitors interact with our site so we can improve it."
                  enabled={analytics}
                  onChange={setAnalytics}
                />

                {/* Marketing */}
                <CookieCategory
                  name="Marketing"
                  description="Used to show you relevant adverts and promotions based on your interests."
                  enabled={marketing}
                  onChange={setMarketing}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={saveCustom}
                  disabled={saving}
                  className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  disabled={saving}
                  className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ─── Cookie Category Row ──────────────────────────────────────────────────────

import { forwardRef } from "react"

const CookieCategory = forwardRef<
  HTMLButtonElement,
  {
    name: string
    description: string
    enabled: boolean
    locked?: boolean
    onChange?: (v: boolean) => void
    icon?: React.ReactNode
  }
>(({ name, description, enabled, locked, onChange, icon }, ref) => (
  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-sm font-medium text-slate-900 dark:text-white">
          {name}
        </span>
        {locked && (
          <span className="text-xs px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
            Always on
          </span>
        )}
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>

    {/* Toggle */}
    <button
      ref={ref}
      role="switch"
      aria-checked={enabled}
      aria-label={`${name} cookies`}
      disabled={locked}
      onClick={() => onChange?.(!enabled)}
      className={cn(
        "relative w-11 h-6 rounded-full flex-shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        enabled
          ? "bg-blue-600"
          : "bg-slate-300 dark:bg-slate-600",
        locked && "opacity-60 cursor-not-allowed"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform",
          enabled && "translate-x-5"
        )}
      />
      <span className="sr-only">{enabled ? "Enabled" : "Disabled"}</span>
    </button>
  </div>
))

CookieCategory.displayName = "CookieCategory"
