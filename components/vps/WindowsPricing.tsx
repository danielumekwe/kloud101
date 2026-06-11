"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function WindowsPricing() {
  const { formatPrice } = useCurrency();

  const plans = [
    {
      name: "Starter",
      price: 10,
      cpu: "2 vCPU",
      ram: "4 GB RAM",
      storage: "60 GB SSD",
    },
    {
      name: "Business",
      price: 20,
      cpu: "4 vCPU",
      ram: "8 GB RAM",
      storage: "120 GB SSD",
    },
    {
      name: "Professional",
      price: 40,
      cpu: "8 vCPU",
      ram: "16 GB RAM",
      storage: "240 GB SSD",
    },
    {
      name: "Enterprise",
      price: 80,
      cpu: "16 vCPU",
      ram: "32 GB RAM",
      storage: "480 GB SSD",
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Windows VPS Plans
          </h2>

          <p className="text-gray-400 mt-4">
            Deploy Windows Server environments with instant provisioning.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {plan.name}
              </h3>

              <div className="flex flex-wrap items-end gap-2 text-5xl font-bold text-blue-500 mb-6">
                <span>{formatPrice(plan.price)}</span>
                <span className="text-lg text-gray-400">
                  /mo
                </span>
              </div>

              <div className="space-y-3 text-gray-400">
                <p>{plan.cpu}</p>
                <p>{plan.ram}</p>
                <p>{plan.storage}</p>
              </div>

              <button className="w-full bg-blue-600 py-3 rounded-xl mt-8">
                Deploy
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}