import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Activity, Download, Gauge } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

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
    <main className="min-h-screen">

      <Navbar />

      <PageHero
        breadcrumb="Speed Test"
        eyebrow="NETWORK PERFORMANCE"
        title="Test Your Network Connection"
        description="Run a quick browser check, download a fixed-size test file, or use iperf3 for a repeatable benchmark from your terminal."
        icon={Gauge}
      />

      {/* Tools */}
      <section className="section">
        <div className="wrap">

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-6 items-start">

            {/* Browser Speed Test */}
            <div className="rounded-md border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded bg-accent flex items-center justify-center text-primary">
                  <Activity size={18} />
                </div>
                <h2 className="font-bold text-lg">Browser Speed Test</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-6 pl-[52px]">
                Run a quick test from your current connection.
              </p>

              <div className="rounded bg-muted border border-border p-6">
                <button
                  type="button"
                  disabled
                  className="w-full py-3.5 rounded font-semibold text-sm bg-accent text-muted-foreground cursor-not-allowed mb-2"
                >
                  Start Test
                </button>
                <p className="text-center text-xs text-muted-foreground mb-6">
                  Coming soon — live testing launches once our own
                  test endpoints are online.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {["Ping", "Jitter", "Download", "Upload"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg bg-card border border-border py-4 text-center"
                    >
                      <p className="text-2xl font-bold text-muted-foreground">—</p>
                      <p className="text-xs text-muted-foreground mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Test Files */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded bg-accent flex items-center justify-center text-primary">
                    <Download size={18} />
                  </div>
                  <h2 className="font-bold text-lg">Download Test Files</h2>
                </div>
                <p className="text-muted-foreground text-sm pl-[52px]">
                  Use fixed-size files or iperf3 for repeatable network checks.
                </p>
              </div>

              <div className="space-y-6">
                {locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="rounded-md border border-border bg-card p-8"
                  >
                    <h3 className="font-semibold text-lg mb-1">{loc.city}</h3>
                    <p className="font-mono text-xs text-muted-foreground mb-5">
                      {loc.host}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {fileSizes.map((size) => (
                        <a
                          key={size}
                          href={`http://${loc.host}/${size}.img`}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-muted text-muted-foreground hover:border-primary hover:text-foreground transition-colors duration-200"
                        >
                          {size}
                        </a>
                      ))}
                    </div>

                    <div className="space-y-2 font-mono text-sm">
                      <div className="rounded-lg bg-muted border border-border px-4 py-3 text-muted-foreground overflow-x-auto">
                        ping {loc.host}
                      </div>
                      <div className="rounded-lg bg-muted border border-border px-4 py-3 text-muted-foreground overflow-x-auto">
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

      <ClosingCta
        title="Not Sure Which Region To Pick?"
        text="Our team can help you choose the location closest to your users."
        actions={<CtaLink href="/contact">Talk To Sales</CtaLink>}
      />

      <Footer />

    </main>
  );
}
