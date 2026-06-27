"use client"

import { useState, useRef, FormEvent, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Check, X, Loader2, AlertCircle, ChevronRight, ExternalLink, Shield, Zap, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { apiFetch, ApiError } from "@/lib/api"

// ─── Types ────────────────────────────────────────────────────────────────────

interface RegisterPayload {
  firstName: string
  lastName: string
  email: string
  password: string
  agreedToTerms: boolean
}

type Status = "idle" | "loading" | "success" | "error"

// ─── Password Strength ────────────────────────────────────────────────────────

function passwordStrength(pw: string): { score: number; label: string; color: string } {
  let score = 0
  if (pw.length >= 8) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++

  if (score <= 1) return { score, label: "Weak", color: "bg-red-500" }
  if (score === 2) return { score, label: "Fair", color: "bg-yellow-500" }
  if (score === 3) return { score, label: "Good", color: "bg-blue-500" }
  return { score, label: "Strong", color: "bg-green-500" }
}

// ─── Document Modal ───────────────────────────────────────────────────────────

function DocumentModal({
  url,
  title,
  onClose,
}: {
  url: string
  title: string
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
          <h2 className="font-semibold text-slate-900 dark:text-white">{title}</h2>
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in tab
            </a>
            <button
              ref={closeRef}
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Content */}
        <iframe
          src={url}
          title={title}
          className="flex-1 w-full border-0 min-h-0"
          style={{ minHeight: "60vh" }}
        />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [modal, setModal] = useState<null | "terms" | "privacy">(null)

  const strength = password ? passwordStrength(password) : null
  const passwordMatch = confirmPassword ? password === confirmPassword : null

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErrorMsg("")

    if (!agreed) {
      setErrorMsg("You must accept the Terms of Service and Privacy Policy to register.")
      return
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.")
      return
    }
    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.")
      return
    }

    setStatus("loading")

    try {
      await apiFetch<{ token: string }>("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          agreedToTerms: true,
        } satisfies RegisterPayload),
      })
      setStatus("success")
    } catch (err) {
      const msg =
        err instanceof ApiError
          ? err.status === 409
            ? "An account with this email already exists."
            : err.status === 422
            ? "Please check your details and try again."
            : "Registration failed. Please try again."
          : "An unexpected error occurred."
      setErrorMsg(msg)
      setStatus("error")
    }
  }

  // ── Success ──────────────────────────────────────────────────────────────────

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-2xl font-bold mb-3">Account created!</h1>
          <p className="text-slate-400 mb-8">
            Welcome to Kloud101. Check your inbox for a verification email to
            activate your account.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
          >
            Sign in to your account
          </Link>
        </div>
      </div>
    )
  }

  // ── Form ─────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Document modals */}
      {modal === "terms" && (
        <DocumentModal
          title="Terms of Service"
          url="/terms-of-service"
          onClose={() => setModal(null)}
        />
      )}
      {modal === "privacy" && (
        <DocumentModal
          title="Privacy Policy"
          url="/privacy-policy"
          onClose={() => setModal(null)}
        />
      )}

      <div className="min-h-screen bg-[#030712] text-white flex">

        {/* Left panel — branding */}
        <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] flex-col justify-between p-12 relative overflow-hidden">

          {/* Background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full" aria-hidden="true" />

          {/* Logo */}
          <div className="relative">
            <Link href="/">
              <Image src="/logo.png" alt="Kloud101" width={110} height={76} />
            </Link>
          </div>

          {/* Content */}
          <div className="relative space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-3">
                Start your cloud journey
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Join thousands of businesses running on Kloud101's
                high-performance infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Zap, title: "Deploy in seconds", desc: "Instant provisioning with one-click setups" },
                { icon: Shield, title: "Enterprise security", desc: "DDoS protection, firewalls and daily backups" },
                { icon: Globe, title: "Global network", desc: "Low-latency nodes across Africa, Europe and North America" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{title}</p>
                    <p className="text-slate-500 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="relative text-xs text-slate-600">
            © {new Date().getFullYear()} Kloud101. All rights reserved.
          </p>
        </div>

        {/* Right panel — form */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="lg:hidden mb-8">
              <Link href="/">
                <Image src="/logo.png" alt="Kloud101" width={90} height={62} />
              </Link>
            </div>

            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">Create your account</h1>
              <p className="text-slate-400 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400 hover:text-blue-300 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1.5">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    autoComplete="given-name"
                    placeholder="Daniel"
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1.5">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    autoComplete="family-name"
                    placeholder="Umekwe"
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    className="w-full pl-4 pr-10 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Strength meter */}
                {strength && (
                  <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4].map((n) => (
                        <div
                          key={n}
                          className={cn(
                            "h-1 flex-1 rounded-full transition-all",
                            n <= strength.score ? strength.color : "bg-slate-800"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">
                      Strength: <span className="text-slate-300">{strength.label}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    placeholder="Repeat password"
                    className={cn(
                      "w-full pl-4 pr-10 py-2.5 bg-slate-900 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition",
                      passwordMatch === false
                        ? "border-red-500/70"
                        : passwordMatch === true
                        ? "border-green-500/70"
                        : "border-slate-700"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                    aria-label={showConfirm ? "Hide password" : "Show password"}
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {passwordMatch === false && (
                  <p className="text-xs text-red-400 mt-1">Passwords do not match</p>
                )}
              </div>

              {/* Terms checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="sr-only"
                      aria-required="true"
                    />
                    <div
                      onClick={() => setAgreed((v) => !v)}
                      className={cn(
                        "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all cursor-pointer",
                        agreed
                          ? "bg-blue-600 border-blue-600"
                          : "border-slate-600 group-hover:border-slate-400 bg-slate-900"
                      )}
                      role="checkbox"
                      aria-checked={agreed}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "Enter") {
                          e.preventDefault()
                          setAgreed((v) => !v)
                        }
                      }}
                    >
                      {agreed && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </div>
                  <span className="text-sm text-slate-400 leading-snug">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setModal("terms")}
                      className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
                    >
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      onClick={() => setModal("privacy")}
                      className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
                    >
                      Privacy Policy
                    </button>
                  </span>
                </label>
              </div>

              {/* Error */}
              {errorMsg && (
                <div className="flex items-start gap-2.5 p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || !agreed}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Creating account…
                  </>
                ) : (
                  <>
                    Create account
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

            <p className="mt-8 text-xs text-slate-600 text-center">
              By creating an account you confirm that you are at least 18 years
              old and have read our{" "}
              <Link href="/privacy-policy" target="_blank" className="text-slate-500 hover:text-slate-300 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
