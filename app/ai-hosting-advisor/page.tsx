"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Eye, HardDrive, Headphones, Sparkles, Zap } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import StatsStrip from "@/components/site/StatsStrip";
import CtaLink from "@/components/site/CtaLink";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  monthlyVisitors: string;
  storagePriority: string;
  securityRequirement: string;
  needCpanel: string;
  needBackups: string;
  datacenterLocation: string;
  currentProvider: string;
}

interface Recommendation {
  plan: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  performanceScore: number;
  securityScore: number;
  scalabilityScore: number;
  reliabilityScore: number;
  stack: string[];
  datacenter: string;
  datacenterReason: string;
  growthWebsites: string;
  growthEmails: string;
  growthVisitors: string;
  reason: string;
}

// ─── Recommendation Engine ────────────────────────────────────────────────────

function generateRecommendation(form: FormData): Recommendation {
  const visitors = form.monthlyVisitors;
  const security = form.securityRequirement;
  const project = form.projectType;
  const storage = form.storagePriority;

  const isHighTraffic = visitors === "100,000+";
  const isMediumTraffic = visitors === "20,000 - 100,000";
  const isEnterpriseSecurity =
    security === "Enterprise Security" || security === "Maximum Protection";
  const isEcommerce =
    project === "E-commerce Store" || project === "WooCommerce Store";
  const isSaaS =
    project === "SaaS Application" || project === "Mobile Application Backend";
  const isHostingCompany = project === "Web Hosting Company";

  let plan = "Managed VPS Starter";
  let cpu = "4 CPU Cores";
  let ram = "8GB RAM";
  let storageSize = "100GB NVMe SSD";
  let bandwidth = "5TB / month";
  let performanceScore = 85;
  let securityScore = 80;
  let scalabilityScore = 75;
  let reliabilityScore = 90;
  let growthWebsites = "Up to 10 websites";
  let growthEmails = "100 email accounts";
  let growthVisitors = "Up to 50,000 / month";

  if (isHighTraffic || isEnterpriseSecurity || isSaaS) {
    plan = "Managed VPS Enterprise";
    cpu = "16 CPU Cores";
    ram = "32GB RAM";
    storageSize = "500GB NVMe SSD";
    bandwidth = "Unmetered";
    performanceScore = 99;
    securityScore = 99;
    scalabilityScore = 99;
    reliabilityScore = 99;
    growthWebsites = "Unlimited websites";
    growthEmails = "Unlimited email accounts";
    growthVisitors = "500,000+ / month";
  } else if (isMediumTraffic || isEcommerce || isHostingCompany) {
    plan = "Managed VPS Business";
    cpu = "8 CPU Cores";
    ram = "16GB RAM";
    storageSize = "250GB NVMe SSD";
    bandwidth = "10TB / month";
    performanceScore = 98;
    securityScore = 95;
    scalabilityScore = 92;
    reliabilityScore = 99;
    growthWebsites = "Up to 50 websites";
    growthEmails = "500 email accounts";
    growthVisitors = "Up to 150,000 / month";
  }

  if (storage === "Maximum Capacity") {
    storageSize = storageSize.replace("NVMe SSD", "SATA SSD (High Capacity)");
  }

  const stack: string[] = [];
  if (form.needCpanel === "Yes") stack.push("cPanel");
  stack.push("CloudLinux");
  stack.push("LiteSpeed Enterprise");
  if (security === "Enterprise Security" || security === "Maximum Protection") {
    stack.push("ImunifyAV+");
    stack.push("Imunify360");
  } else {
    stack.push("ImunifyAV");
  }
  if (form.needBackups === "Yes") stack.push("JetBackup");
  stack.push("Softaculous");
  stack.push("SitePad");

  const locationMap: Record<string, { city: string; reason: string }> = {
    "United Kingdom": {
      city: "London, UK",
      reason:
        "London is the premier European data hub with sub-10ms latency to EU markets, GDPR-compliant infrastructure, and Tier-4 facility guarantees.",
    },
    "United States": {
      city: "Dallas, TX (USA)",
      reason:
        "Dallas provides central US connectivity with excellent cross-continental routing, redundant power, and proximity to major US enterprise networks.",
    },
    "South Africa": {
      city: "Johannesburg, ZA",
      reason:
        "Johannesburg offers the lowest latency across sub-Saharan Africa, with direct SEACOM and WACS cable connectivity for pan-African reach.",
    },
    Nigeria: {
      city: "Lagos, NG",
      reason:
        "Lagos provides optimal latency for West African users with direct access to the ACE and MainOne submarine cable systems.",
    },
    "United Arab Emirates": {
      city: "Dubai, UAE",
      reason:
        "Dubai connects MENA and South Asian markets via Tier-3 facilities with the lowest regional latency and strict data sovereignty compliance.",
    },
    "Auto (Best Performance)": {
      city: "London, UK (Auto-Selected)",
      reason:
        "Our AI selected London as the globally optimal node based on your profile — lowest median RTT, highest uptime SLA, and best peering density.",
    },
  };

  const loc = locationMap[form.datacenterLocation] ?? locationMap["Auto (Best Performance)"];

  let reason = `Based on your ${project} with ${visitors} monthly visitors, `;
  reason += `we recommend the ${plan} plan. `;
  if (isHighTraffic) {
    reason +=
      "High traffic volumes demand enterprise-grade CPU allocation and unmetered bandwidth to prevent bottlenecks. ";
  } else if (isMediumTraffic) {
    reason +=
      "Your mid-tier traffic profile benefits from a balanced VPS configuration ensuring smooth performance without over-provisioning. ";
  } else {
    reason +=
      "Your current traffic level is well-served by our Starter VPS while leaving headroom for 10× growth. ";
  }
  if (isEnterpriseSecurity) {
    reason +=
      "Enterprise security was selected, activating Imunify360 for real-time threat intelligence and kernel-level hardening. ";
  }
  if (form.needCpanel === "Yes") {
    reason +=
      "cPanel has been included for familiar, intuitive server management. ";
  }
  if (form.needBackups === "Yes") {
    reason += "JetBackup ensures automated daily restoration points. ";
  }
  reason += `Your workload is hosted in ${loc.city} — ${loc.reason}`;

  return {
    plan,
    cpu,
    ram,
    storage: storageSize,
    bandwidth,
    performanceScore,
    securityScore,
    scalabilityScore,
    reliabilityScore,
    stack,
    datacenter: loc.city,
    datacenterReason: loc.reason,
    growthWebsites,
    growthEmails,
    growthVisitors,
    reason,
  };
}

// ─── Score Ring ───────────────────────────────────────────────────────────────

function ScoreRing({ score, label, color }: { score: number; label: string; color: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r={r} fill="none" stroke="#1e293b" strokeWidth="5" />
          <circle
            cx="36" cy="36" r={r} fill="none"
            stroke={color} strokeWidth="5"
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 1.2s cubic-bezier(.4,0,.2,1)" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
          {score}%
        </span>
      </div>
      <span className="text-xs text-muted-foreground font-medium tracking-wide">{label}</span>
    </div>
  );
}

// ─── Step definitions ─────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, title: "About You", icon: "👤" },
  { id: 2, title: "Your Project", icon: "🚀" },
  { id: 3, title: "Infrastructure", icon: "🔧" },
  { id: 4, title: "Preferences", icon: "⚙️" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AIHostingAdvisorPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSample, setShowSample] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    projectType: "Business Website",
    monthlyVisitors: "Under 5,000",
    storagePriority: "Maximum Speed (NVMe SSD)",
    securityRequirement: "Basic Protection",
    needCpanel: "Yes",
    needBackups: "Yes",
    datacenterLocation: "Auto (Best Performance)",
    currentProvider: "",
  });

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const totalSteps = STEPS.length;
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const handleAssess = () => {
    const rec = generateRecommendation(form);
    setRecommendation(rec);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleSample = () => {
    setShowSample(true);
    const sample: FormData = {
      fullName: "Alex Johnson",
      email: "alex@example.com",
      company: "Acme Corp",
      projectType: "E-commerce Store",
      monthlyVisitors: "20,000 - 100,000",
      storagePriority: "Maximum Speed (NVMe SSD)",
      securityRequirement: "Business Security",
      needCpanel: "Yes",
      needBackups: "Yes",
      datacenterLocation: "United Kingdom",
      currentProvider: "Shared Hosting",
    };
    const rec = generateRecommendation(sample);
    setRecommendation(rec);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const inputCls =
    "w-full rounded bg-muted border border-border px-4 py-3.5 text-foreground placeholder-slate-500 outline-none focus:border-primary focus:ring-1 focus:ring-blue-500/30 transition-all duration-200";
  const selectCls =
    "w-full rounded bg-muted border border-border px-4 py-3.5 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 cursor-pointer appearance-none";

  const stackIcons: Record<string, string> = {
    cPanel: "🎛️",
    CloudLinux: "🐧",
    "LiteSpeed Enterprise": "⚡",
    ImunifyAV: "🛡️",
    "ImunifyAV+": "🛡️",
    Imunify360: "🔒",
    JetBackup: "💾",
    Softaculous: "📦",
    SitePad: "🎨",
    "Daily Backups": "🗄️",
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden">

        <PageHero
          breadcrumb="AI Hosting Advisor"
          eyebrow="KLOUD101 AI INFRASTRUCTURE ADVISOR"
          title={"Find The Perfect Hosting\nInfrastructure In Under 60s"}
          description="Answer a few questions and let Kloud101 AI recommend the ideal hosting platform, server architecture, storage technology, security stack and growth capacity for your business."
          icon={Sparkles}
          actions={
            <>
              <CtaLink href="#assessment">Start Assessment</CtaLink>
              <button
                type="button"
                onClick={handleSample}
                className="cta-button inline-flex items-center justify-center gap-2 whitespace-nowrap border font-medium transition-colors"
              >
                <Eye className="size-4" />
                View Sample Recommendation
              </button>
            </>
          }
        />

        <StatsStrip
          stats={[
            { icon: Zap, value: "60s", label: "Assessment Time" },
            { icon: Sparkles, value: "AI", label: "Infrastructure Advisor" },
            { icon: Headphones, value: "24/7", label: "Expert Support" },
            { icon: HardDrive, value: "NVMe", label: "Performance Storage" },
          ]}
        />

        {/* ── ASSESSMENT ───────────────────────────────────────────────────── */}
        <section id="assessment" className="py-24">
          <div className="max-w-3xl mx-auto px-6">

            {/* Section header */}
            <div className="text-center mb-14">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">
                AI-Powered Assessment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Complete the assessment below and our AI engine will generate a
                custom infrastructure recommendation in seconds.
              </p>
            </div>

            {/* Step progress */}
            <div className="mb-10">
              {/* Mobile step label */}
              <div className="sm:hidden text-center mb-4">
                <span className="text-primary text-sm font-semibold">
                  Step {currentStep} of {totalSteps} — {STEPS[currentStep - 1].title}
                </span>
              </div>
              <div className="flex items-center justify-between mb-6">
                {STEPS.map((step, idx) => (
                  <div key={step.id} className="flex items-center flex-1">
                    <button
                      onClick={() => setCurrentStep(step.id)}
                      className={`flex flex-col items-center gap-1.5 group ${idx < STEPS.length - 1 ? "flex-1" : ""}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                          currentStep === step.id
                            ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                            : currentStep > step.id
                            ? "bg-primary/20 border-blue-600 text-primary"
                            : "bg-accent border-border text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        ) : (
                          step.icon
                        )}
                      </div>
                      <span
                        className={`text-[11px] font-medium hidden sm:block transition-colors ${
                          currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                    {idx < STEPS.length - 1 && (
                      <div className="flex-1 h-px mx-2 mt-[-18px] sm:mt-[-28px]">
                        <div className="h-full bg-accent relative">
                          <div
                            className="absolute inset-y-0 left-0 bg-primary transition-all duration-500"
                            style={{ width: currentStep > step.id ? "100%" : "0%" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span className="text-primary font-medium">{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-1.5 bg-accent rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Form card */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/10 to-transparent rounded-md blur-sm" />
              <div className="relative bg-card/70 border border-border rounded-md p-5 sm:p-10 backdrop-blur-xl">

                {/* Step 1 — About You */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div>
                      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">Step 1</p>
                      <h3 className="text-2xl font-bold mb-6">About You</h3>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.fullName}
                        onChange={set("fullName")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={set("email")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Company Name</label>
                      <input
                        type="text"
                        placeholder="Kloud101 Ltd"
                        value={form.company}
                        onChange={set("company")}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Current Hosting Provider</label>
                      <input
                        type="text"
                        placeholder="e.g. Shared Hosting, AWS, None"
                        value={form.currentProvider}
                        onChange={set("currentProvider")}
                        className={inputCls}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2 — Your Project */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div>
                      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">Step 2</p>
                      <h3 className="text-2xl font-bold mb-6">Your Project</h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-3">What are you building?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { value: "Business Website", icon: "🏢" },
                          { value: "WordPress Website", icon: "📝" },
                          { value: "E-commerce Store", icon: "🛒" },
                          { value: "WooCommerce Store", icon: "🛍️" },
                          { value: "Web Hosting Company", icon: "🌐" },
                          { value: "Corporate Email", icon: "📧" },
                          { value: "CRM / ERP", icon: "📊" },
                          { value: "SaaS Application", icon: "⚡" },
                          { value: "Media Platform", icon: "🎬" },
                          { value: "School Portal", icon: "🎓" },
                          { value: "Government Website", icon: "🏛️" },
                          { value: "Mobile Application Backend", icon: "📱" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, projectType: opt.value }))}
                            className={`flex items-center gap-3 p-3.5 min-h-[48px] rounded border text-left text-sm font-medium transition-all duration-200 ${
                              form.projectType === opt.value
                                ? "bg-primary/20 border-primary text-white shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                                : "bg-accent/40 border-border text-muted-foreground hover:border-border hover:text-muted-foreground"
                            }`}
                          >
                            <span className="text-lg">{opt.icon}</span>
                            <span className="leading-tight">{opt.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-3">Expected Monthly Visitors</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { value: "Under 5,000", label: "Under 5K", sub: "Personal / Startup" },
                          { value: "5,000 - 20,000", label: "5K – 20K", sub: "Small Business" },
                          { value: "20,000 - 100,000", label: "20K – 100K", sub: "Growing Business" },
                          { value: "100,000+", label: "100K+", sub: "Enterprise Scale" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, monthlyVisitors: opt.value }))}
                            className={`p-4 min-h-[56px] rounded border text-left transition-all duration-200 ${
                              form.monthlyVisitors === opt.value
                                ? "bg-primary/20 border-primary text-white shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                                : "bg-accent/40 border-border text-muted-foreground hover:border-border"
                            }`}
                          >
                            <p className="font-bold text-sm">{opt.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{opt.sub}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3 — Infrastructure */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div>
                      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">Step 3</p>
                      <h3 className="text-2xl font-bold mb-6">Infrastructure Requirements</h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-3">Storage Priority</label>
                      <div className="grid gap-3">
                        {[
                          { value: "Maximum Speed (NVMe SSD)", icon: "⚡", desc: "Fastest read/write — ideal for high-performance apps" },
                          { value: "Maximum Capacity", icon: "💾", desc: "High-volume storage — ideal for media, backups, files" },
                          { value: "Balanced", icon: "⚖️", desc: "Best of both speed and capacity" },
                          { value: "Not Sure", icon: "🤷", desc: "Let AI decide the best option for you" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, storagePriority: opt.value }))}
                            className={`flex items-start gap-4 p-4 rounded border text-left transition-all duration-200 ${
                              form.storagePriority === opt.value
                                ? "bg-primary/20 border-primary shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                                : "bg-accent/40 border-border hover:border-border"
                            }`}
                          >
                            <span className="text-2xl mt-0.5">{opt.icon}</span>
                            <div>
                              <p className="font-semibold text-sm text-foreground">{opt.value}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-3">Security Requirement</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { value: "Basic Protection", color: "text-muted-foreground" },
                          { value: "Business Security", color: "text-primary" },
                          { value: "Enterprise Security", color: "text-indigo-400" },
                          { value: "Maximum Protection", color: "text-purple-400" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, securityRequirement: opt.value }))}
                            className={`p-4 min-h-[48px] rounded border text-left transition-all duration-200 ${
                              form.securityRequirement === opt.value
                                ? "bg-primary/20 border-primary shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                                : "bg-accent/40 border-border hover:border-border"
                            }`}
                          >
                            <span className={`font-semibold text-sm ${opt.color}`}>{opt.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4 — Preferences */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div>
                      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">Step 4</p>
                      <h3 className="text-2xl font-bold mb-6">Final Preferences</h3>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-3">Do you need cPanel?</label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Yes", "No"].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, needCpanel: v }))}
                            className={`py-3.5 min-h-[48px] rounded border font-semibold text-sm transition-all duration-200 ${
                              form.needCpanel === v
                                ? "bg-primary/20 border-primary text-white shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                                : "bg-accent/40 border-border text-muted-foreground hover:border-border"
                            }`}
                          >
                            {v === "Yes" ? "✅ Yes" : "❌ No"}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-3">Daily Backups Required?</label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Yes", "No"].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, needBackups: v }))}
                            className={`py-3.5 min-h-[48px] rounded border font-semibold text-sm transition-all duration-200 ${
                              form.needBackups === v
                                ? "bg-primary/20 border-primary text-white shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                                : "bg-accent/40 border-border text-muted-foreground hover:border-border"
                            }`}
                          >
                            {v === "Yes" ? "✅ Yes" : "❌ No"}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">Preferred Datacenter Location</label>
                      <div className="relative">
                        <select
                          value={form.datacenterLocation}
                          onChange={set("datacenterLocation")}
                          className={selectCls}
                        >
                          <option>Auto (Best Performance)</option>
                          <option>United Kingdom</option>
                          <option>United States</option>
                          <option>South Africa</option>
                          <option>Nigeria</option>
                          <option>United Arab Emirates</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/60">
                  <button
                    onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 px-5 py-2.5 rounded bg-accent/60 border border-border text-muted-foreground font-medium text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:text-foreground hover:border-border transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Back
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      onClick={() => setCurrentStep((s) => Math.min(totalSteps, s + 1))}
                      className="flex items-center gap-2 px-6 py-2.5 rounded bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    >
                      Continue
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={handleAssess}
                      className="flex items-center gap-2 px-8 py-3 rounded bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-foreground font-bold text-sm transition-all duration-200 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                      </svg>
                      Get My Recommendation
                    </button>
                  )}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── RESULTS ──────────────────────────────────────────────────────── */}
        {recommendation && (
          <section ref={resultsRef} className="pb-32">
            <div className="max-w-4xl mx-auto px-6">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  Assessment Complete
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                  Your Infrastructure Recommendation
                </h2>
                <p className="text-muted-foreground">
                  AI-generated based on your specific requirements
                </p>
              </div>

              {/* Score cards */}
              <div className="relative mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-md blur-sm" />
                <div className="relative bg-card/70 border border-border rounded-md p-8 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-muted-foreground mb-6">Infrastructure Score</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
                    <ScoreRing score={recommendation.performanceScore} label="Performance" color="#3b82f6" />
                    <ScoreRing score={recommendation.securityScore} label="Security" color="#8b5cf6" />
                    <ScoreRing score={recommendation.scalabilityScore} label="Scalability" color="#06b6d4" />
                    <ScoreRing score={recommendation.reliabilityScore} label="Reliability" color="#10b981" />
                  </div>
                </div>
              </div>

              {/* Recommended plan */}
              <div className="relative mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-md blur-sm" />
                <div className="relative bg-card/70 border border-primary rounded-md p-8 backdrop-blur-xl">
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div>
                      <span className="text-primary text-xs font-bold uppercase tracking-widest">
                        Recommended Solution
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                        {recommendation.plan}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-primary text-xs font-semibold">AI Selected</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: "CPU", value: recommendation.cpu, icon: "🔲" },
                      { label: "RAM", value: recommendation.ram, icon: "💿" },
                      { label: "Storage", value: recommendation.storage, icon: "💾" },
                      { label: "Bandwidth", value: recommendation.bandwidth, icon: "📡" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="bg-accent/50 rounded-md p-4 border border-border/40 hover:border-primary transition-colors"
                      >
                        <div className="text-xl mb-2">{s.icon}</div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{s.label}</p>
                        <p className="text-foreground font-bold text-sm leading-tight">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Software stack */}
              <div className="relative mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100/40 to-transparent rounded-md blur-sm" />
                <div className="relative bg-card/70 border border-border rounded-md p-8 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-muted-foreground mb-6">Recommended Software Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {recommendation.stack.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded bg-accent border border-primary text-muted-foreground text-sm font-medium hover:bg-accent hover:border-blue-400/30 transition-all duration-200"
                      >
                        <span>{stackIcons[item] ?? "🔧"}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Datacenter + Growth in 2 cols */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {/* Datacenter */}
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-md blur-sm" />
                  <div className="relative bg-card/70 border border-border rounded-md p-6 backdrop-blur-xl h-full">
                    <h3 className="text-base font-bold text-muted-foreground mb-4 flex items-center gap-2">
                      <span>🌍</span> Recommended Datacenter
                    </h3>
                    <p className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      {recommendation.datacenter}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {recommendation.datacenterReason}
                    </p>
                  </div>
                </div>

                {/* Growth */}
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-md blur-sm" />
                  <div className="relative bg-card/70 border border-border rounded-md p-6 backdrop-blur-xl h-full">
                    <h3 className="text-base font-bold text-muted-foreground mb-4 flex items-center gap-2">
                      <span>📈</span> Growth Capacity
                    </h3>
                    <div className="space-y-3">
                      {[
                        { label: "Websites Supported", value: recommendation.growthWebsites },
                        { label: "Email Accounts", value: recommendation.growthEmails },
                        { label: "Monthly Visitors", value: recommendation.growthVisitors },
                      ].map((g) => (
                        <div key={g.label} className="flex items-center justify-between">
                          <span className="text-muted-foreground text-sm">{g.label}</span>
                          <span className="text-emerald-400 text-sm font-bold">{g.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Explanation */}
              <div className="relative mb-10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-md blur-sm" />
                <div className="relative bg-card/70 border border-border rounded-md p-8 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-muted-foreground mb-4 flex items-center gap-2">
                    <span className="text-2xl">🤖</span> Why We Recommend This
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {recommendation.reason}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://kloud101.com/hosting"
                  className="flex-1 flex items-center justify-center gap-3 py-4 rounded bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-foreground font-bold text-base transition-all duration-200 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] group"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                  <span className="hidden sm:inline">Deploy Recommended </span><span className="sm:hidden">Deploy </span>Solution
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="https://kloud101.com/contact"
                  className="flex-1 flex items-center justify-center gap-3 py-4 rounded bg-accent/60 hover:bg-accent/60 border border-border text-foreground font-bold text-base transition-all duration-200 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                  Talk To Solutions Architect
                </a>
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}
