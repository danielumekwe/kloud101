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

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 01-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.82z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1A12 12 0 0012 24z" />
      <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 014.9 12c0-.79.14-1.56.37-2.28v-3.1H1.27A12 12 0 000 12c0 1.94.46 3.77 1.27 5.38l4-3.1z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0A12 12 0 001.27 6.62l4 3.1C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.21.66.79.55A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
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

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a
                href="https://my.kloud101.com/auth/google/redirect"
                className="inline-flex items-center justify-center gap-2.5 border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur transition px-6 py-3 rounded-xl font-semibold text-white text-center"
              >
                <GoogleIcon />
                Sign Up With Google
              </a>
              <a
                href="https://my.kloud101.com/auth/github/redirect"
                className="inline-flex items-center justify-center gap-2.5 border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur transition px-6 py-3 rounded-xl font-semibold text-white text-center"
              >
                <GitHubIcon />
                Sign Up With GitHub
              </a>
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
