import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { MapPin } from "lucide-react";

const locations = [
  { city: "New York", country: "United States", tier: "Tier III", network: "10Gbps Network" },
  { city: "Dallas", country: "United States", tier: "Tier III", network: "10Gbps Network" },
  { city: "Los Angeles", country: "United States", tier: "Tier III", network: "10Gbps Network" },
  { city: "Toronto", country: "Canada", tier: "Tier III", network: "10Gbps Network" },
  { city: "London", country: "United Kingdom", tier: "Tier III", network: "10Gbps Network" },
  { city: "Amsterdam", country: "Netherlands", tier: "Tier III", network: "10Gbps Network" },
  { city: "Frankfurt", country: "Germany", tier: "Tier III", network: "10Gbps Network" },
  { city: "Singapore", country: "Singapore", tier: "Tier III", network: "10Gbps Network" },
];

const stats = [
  { value: "99.9%", label: "Network Uptime" },
  { value: "24/7", label: "On-Site Monitoring" },
  { value: "8+", label: "Global Locations" },
  { value: "N+1", label: "Power & Cooling Redundancy" },
];

export default function DataCentersPage() {
  return (
    <main className="min-h-screen bg-blue-50 text-slate-900">

      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Global Infrastructure
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6 leading-tight">
            Data Centers Built For Performance
          </h1>

          <p className="text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Deploy closer to your customers across our network of
            strategically located facilities, each built for low latency,
            redundancy and maximum uptime.
          </p>

        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-blue-500">{stat.value}</div>
              <div className="text-slate-600 mt-2 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Every facility is monitored around the clock and connected
              through carrier-grade network links.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="rounded-2xl border border-slate-200 bg-white p-8 hover:border-blue-500 transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-5">
                  <MapPin size={20} />
                </div>

                <h3 className="font-semibold text-lg mb-1">{loc.city}</h3>
                <p className="text-slate-500 text-sm mb-5">{loc.country}</p>

                <div className="space-y-2 text-sm text-slate-600 border-t border-slate-200 pt-4">
                  <div>{loc.tier} Facility</div>
                  <div>{loc.network}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready To Deploy?</h2>
          <p className="text-slate-600 mb-8">
            Spin up a VPS or dedicated server in the region closest to your customers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/vps"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              View VPS Plans
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-slate-200 hover:border-blue-500 rounded-xl font-semibold transition"
            >
              Talk To Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
