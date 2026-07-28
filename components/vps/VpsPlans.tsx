"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function VpsPlans() {
  const { formatPrice } = useCurrency();

  const plans = [
    {
      slice: "1 Slice",
      cpu: "1 vCPU",
      ram: "2 GB RAM",
      storage: "40 GB NVMe",
      bandwidth: "2 TB Transfer",
      price: 4.5,
    },
    {
      slice: "2 Slices",
      cpu: "2 vCPU",
      ram: "4 GB RAM",
      storage: "80 GB NVMe",
      bandwidth: "4 TB Transfer",
      price: 7.5,
      featured: true,
    },
    {
      slice: "4 Slices",
      cpu: "4 vCPU",
      ram: "8 GB RAM",
      storage: "160 GB NVMe",
      bandwidth: "8 TB Transfer",
      price: 13.5,
    },
    {
      slice: "8 Slices",
      cpu: "8 vCPU",
      ram: "16 GB RAM",
      storage: "320 GB NVMe",
      bandwidth: "16 TB Transfer",
      price: 25.5,
    },
  ];

  return (
    <section id="plans" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Linux VPS Plans
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Start small and scale your infrastructure as your business grows.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.slice}
              className={`rounded-2xl border p-8 transition hover:scale-105 ${
                plan.featured
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 bg-blue-50"
              }`}
            >
              {plan.featured && (
                <span className="inline-block mb-4 px-3 py-1 text-sm bg-blue-600 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-4">
                {plan.slice}
              </h3>

              <div className="flex flex-wrap items-end gap-2 text-5xl font-bold text-blue-500 mb-6">
                <span>{formatPrice(plan.price)}</span>
                <span className="text-lg text-slate-600">/mo</span>
              </div>

              <ul className="space-y-3 text-slate-600 mb-8">
                <li>{plan.cpu}</li>
                <li>{plan.ram}</li>
                <li>{plan.storage}</li>
                <li>{plan.bandwidth}</li>
              </ul>

              <a
                href="https://my.kloud101.com/vps/order/linux-vps"
                className="w-full block text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold"
              >
                Deploy VPS
              </a>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}