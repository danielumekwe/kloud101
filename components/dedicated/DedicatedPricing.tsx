"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function DedicatedPricing() {
  const { formatPrice } = useCurrency();

  const servers = [
    {
      cpu: "Intel Xeon E3",
      ram: "32GB DDR4",
      storage: "2 x 480GB SSD",
      bandwidth: "10TB",
      price: 79,
    },
    {
      cpu: "Intel Xeon E5",
      ram: "64GB DDR4",
      storage: "2 x 960GB SSD",
      bandwidth: "20TB",
      price: 129,
      featured: true,
    },
    {
      cpu: "Dual Xeon Gold",
      ram: "128GB DDR4",
      storage: "2 x 1.92TB NVMe",
      bandwidth: "30TB",
      price: 249,
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Dedicated Server Plans
          </h2>

          <p className="text-gray-400">
            Powerful bare metal servers for enterprise workloads.
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full border border-slate-800 rounded-2xl overflow-hidden">

            <thead className="bg-slate-900">

              <tr>
                <th className="p-5 text-left">CPU</th>
                <th className="p-5 text-left">RAM</th>
                <th className="p-5 text-left">Storage</th>
                <th className="p-5 text-left">Bandwidth</th>
                <th className="p-5 text-left">Price</th>
                <th className="p-5 text-left"></th>
              </tr>

            </thead>

            <tbody>

              {servers.map((server, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-800 hover:bg-slate-950"
                >
                  <td className="p-5">{server.cpu}</td>
                  <td className="p-5">{server.ram}</td>
                  <td className="p-5">{server.storage}</td>
                  <td className="p-5">{server.bandwidth}</td>

                  <td className="p-5 font-bold text-blue-500">
                    <div className="flex flex-wrap items-center gap-2">
                      <span>{formatPrice(server.price)}</span>
                      <span className="text-sm text-gray-400">/mo</span>
                    </div>
                  </td>

                  <td className="p-5">
                    <button className="bg-blue-600 px-5 py-2 rounded-lg">
                      Deploy
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}