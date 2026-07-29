import Image from "next/image";

const locations = [
  { city: "New York", status: "Online" },
  { city: "London", status: "Online" },
  { city: "Frankfurt", status: "Online" },
  { city: "Singapore", status: "Online" },
];

const highlights = ["99.9% Uptime", "Hourly Billing", "Deploy in <60s"];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[640px] md:min-h-[780px] flex items-center">
      {/* Background image */}
      <Image
        src="/images/hero-background.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur text-white text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              8+ global locations across 3 continents
            </span>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Global NVMe SSD VPS
              <br />
              Hosting in 8+ Locations
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              High-performance KVM cloud servers, live in under a minute.
              Hourly billing, cancel anytime.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {highlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-white/90 text-sm font-medium">
                  <CheckIcon />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/vps"
                className="bg-slate-900 hover:bg-black transition px-8 py-4 rounded-xl font-semibold text-white text-center shadow-lg"
              >
                Deploy VPS
              </a>
              <a
                href="/pricing"
                className="bg-white hover:bg-slate-50 transition px-8 py-4 rounded-xl font-semibold text-slate-900 text-center"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Right: Floating coverage card */}
          <div className="hidden md:flex justify-start">
            <div className="w-72 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  Global coverage
                </span>
                <span className="text-xs font-semibold text-white bg-white/15 rounded-full px-2.5 py-1">
                  8+
                </span>
              </div>

              <ul className="space-y-3">
                {locations.map(({ city, status }) => (
                  <li key={city} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-white/90">{city}</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-300 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                      {status}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/60">
                8+ locations worldwide
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
