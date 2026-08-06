import Link from "next/link";
import { ShieldCheck, ScanLine, Bug, Radar } from "lucide-react";

const trustPoints = [
  { icon: ScanLine, label: "Malware scanning" },
  { icon: Bug, label: "Vulnerability detection" },
  { icon: ShieldCheck, label: "File integrity monitoring" },
];

export default function SentinelHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 py-24">

      {/* Cybersecurity grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37,99,235,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute -top-32 right-0 h-[36rem] w-[36rem] rounded-full bg-blue-400/20 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="inline-flex items-center gap-2 text-blue-500 uppercase tracking-wider font-semibold">
              <ShieldCheck className="h-4 w-4" />
              KloudSentinel Security Platform
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6">
              Advanced Security Protection for WordPress, Servers &amp; Cloud
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
              KloudSentinel detects malware, vulnerabilities, unauthorized
              changes, and security threats before they become business
              problems.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">

              <Link
                href="#cloud-security"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Explore Cloud Security
              </Link>

            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <point.icon className="h-4 w-4 text-blue-500" />
                  {point.label}
                </div>
              ))}
            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96">

              <div className="absolute inset-0 rounded-full border border-blue-200 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-blue-300/70" />
              <div className="absolute inset-16 rounded-full border border-blue-400/60 animate-pulse [animation-delay:300ms]" />

              <div
                className="absolute inset-0 rounded-full animate-[spin_6s_linear_infinite]"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(37,99,235,0.25), transparent 30%)",
                }}
              />

              <div className="relative flex h-40 w-40 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-500/10">
                <Radar className="h-16 w-16 text-blue-600" />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
