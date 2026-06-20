"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function VpsPricing() {
  const { formatPrice } = useCurrency();

  const plans = [
    {
      name: "Starter",
      ram: "2 GB RAM",
      cpu: "1 vCPU",
      storage: "50 GB SSD",
      price: 8,
    },
    {
      name: "Business",
      ram: "4 GB RAM",
      cpu: "2 vCPU",
      storage: "100 GB SSD",
      price: 16,
    },
    {
      name: "Professional",
      ram: "8 GB RAM",
      cpu: "4 vCPU",
      storage: "200 GB SSD",
      price: 32,
    },
  ]

  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Cloud VPS Plans
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Powerful virtual servers with instant deployment.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {plan.name}
              </h3>

              <div className="flex flex-wrap items-end gap-2 text-4xl font-bold mb-6">
                <span>{formatPrice(plan.price)}</span>
                <span className="text-lg text-gray-400">/mo</span>
              </div>

              <ul className="space-y-3 text-gray-400 mb-8">
                <li>{plan.cpu}</li>
                <li>{plan.ram}</li>
                <li>{plan.storage}</li>
              </ul>

              <a
                href="https://my.kloud101.com/vps/order/linux-vps"
                className="w-full block text-center bg-blue-600 py-3 rounded-lg"
              >
                Deploy Now
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}