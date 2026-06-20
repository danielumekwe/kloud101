"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Slide {
  title: string;
  badge: string;
  badgeIcon: React.ReactNode;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  cta: string;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconClock = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconGlobe = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconServer = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);
const IconShield = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const IconCloud = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

// ─── Slide Data (all blue — no per-slide color variants) ──────────────────────

const slides: Slide[] = [
  {
    title: "We're Always Here To Help",
    badge: "24/7 Support",
    badgeIcon: <IconClock />,
    description:
      "Our dedicated support team is available around the clock to assist with any issues you may encounter.",
    image: "/slides/support.png",
    stats: [
      { label: "Avg. Response", value: "< 2 min" },
      { label: "Satisfaction",  value: "99.2%"   },
      { label: "Tickets/day",   value: "1,400+"  },
    ],
    cta: "Open a Ticket",
  },
  {
    title: "Multiple Datacenters Worldwide",
    badge: "Global Infrastructure",
    badgeIcon: <IconGlobe />,
    description:
      "Deploy servers across multiple datacenter locations for maximum performance and reliability closest to your users.",
    image: "/slides/datacenter.png",
    stats: [
      { label: "Locations",  value: "12+"    },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Network",    value: "40 Gbps"},
    ],
    cta: "View Locations",
  },
  {
    title: "Managed Dedicated Servers",
    badge: "Enterprise Hosting",
    badgeIcon: <IconServer />,
    description:
      "Powerful bare-metal servers fully managed by experienced infrastructure engineers — no ops team required.",
    image: "/slides/dedicated.png",
    stats: [
      { label: "CPU Cores",  value: "Up to 96" },
      { label: "RAM",        value: "Up to 2TB" },
      { label: "Setup Time", value: "< 4 hrs"  },
    ],
    cta: "See Server Plans",
  },
  {
    title: "Managed VPS Hosting",
    badge: "cPanel Included",
    badgeIcon: <IconCloud />,
    description:
      "Managed VPS hosting with cPanel, automated backups, real-time monitoring, and hardened security built in.",
    image: "/slides/vps.png",
    stats: [
      { label: "NVMe SSD",  value: "Up to 2TB" },
      { label: "Snapshots", value: "Daily"      },
      { label: "Bandwidth", value: "Unmetered"  },
    ],
    cta: "View VPS Plans",
  },
  {
    title: "Advanced DDoS Protection",
    badge: "Powered by Path.net",
    badgeIcon: <IconShield />,
    description:
      "Enterprise-grade DDoS mitigation and attack scrubbing included on every plan — no hidden charges, ever.",
    image: "/slides/ddos.png",
    stats: [
      { label: "Mitigation", value: "6+ Tbps"  },
      { label: "Detection",  value: "< 10 sec" },
      { label: "Always On",  value: "Included" },
    ],
    cta: "Learn About DDoS",
  },
];

// ─── SVG Illustrations (all in blue palette) ──────────────────────────────────

function SlideIllustration({ slide, index }: { slide: Slide; index: number }) {
  // Single blue gradient used across all illustrations
  const GRAD = (
    <defs>
      <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
      <linearGradient id="blueGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#2563eb" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
  );

  const shapes = [
    // 0 – Support: headset / chat cloud
    <svg key="support" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {GRAD}
      <circle cx="160" cy="130" r="90" fill="url(#blueGrad)" opacity="0.08" />
      <circle cx="160" cy="130" r="60" fill="url(#blueGrad)" opacity="0.10" />
      {/* Cloud bubble */}
      <path d="M105 120 Q105 88 138 88 Q143 72 160 72 Q180 72 185 88 Q213 88 215 107 Q228 109 228 125 Q228 143 212 144 H108 Q92 144 92 128 Q92 112 105 120 Z"
        fill="url(#blueGrad)" opacity="0.45" />
      {/* Headset arc */}
      <path d="M130 175 Q130 148 160 148 Q190 148 190 175" stroke="#60a5fa" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <rect x="122" y="173" width="14" height="22" rx="5" fill="#3b82f6" opacity="0.7"/>
      <rect x="184" y="173" width="14" height="22" rx="5" fill="#3b82f6" opacity="0.7"/>
      {/* Dots */}
      <circle cx="100" cy="78"  r="4"   fill="#60a5fa" opacity="0.6"/>
      <circle cx="232" cy="88"  r="3"   fill="#93c5fd" opacity="0.5"/>
      <circle cx="90"  cy="162" r="2.5" fill="#38bdf8" opacity="0.5"/>
    </svg>,

    // 1 – Datacenter: server racks
    <svg key="dc" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {GRAD}
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x="70" y={58 + i * 46} width="180" height="36" rx="7" fill="url(#blueGrad)" opacity={0.10 + i * 0.04}/>
          <circle cx="92"  cy={76 + i * 46} r="5.5" fill="#3b82f6" opacity="0.8"/>
          <circle cx="112" cy={76 + i * 46} r="5.5" fill="#3b82f6" opacity="0.4"/>
          <rect x="180" y={69 + i * 46} width="52" height="7" rx="3.5" fill="#60a5fa" opacity="0.30"/>
          <rect x="180" y={81 + i * 46} width="32" height="5"   rx="2.5" fill="#60a5fa" opacity="0.18"/>
          {/* Active LED */}
          <circle cx="240" cy={76 + i * 46} r="3" fill={i % 2 === 0 ? "#34d399" : "#60a5fa"} opacity="0.8"/>
        </g>
      ))}
      <circle cx="232" cy="56"  r="3"   fill="#93c5fd" opacity="0.6"/>
      <circle cx="78"  cy="242" r="2.5" fill="#38bdf8" opacity="0.5"/>
    </svg>,

    // 2 – Dedicated: single big server box
    <svg key="ded" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {GRAD}
      {/* Shadow layers */}
      <rect x="96" y="72" width="132" height="144" rx="16" fill="url(#blueGrad)" opacity="0.06"/>
      <rect x="88" y="66" width="132" height="144" rx="16" fill="url(#blueGrad)" opacity="0.09"/>
      {/* Main box */}
      <rect x="80" y="60" width="160" height="160" rx="16" fill="url(#blueGrad)" opacity="0.14" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.35"/>
      {/* Rows */}
      {[80, 122, 164].map((y, i) => (
        <g key={i}>
          <rect x="96" y={y} width="128" height="33" rx="8" fill="url(#blueGrad2)" opacity={0.22 - i * 0.03}/>
          <circle cx="116" cy={y + 16} r="5.5" fill="#60a5fa" opacity="0.75"/>
          <rect x="132" y={y + 12} width="62" height="5" rx="2.5" fill="#93c5fd" opacity="0.35"/>
          <rect x="132" y={y + 21} width="40" height="4" rx="2"   fill="#93c5fd" opacity="0.20"/>
          <circle cx="212" cy={y + 16} r="3.5" fill={i === 0 ? "#34d399" : "#60a5fa"} opacity="0.75"/>
        </g>
      ))}
      <circle cx="272" cy="68"  r="4"   fill="#60a5fa" opacity="0.5"/>
      <circle cx="58"  cy="198" r="3"   fill="#93c5fd" opacity="0.4"/>
    </svg>,

    // 3 – VPS: stacked windows
    <svg key="vps" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {GRAD}
      <ellipse cx="160" cy="202" rx="102" ry="18" fill="url(#blueGrad)" opacity="0.08"/>
      {/* Back layers */}
      {[0, 1].map(i => (
        <rect key={i} x={80 + i * 14} y={82 - i * 16} width="124" height="94" rx="12"
          fill="url(#blueGrad)" opacity={0.07 + i * 0.06}
          stroke="#3b82f6" strokeWidth="0.6" strokeOpacity="0.25"/>
      ))}
      {/* Front card */}
      <rect x="94" y="92" width="132" height="100" rx="12" fill="url(#blueGrad)" opacity="0.20"
        stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.50"/>
      {/* Terminal lines */}
      <rect x="112" y="112" width="90" height="7" rx="3.5" fill="#60a5fa" opacity="0.45"/>
      <rect x="112" y="127" width="62" height="5" rx="2.5" fill="#60a5fa" opacity="0.28"/>
      <rect x="112" y="140" width="76" height="5" rx="2.5" fill="#60a5fa" opacity="0.22"/>
      <rect x="112" y="153" width="50" height="5" rx="2.5" fill="#60a5fa" opacity="0.16"/>
      {/* Blinking cursor */}
      <rect x="112" y="166" width="8" height="5" rx="1" fill="#38bdf8" opacity="0.7"/>
      <circle cx="252" cy="84"  r="3"   fill="#3b82f6" opacity="0.5"/>
      <circle cx="74"  cy="186" r="2.5" fill="#60a5fa" opacity="0.45"/>
    </svg>,

    // 4 – DDoS: shield + radar rings
    <svg key="ddos" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {GRAD}
      {/* Radar rings */}
      <circle cx="160" cy="140" r="88"  stroke="url(#blueGrad)" strokeWidth="1" opacity="0.18"/>
      <circle cx="160" cy="140" r="60"  stroke="url(#blueGrad)" strokeWidth="1" opacity="0.25"/>
      <circle cx="160" cy="140" r="34"  fill="url(#blueGrad)"   opacity="0.14"/>
      {/* Shield body */}
      <path d="M160 92 L198 108 L198 138 Q198 162 160 178 Q122 162 122 138 L122 108 Z"
        fill="url(#blueGrad)" opacity="0.30" stroke="#60a5fa" strokeWidth="1.5" strokeOpacity="0.6"/>
      {/* Check mark */}
      <path d="M145 140 L156 151 L177 127" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85"/>
      {/* Incoming threat dots */}
      {[[100,106],[192,103],[86,140],[222,138],[104,172],[208,170]].map(([cx,cy],i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5.5" fill="#3b82f6" opacity="0.50"/>
          <line x1={cx} y1={cy} x2="160" y2="140" stroke="#60a5fa" strokeWidth="1"
            strokeDasharray="4,4" opacity="0.30"/>
        </g>
      ))}
    </svg>,
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[320px] h-[280px] relative">
        {/* Real image takes priority when available */}
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-contain z-10"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {shapes[index % shapes.length]}
        </div>
      </div>
    </div>
  );
}

// ─── Progress Bar (blue fill) ─────────────────────────────────────────────────

function ProgressBar({ duration, active, paused }: { duration: number; active: boolean; paused: boolean }) {
  return (
    <div className="h-0.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 rounded-full origin-left"
        style={{
          width: active ? "100%" : "0%",
          transition: active && !paused ? `width ${duration}ms linear` : "none",
        }}
      />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const SLIDE_DURATION = 5000;

export default function HeroSlider() {
  const [current, setCurrent]     = useState(0);
  const [paused, setPaused]       = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const totalSlides = slides.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 500);
    },
    [animating]
  );

  const next     = useCallback(() => goTo((current + 1) % totalSlides, "next"),             [current, totalSlides, goTo]);
  const previous = useCallback(() => goTo((current - 1 + totalSlides) % totalSlides, "prev"), [current, totalSlides, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  previous();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, previous]);

  const slide = slides[current];

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(52px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-52px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.45; transform: scale(1);    }
          50%       { opacity: 0.80; transform: scale(1.06); }
        }
        .slide-in-next { animation: slideInRight 0.5s cubic-bezier(0.22,1,0.36,1) forwards; }
        .slide-in-prev { animation: slideInLeft  0.5s cubic-bezier(0.22,1,0.36,1) forwards; }
        .fade-up-1 { animation: fadeUp 0.55s 0.04s ease both; }
        .fade-up-2 { animation: fadeUp 0.55s 0.14s ease both; }
        .fade-up-3 { animation: fadeUp 0.55s 0.24s ease both; }
        .fade-up-4 { animation: fadeUp 0.55s 0.34s ease both; }
        .fade-up-5 { animation: fadeUp 0.55s 0.44s ease both; }
        .glow-orb  { animation: glowPulse 6s ease-in-out infinite; }
      `}</style>

      <section
        className="relative bg-white dark:bg-black overflow-hidden"
        aria-label="Hero slider"
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        {/* Blue glow orbs — always blue */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] glow-orb pointer-events-none"
          style={{ background: "rgba(37,99,235,0.22)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-25"
          style={{ background: "rgba(59,130,246,0.20)" }}
          aria-hidden="true"
        />

        {/* ── Slide area ── */}
        <div className="relative min-h-[700px] flex items-center">
          <div className="max-w-7xl mx-auto w-full px-8 py-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* LEFT: Content */}
              <div
                key={`content-${current}`}
                className={direction === "next" ? "slide-in-next" : "slide-in-prev"}
                aria-live="polite"
                aria-atomic="true"
              >
                {/* Badge — blue pill, matching original blue-100/blue-600 */}
                <div className="fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100/10 border border-blue-500/30 mb-6">
                  <span className="text-blue-400">{slide.badgeIcon}</span>
                  <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                    {slide.badge}
                  </span>
                </div>

                {/* Headline — text-6xl matching the original */}
                <h1 className="fade-up-2 text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.08] tracking-tight">
                  {slide.title}
                </h1>

                {/* Description — text-xl matching original */}
                <p className="fade-up-3 text-slate-600 dark:text-gray-400 text-xl leading-relaxed mb-8 max-w-lg">
                  {slide.description}
                </p>

                {/* Stats — blue gradient values */}
                <div className="fade-up-4 flex flex-wrap gap-8 mb-9">
                  {slide.stats.map(({ label, value }) => (
                    <div key={label} className="flex flex-col">
                      <span className="text-3xl font-bold text-blue-400">
                        {value}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-gray-500 mt-1 font-medium uppercase tracking-wider">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons — blue-600 primary (same as original), outlined secondary */}
                <div className="fade-up-5 flex flex-wrap gap-4">
                  <button
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {slide.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="inline-flex items-center gap-2 border border-slate-300 dark:border-gray-700 hover:border-slate-400 dark:hover:border-gray-500 px-6 py-3 rounded-lg text-slate-900 dark:text-white font-semibold transition-all duration-200 hover:bg-black/5 dark:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 dark:focus-visible:ring-white/30">
                    Learn More
                  </button>
                </div>
              </div>

              {/* RIGHT: Illustration */}
              <div
                key={`img-${current}`}
                className={`hidden md:flex justify-center items-center h-[380px] lg:h-[440px] ${direction === "next" ? "slide-in-next" : "slide-in-prev"}`}
                aria-hidden="true"
              >
                <SlideIllustration slide={slide} index={current} />
              </div>

            </div>
          </div>
        </div>

        {/* ── Bottom control bar ── */}
        <div className="relative border-t border-slate-200 dark:border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-8 py-5 flex items-center gap-5">

            {/* Prev / Next */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={previous}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-lg border border-gray-700 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="w-9 h-9 rounded-lg border border-gray-700 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress-bar tabs — blue fill */}
            <div className="flex-1 flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => goTo(i, i > current ? "next" : "prev")}
                  aria-label={`Go to slide ${i + 1}: ${s.title}`}
                  aria-current={i === current ? "true" : undefined}
                  className="flex-1 flex flex-col gap-1.5 group focus-visible:outline-none"
                >
                  <ProgressBar duration={SLIDE_DURATION} active={i === current} paused={paused} />
                  <span
                    className={`text-[10px] font-medium uppercase tracking-wider truncate transition-colors duration-200 hidden sm:block ${
                      i === current ? "text-blue-400" : "text-slate-400 dark:text-gray-600 group-hover:text-slate-600 dark:group-hover:text-gray-400"
                    }`}
                  >
                    {s.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="flex-shrink-0 text-sm font-mono text-slate-400 dark:text-gray-500 tabular-nums">
              <span className="text-slate-900 dark:text-white font-semibold">{String(current + 1).padStart(2, "0")}</span>
              <span className="mx-1">/</span>
              {String(totalSlides).padStart(2, "0")}
            </div>

            {/* Pause / Play */}
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="flex-shrink-0 w-9 h-9 rounded-lg border border-slate-300 dark:border-gray-700 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {paused ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>

          </div>
        </div>

      </section>
    </>
  );
}
