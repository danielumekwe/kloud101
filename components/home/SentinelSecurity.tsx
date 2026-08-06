import Link from "next/link";
import { ShieldCheck, ScanLine, FileCheck, BellRing, Radar } from "lucide-react";

const highlights = [
  { icon: ScanLine, label: "Malware & vulnerability scanning" },
  { icon: FileCheck, label: "File integrity monitoring" },
  { icon: BellRing, label: "Real-time threat alerts" },
];

export default function SentinelSecurity() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-flex items-center gap-2 text-blue-600 uppercase tracking-[0.25em] font-semibold">
              <ShieldCheck className="h-4 w-4" />
              KloudSentinel Security
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-6 mb-4 leading-tight">
              Protect Your Website
              <br />
              Before Threats Strike
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
              KloudSentinel is our AI-powered security platform that detects
              malware, vulnerabilities and unauthorized changes across
              WordPress, hosting servers and cloud infrastructure.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 shrink-0 text-blue-500" />
                  <span className="text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/sentinel"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
              >
                Explore KloudSentinel
              </Link>

              <Link
                href="https://my.kloud101.com/register"
                className="px-8 py-4 border border-slate-300 hover:border-blue-500 rounded-xl font-semibold transition"
              >
                Download Free Plugin
              </Link>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">

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

              <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-500/10">
                <Radar className="h-14 w-14 text-blue-600" />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
