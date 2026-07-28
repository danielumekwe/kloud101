"use client";

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState, useRef, useEffect, FormEvent } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  projectDetails: string;
  budget: string;
  timeline: string;
  requirements: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICES = [
  "Hosting",
  "Business Email",
  "Cloud Servers",
  "Managed VPS",
  "Dedicated Servers",
  "Backup Solutions",
  "Cyber Security",
  "Migration Services",
];

const BUDGETS = [
  "Under $500/month",
  "$500 – $2,000/month",
  "$2,000 – $5,000/month",
  "$5,000 – $10,000/month",
  "$10,000+/month",
  "Custom / Enterprise",
];

const TIMELINES = [
  "Immediately",
  "Within 2 weeks",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Just exploring",
];

const COUNTRIES = [
  "Nigeria", "United Kingdom", "United States", "Canada", "Germany",
  "South Africa", "Ghana", "Kenya", "India", "Australia", "Other",
];

// ─── Metadata (exported separately for App Router) ───────────────────────────

// Note: Since this is a "use client" file, metadata must be in a separate
// layout.tsx or a wrapper server component. Provided here as reference:
// export const metadata: Metadata = {
//   title: "Contact Us | Kloud101 – Cloud Infrastructure Experts",
//   description:
//     "Get in touch with Kloud101's cloud infrastructure specialists. Expert support for hosting, VPS, dedicated servers, migration, and enterprise cloud solutions.",
//   openGraph: {
//     title: "Contact Kloud101 – Talk To Cloud Infrastructure Experts",
//     description:
//       "Whether you're launching a startup or scaling enterprise workloads, our cloud specialists are ready to help.",
//     url: "https://kloud101.com/contact",
//     siteName: "Kloud101",
//     type: "website",
//   },
// };

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-white" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[140px] animate-pulse-slow" />
      <div className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[120px] animate-pulse-slower" />
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[100px] animate-pulse-slow" />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#ffffff_100%)]" />
    </div>
  );
}

interface FloatingCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: string;
}

function FloatingCard({ icon, label, value, delay = "0s" }: FloatingCardProps) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-blue-50 backdrop-blur-md shadow-xl animate-float"
      style={{ animationDelay: delay }}
    >
      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-slate-600 uppercase tracking-wider font-medium">{label}</p>
        <p className="text-sm text-slate-900 font-semibold leading-tight">{value}</p>
      </div>
    </div>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  href: string;
  cta: string;
  color: string;
}

function ContactCard({ icon, title, description, contact, href, cta, color }: ContactCardProps) {
  return (
    <a
      href={href}
      className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-slate-200 bg-blue-50/60 backdrop-blur-sm hover:bg-blue-50/80 hover:border-blue-300 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label={`${title}: ${contact}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-slate-900 font-semibold text-base mb-1">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">{description}</p>
        <p className="text-blue-600 text-sm font-medium break-all">{contact}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
        {cta}
        <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 1px 0 rgba(15,23,42,0.06)" }} />
    </a>
  );
}

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoComplete?: string;
}

function FloatingInput({ id, label, type = "text", value, onChange, required, autoComplete }: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        autoComplete={autoComplete}
        aria-label={label}
        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-blue-50 border border-slate-200 text-slate-900 text-sm placeholder-transparent focus:outline-none focus:border-blue-500/70 focus:bg-blue-50 transition-all duration-200 autofill:bg-blue-50"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${active ? "top-2 text-[10px] text-blue-600 font-medium tracking-wide uppercase" : "top-1/2 -translate-y-1/2 text-sm text-slate-600"}`}
      >
        {label}{required && <span className="text-blue-500 ml-0.5">*</span>}
      </label>
    </div>
  );
}

interface FloatingSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}

function FloatingSelect({ id, label, value, onChange, options, required }: FloatingSelectProps) {
  const active = value.length > 0;

  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-label={label}
        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-blue-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500/70 focus:bg-blue-50 transition-all duration-200 appearance-none cursor-pointer"
        style={{ colorScheme: "light" }}
      >
        <option value="" disabled className="bg-white text-slate-600" />
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-white text-slate-900">
            {opt}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${active ? "top-2 text-[10px] text-blue-600 font-medium tracking-wide uppercase" : "top-1/2 -translate-y-1/2 text-sm text-slate-600"}`}
      >
        {label}{required && <span className="text-blue-500 ml-0.5">*</span>}
      </label>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

interface FloatingTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
}

function FloatingTextarea({ id, label, value, onChange, rows = 4, required }: FloatingTextareaProps) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        aria-label={label}
        placeholder={label}
        className="peer w-full px-4 pt-7 pb-3 rounded-xl bg-blue-50 border border-slate-200 text-slate-900 text-sm placeholder-transparent focus:outline-none focus:border-blue-500/70 focus:bg-blue-50 transition-all duration-200 resize-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${active ? "top-2 text-[10px] text-blue-600 font-medium tracking-wide uppercase" : "top-4 text-sm text-slate-600"}`}
      >
        {label}{required && <span className="text-blue-500 ml-0.5">*</span>}
      </label>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconMail = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconHeadset = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
  </svg>
);

const IconCreditCard = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconBriefcase = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconClock = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconGlobe = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconServer = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const IconUsers = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconArrowUp = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

const IconMapPin = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// ─── Cloud SVG Illustration ───────────────────────────────────────────────────

function CloudInfraIllustration() {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full opacity-80"
      aria-hidden="true"
    >
      {/* Central cloud */}
      <ellipse cx="240" cy="140" rx="80" ry="50" fill="url(#cloudGrad)" opacity="0.15" />
      <path d="M160 145 Q160 110 195 110 Q200 90 225 88 Q235 72 255 72 Q280 72 290 90 Q310 88 322 104 Q338 104 340 120 Q355 122 355 140 Q355 158 338 160 H162 Q145 160 145 145 Q145 130 160 125 Z"
        fill="url(#cloudMainGrad)" opacity="0.6" />

      {/* Server nodes */}
      {[
        { x: 70, y: 200, label: "DB" },
        { x: 160, y: 240, label: "API" },
        { x: 240, y: 260, label: "CDN" },
        { x: 320, y: 240, label: "LB" },
        { x: 400, y: 200, label: "VM" },
      ].map(({ x, y, label }) => (
        <g key={label}>
          <rect x={x - 22} y={y - 14} width="44" height="28" rx="6" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
          <text x={x} y={y + 5} textAnchor="middle" fill="rgba(147,197,253,0.9)" fontSize="9" fontFamily="monospace">{label}</text>
        </g>
      ))}

      {/* Connection lines */}
      {[
        [240, 160, 70, 200],
        [240, 160, 160, 240],
        [240, 160, 240, 260],
        [240, 160, 320, 240],
        [240, 160, 400, 200],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="4,4" />
      ))}

      {/* Orbiting dots */}
      <circle cx="240" cy="60" r="3" fill="#60a5fa" opacity="0.7" />
      <circle cx="350" cy="100" r="2" fill="#818cf8" opacity="0.6" />
      <circle cx="130" cy="100" r="2" fill="#38bdf8" opacity="0.6" />
      <circle cx="380" cy="160" r="2.5" fill="#34d399" opacity="0.5" />

      {/* Shield badge */}
      <g transform="translate(208,48)">
        <path d="M16 2 L28 7 L28 17 Q28 24 16 29 Q4 24 4 17 L4 7 Z" fill="rgba(59,130,246,0.2)" stroke="rgba(59,130,246,0.5)" strokeWidth="1" />
        <path d="M11 16l3 3 5-6" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Signal rings */}
      <circle cx="240" cy="140" r="70" stroke="rgba(59,130,246,0.08)" strokeWidth="1" fill="none" />
      <circle cx="240" cy="140" r="110" stroke="rgba(59,130,246,0.05)" strokeWidth="1" fill="none" />
      <circle cx="240" cy="140" r="150" stroke="rgba(99,102,241,0.04)" strokeWidth="1" fill="none" />

      <defs>
        <linearGradient id="cloudGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="cloudMainGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    projectDetails: "",
    budget: "",
    timeline: "",
    requirements: "",
  });

  const updateField = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // ── Replace this with your actual form submission logic ──
      await new Promise((res) => setTimeout(res, 1800));
      setFormStatus("success");
      setFormData({
        fullName: "", companyName: "", email: "", phone: "",
        country: "", service: "", projectDetails: "",
        budget: "", timeline: "", requirements: "",
      });
    } catch {
      setFormStatus("error");
    }
  };

  // ─ scroll-reveal via IntersectionObserver ─
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Global styles injected inline */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.08); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-2 { animation: float-delayed 6s ease-in-out infinite; }
        .animate-float-3 { animation: float 7s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 9s ease-in-out infinite; }
        [data-reveal] { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        [data-reveal].revealed { opacity: 1; transform: translateY(0); }
        select option { background-color: #0f172a; color: #fff; }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px rgba(239,246,255,0.6) inset;
          -webkit-text-fill-color: #fff;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <div className="relative min-h-screen bg-white text-slate-900 antialiased">
        <AnimatedBackground />

        <div className="relative z-10">
          <Navbar />

          {/* ═══════════════════════════════════════════════════════════════
              HERO
          ══════════════════════════════════════════════════════════════════ */}
          <section className="relative pt-24 pb-20 px-4 overflow-hidden" aria-label="Hero">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left copy */}
                <div className="flex flex-col gap-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2.5 self-start px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-600 tracking-wider uppercase">
                      Kloud101 Contact Center
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
                    Talk To{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                      Cloud Infrastructure
                    </span>{" "}
                    Experts
                  </h1>

                  {/* Sub-headline */}
                  <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                    Whether you&apos;re launching a startup, migrating enterprise workloads,
                    scaling a SaaS platform, or building a hosting business, our cloud
                    specialists are ready to help.
                  </p>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href="#contact-form"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <IconMail />
                      Contact Sales
                    </a>
                    <a
                      href="#contact-form"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 text-slate-900 font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                    >
                      <IconClock />
                      Schedule Consultation
                    </a>
                  </div>

                  {/* Floating stat cards */}
                  <div className="grid grid-cols-2 gap-3 pt-4 max-w-md">
                    <FloatingCard
                      icon={<IconClock />}
                      label="Availability"
                      value="24/7 Support"
                      delay="0s"
                    />
                    <FloatingCard
                      icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
                      label="SLA Guarantee"
                      value="99.99% Uptime"
                      delay="0.4s"
                    />
                    <FloatingCard
                      icon={<IconGlobe />}
                      label="Infrastructure"
                      value="Global Network"
                      delay="0.8s"
                    />
                    <FloatingCard
                      icon={<IconShield />}
                      label="Protection"
                      value="Enterprise Security"
                      delay="1.2s"
                    />
                  </div>
                </div>

                {/* Right illustration */}
                <div className="relative hidden lg:flex items-center justify-center h-[420px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[380px] h-[380px] rounded-full border border-blue-500/10 animate-pulse-slow" />
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-indigo-500/10 animate-pulse-slower" />
                  </div>
                  <div className="relative w-[480px] h-[320px]">
                    <CloudInfraIllustration />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              CONTACT METHODS
          ══════════════════════════════════════════════════════════════════ */}
          <section className="py-20 px-4" aria-label="Contact methods">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14" data-reveal>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Get In Touch</p>
                <h2 className="text-3xl font-bold text-slate-900">Choose Your Channel</h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto">
                  Every team at Kloud101 is standing by. Pick the best route for your query.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4" data-reveal>
                <ContactCard
                  icon={<IconBriefcase />}
                  title="Sales Team"
                  description="Talk to us about new accounts, enterprise deals, and custom pricing."
                  contact="sales@kloud101.com"
                  href="mailto:sales@kloud101.com"
                  cta="Email Sales"
                  color="bg-blue-500/20 border border-blue-500/30 text-blue-600"
                />
                <ContactCard
                  icon={<IconHeadset />}
                  title="Technical Support"
                  description="Get expert help with server issues, configuration, or incidents."
                  contact="support@kloud101.com"
                  href="mailto:support@kloud101.com"
                  cta="Open Ticket"
                  color="bg-indigo-500/20 border border-indigo-500/30 text-indigo-400"
                />
                <ContactCard
                  icon={<IconCreditCard />}
                  title="Billing Department"
                  description="Invoice queries, payment issues, and subscription management."
                  contact="billing@kloud101.com"
                  href="mailto:billing@kloud101.com"
                  cta="Contact Billing"
                  color="bg-violet-500/20 border border-violet-500/30 text-violet-400"
                />
                <ContactCard
                  icon={<IconWhatsApp />}
                  title="WhatsApp Support"
                  description="Chat with a real agent instantly via WhatsApp for fast responses."
                  contact="Chat on WhatsApp"
                  href="https://wa.me/your-number"
                  cta="Start Chat"
                  color="bg-green-500/20 border border-green-500/30 text-green-400"
                />
                <ContactCard
                  icon={<IconArrowUp />}
                  title="Business Development"
                  description="Partnership opportunities, reseller programs, and co-marketing."
                  contact="partners@kloud101.com"
                  href="mailto:partners@kloud101.com"
                  cta="Partner With Us"
                  color="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400"
                />
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              CONTACT FORM
          ══════════════════════════════════════════════════════════════════ */}
          <section id="contact-form" className="py-20 px-4" aria-label="Contact form">
            <div className="max-w-4xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-14" data-reveal>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Send A Message</p>
                <h2 className="text-3xl font-bold text-slate-900">Tell Us About Your Project</h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto">
                  Complete the form below and a cloud specialist will respond within one business day.
                </p>
              </div>

              {/* Form card */}
              <div
                className="relative rounded-2xl border border-slate-200 bg-blue-50/60 backdrop-blur-sm overflow-hidden p-8 md:p-10"
                data-reveal
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully</h3>
                    <p className="text-slate-600 max-w-sm">
                      Thanks for reaching out. A Kloud101 specialist will contact you within one business day.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-2 px-5 py-2 rounded-lg border border-slate-200 bg-blue-50 hover:bg-blue-100 text-sm text-slate-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                  >
                    {/* Row 1: Name + Company */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FloatingInput
                        id="fullName"
                        label="Full Name"
                        value={formData.fullName}
                        onChange={updateField("fullName")}
                        required
                        autoComplete="name"
                      />
                      <FloatingInput
                        id="companyName"
                        label="Company Name"
                        value={formData.companyName}
                        onChange={updateField("companyName")}
                        autoComplete="organization"
                      />
                    </div>

                    {/* Row 2: Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FloatingInput
                        id="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={updateField("email")}
                        required
                        autoComplete="email"
                      />
                      <FloatingInput
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={updateField("phone")}
                        autoComplete="tel"
                      />
                    </div>

                    {/* Row 3: Country + Service */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FloatingSelect
                        id="country"
                        label="Country"
                        value={formData.country}
                        onChange={updateField("country")}
                        options={COUNTRIES}
                      />
                      <FloatingSelect
                        id="service"
                        label="Service Interested In"
                        value={formData.service}
                        onChange={updateField("service")}
                        options={SERVICES}
                        required
                      />
                    </div>

                    {/* Project details */}
                    <div className="mb-4">
                      <FloatingTextarea
                        id="projectDetails"
                        label="Project Details"
                        value={formData.projectDetails}
                        onChange={updateField("projectDetails")}
                        rows={4}
                        required
                      />
                    </div>

                    {/* Row 4: Budget + Timeline */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FloatingSelect
                        id="budget"
                        label="Budget Range"
                        value={formData.budget}
                        onChange={updateField("budget")}
                        options={BUDGETS}
                      />
                      <FloatingSelect
                        id="timeline"
                        label="Timeline"
                        value={formData.timeline}
                        onChange={updateField("timeline")}
                        options={TIMELINES}
                      />
                    </div>

                    {/* Requirements */}
                    <div className="mb-8">
                      <FloatingTextarea
                        id="requirements"
                        label="Additional Requirements"
                        value={formData.requirements}
                        onChange={updateField("requirements")}
                        rows={3}
                      />
                    </div>

                    {/* Error state */}
                    {formStatus === "error" && (
                      <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      {formStatus === "loading" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              OFFICE LOCATIONS
          ══════════════════════════════════════════════════════════════════ */}
          <section className="py-20 px-4" aria-label="Office locations">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14" data-reveal>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Where We Operate</p>
                <h2 className="text-3xl font-bold text-slate-900">Global Presence</h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto">
                  Kloud101 operates data centres and support teams across three continents to ensure low-latency, high-availability infrastructure wherever your users are.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6" data-reveal>
                {[
                  {
                    flag: "🇳🇬",
                    country: "Nigeria",
                    region: "West Africa Hub",
                    coverage: "Sub-Saharan Africa",
                    hours: "08:00 – 22:00 WAT",
                    services: ["Shared Hosting", "Cloud VPS", "Business Email", "CDN"],
                    color: "from-green-500/20 to-transparent",
                    border: "border-green-500/25",
                  },
                  {
                    flag: "🇬🇧",
                    country: "United Kingdom",
                    region: "EMEA HQ",
                    coverage: "Europe, Middle East, Africa",
                    hours: "09:00 – 18:00 GMT",
                    services: ["Dedicated Servers", "Managed VPS", "Enterprise Cloud", "DRaaS"],
                    color: "from-blue-500/20 to-transparent",
                    border: "border-blue-500/25",
                  },
                  {
                    flag: "🇺🇸",
                    country: "United States",
                    region: "Americas Hub",
                    coverage: "North & South America",
                    hours: "09:00 – 18:00 EST",
                    services: ["Cloud Servers", "Cyber Security", "Migration Services", "Backup"],
                    color: "from-indigo-500/20 to-transparent",
                    border: "border-indigo-500/25",
                  },
                ].map(({ flag, country, region, coverage, hours, services, color, border }) => (
                  <div
                    key={country}
                    className={`relative rounded-2xl border ${border} bg-blue-50/60 overflow-hidden p-6 hover:bg-blue-50/70 transition-all duration-300 group`}
                  >
                    {/* gradient blob */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${color} rounded-bl-full opacity-60 pointer-events-none`} />

                    <div className="relative">
                      <span className="text-4xl mb-4 block" role="img" aria-label={country}>{flag}</span>
                      <h3 className="text-slate-900 font-bold text-xl mb-0.5">{country}</h3>
                      <p className="text-blue-600 text-sm font-medium mb-5">{region}</p>

                      <div className="space-y-3 mb-5">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <IconGlobe />
                          <span>Coverage: <strong className="text-slate-700">{coverage}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <IconClock />
                          <span>Hours: <strong className="text-slate-700">{hours}</strong></span>
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-2 font-semibold">Services Available</p>
                        <div className="flex flex-wrap gap-1.5">
                          {services.map((s) => (
                            <span key={s} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-50 border border-slate-200 text-slate-700">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              WHY KLOUD101
          ══════════════════════════════════════════════════════════════════ */}
          <section className="py-20 px-4" aria-label="Why Kloud101">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14" data-reveal>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Our Advantages</p>
                <h2 className="text-3xl font-bold text-slate-900">Why Contact Kloud101?</h2>
                <p className="text-slate-600 mt-3 max-w-xl mx-auto">
                  We don&apos;t just sell cloud services — we architect long-term infrastructure strategies with you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal>
                {[
                  {
                    icon: <IconUsers />,
                    title: "Cloud Experts",
                    description: "Certified engineers with deep expertise across AWS-compatible, bare-metal, and managed cloud stacks.",
                    color: "text-blue-600",
                    bg: "bg-blue-500/10 border-blue-500/20",
                  },
                  {
                    icon: <IconHeadset />,
                    title: "24/7 Support",
                    description: "Round-the-clock incident response and proactive monitoring so your uptime never sleeps.",
                    color: "text-indigo-400",
                    bg: "bg-indigo-500/10 border-indigo-500/20",
                  },
                  {
                    icon: <IconArrowUp />,
                    title: "Migration Assistance",
                    description: "Zero-downtime lift-and-shift migrations handled by specialists who have done it thousands of times.",
                    color: "text-violet-400",
                    bg: "bg-violet-500/10 border-violet-500/20",
                  },
                  {
                    icon: <IconBriefcase />,
                    title: "Dedicated Account Managers",
                    description: "A single point of contact who knows your infrastructure and proactively optimises your estate.",
                    color: "text-cyan-400",
                    bg: "bg-cyan-500/10 border-cyan-500/20",
                  },
                  {
                    icon: <IconShield />,
                    title: "Enterprise Security",
                    description: "DDoS protection, WAF, SSL, private networking, and compliance-ready environments built in.",
                    color: "text-green-400",
                    bg: "bg-green-500/10 border-green-500/20",
                  },
                  {
                    icon: <IconServer />,
                    title: "Scalable Infrastructure",
                    description: "From a single VPS to hundreds of bare-metal nodes — scale horizontally without re-architecting.",
                    color: "text-orange-400",
                    bg: "bg-orange-500/10 border-orange-500/20",
                  },
                ].map(({ icon, title, description, color, bg }) => (
                  <div
                    key={title}
                    className="group flex gap-4 p-6 rounded-2xl border border-slate-200 bg-blue-50/50 hover:bg-blue-50/70 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${bg} ${color} transition-transform duration-300 group-hover:scale-110`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold mb-1.5">{title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════
              CTA BANNER
          ══════════════════════════════════════════════════════════════════ */}
          <section className="py-20 px-4" aria-label="Call to action">
            <div className="max-w-4xl mx-auto" data-reveal>
              <div className="relative rounded-3xl overflow-hidden border border-blue-500/25 bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-12 text-center">
                {/* Background glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-indigo-600/15 blur-[60px] rounded-full pointer-events-none" />

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Get Started Today</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    Ready To Build On{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Better Infrastructure?
                    </span>
                  </h2>
                  <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
                    Let&apos;s design the perfect cloud environment for your business.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="#contact-form"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Talk To An Expert
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </a>
                    <a
                      href="#contact-form"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 text-slate-900 font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                    >
                      Request Proposal
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>

                  {/* Trust markers */}
                  <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-slate-200">
                    {[
                      { icon: <IconShield />, text: "SOC 2 Compliant" },
                      { icon: <IconCheck />, text: "99.99% SLA" },
                      { icon: <IconClock />, text: "24/7 Response" },
                      { icon: <IconGlobe />, text: "Global CDN" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-center gap-1.5 text-slate-600 text-sm">
                        <span className="text-blue-600">{icon}</span>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
