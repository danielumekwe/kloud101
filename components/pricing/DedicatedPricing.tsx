"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function DedicatedPricing() {
  const { formatPrice } = useCurrency();

  const servers = [
    {
      name: "Xeon E3",
      cpu: "Intel Xeon E3",
      ram: "32 GB RAM",
      storage: "2 x 1TB SSD",
      bandwidth: "10 TB Bandwidth",
      price: 79,
    },
    {
      name: "Xeon Silver",
      cpu: "Intel Xeon Silver",
      ram: "64 GB RAM",
      storage: "2 x 2TB SSD",
      bandwidth: "20 TB Bandwidth",
      price: 129,
      featured: true,
    },
    {
      name: "Dual Xeon Gold",
      cpu: "Dual Intel Xeon Gold",
      ram: "128 GB RAM",
      storage: "4 x 2TB SSD",
      bandwidth: "Unmetered",
      price: 249,
    },
  ]

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Dedicated Servers
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            High-performance dedicated infrastructure for enterprise workloads,
            hosting providers, agencies, and growing businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {servers.map((server) => (
            <div
              key={server.name}
              className={`rounded-2xl border p-8 transition hover:scale-105 ${
                server.featured
                  ? "border-blue-500 bg-blue-950/20"
                  : "border-gray-800"
              }`}
            >
              {server.featured && (
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">
                {server.name}
              </h3>

              <div className="flex flex-wrap items-end gap-2 text-4xl font-bold mb-6">
                <span>{formatPrice(server.price)}</span>
                <span className="text-lg text-gray-400">/mo</span>
              </div>

              <ul className="space-y-3 text-gray-400 mb-8">
                <li>{server.cpu}</li>
                <li>{server.ram}</li>
                <li>{server.storage}</li>
                <li>{server.bandwidth}</li>
              </ul>

              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
                Order Server
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}