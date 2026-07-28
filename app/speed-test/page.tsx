import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Activity, Download } from "lucide-react";

const locations = [
  {
    city: "Secaucus, NJ",
    host: "nyc.speedtest.is.cc",
    iperf: "iperf3 -4 -f m -c nyc.speedtest.is.cc -p {5201 - 5209}",
  },
  {
    city: "Los Angeles, CA",
    host: "lax.speedtest.is.cc",
    iperf: "iperf3 -4 -f m -c lax.speedtest.is.cc -p {5201 - 5209}",
  },
  {
    city: "Dallas, TX",
    host: "dfw.speedtest.is.cc",
    iperf: "iperf3 -4 -f m -c dfw.speedtest.is.cc -p 5201 -R",
  },
];

const fileSizes = ["10M", "50M", "100M", "250M", "500M", "1G", "2G", "5G", "10G"];

export default function SpeedTestPage() {
  return (
    <main className="min-h-screen bg-blue-50 text-slate-900">

      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Network Performance
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6 leading-tight">
            Test Your Network Connection
          </h1>

          <p className="text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Run a quick browser check, download a fixed-size test file, or
            use iperf3 for a repeatable benchmark from your terminal.
          </p>

        </div>
      </section>

      {/* Tools */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-6 items-start">

            {/* Browser Speed Test */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Activity size={18} />
                </div>
                <h2 className="font-bold text-lg">Browser Speed Test</h2>
              </div>
              <p className="text-slate-500 text-sm mb-6 pl-[52px]">
                Run a quick test from your current connection.
              </p>

              <div className="rounded-xl bg-blue-50 border border-slate-200 p-6">
                <button
                  type="button"
                  disabled
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-blue-100 text-slate-500 cursor-not-allowed mb-2"
                >
                  Start Test
                </button>
                <p className="text-center text-xs text-slate-500 mb-6">
                  Coming soon — live testing launches once our own
                  test endpoints are online.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {["Ping", "Jitter", "Download", "Upload"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg bg-white border border-slate-200 py-4 text-center"
                    >
                      <p className="text-2xl font-bold text-slate-600">—</p>
                      <p className="text-xs text-slate-500 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Test Files */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <Download size={18} />
                  </div>
                  <h2 className="font-bold text-lg">Download Test Files</h2>
                </div>
                <p className="text-slate-500 text-sm pl-[52px]">
                  Use fixed-size files or iperf3 for repeatable network checks.
                </p>
              </div>

              <div className="space-y-6">
                {locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="rounded-2xl border border-slate-200 bg-white p-8"
                  >
                    <h3 className="font-semibold text-lg mb-1">{loc.city}</h3>
                    <p className="font-mono text-xs text-slate-500 mb-5">
                      {loc.host}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {fileSizes.map((size) => (
                        <a
                          key={size}
                          href={`http://${loc.host}/${size}.img`}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono border border-slate-200 bg-blue-50 text-slate-700 hover:border-blue-500 hover:text-slate-900 transition-colors duration-200"
                        >
                          {size}
                        </a>
                      ))}
                    </div>

                    <div className="space-y-2 font-mono text-sm">
                      <div className="rounded-lg bg-blue-50 border border-slate-200 px-4 py-3 text-slate-700 overflow-x-auto">
                        ping {loc.host}
                      </div>
                      <div className="rounded-lg bg-blue-50 border border-slate-200 px-4 py-3 text-slate-700 overflow-x-auto">
                        {loc.iperf}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Region To Pick?</h2>
          <p className="text-slate-600 mb-8">
            Our team can help you choose the location closest to your users.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            Talk To Sales
          </Link>
        </div>
      </section>

      <Footer />

    </main>
  );
}
