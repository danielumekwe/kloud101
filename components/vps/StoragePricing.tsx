"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function StoragePricing() {
  const { formatPrice } = useCurrency();

  const plans = [
    {
      slices: "1 TB",
      price: 4.5,
      ram: "2 GB RAM",
      transfer: "2 TB Transfer",
    },
    {
      slices: "4 TB",
      price: 18,
      ram: "8 GB RAM",
      transfer: "8 TB Transfer",
    },
    {
      slices: "8 TB",
      price: 36,
      ram: "16 GB RAM",
      transfer: "16 TB Transfer",
    },
    {
      slices: "12 TB",
      price: 54,
      ram: "24 GB RAM",
      transfer: "24 TB Transfer",
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Storage VPS Plans
          </h2>

          <p className="text-slate-600 mt-4">
            Scale storage as your data grows.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.slices}
              className="bg-blue-50 border border-slate-200 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {plan.slices}
              </h3>

              <div className="flex flex-wrap items-end gap-2 text-5xl font-bold text-blue-500 mb-6">
                <span>{formatPrice(plan.price)}</span>
                <span className="text-lg text-slate-600">
                  /mo
                </span>
              </div>

              <div className="space-y-3 text-slate-600">
                <p>{plan.ram}</p>
                <p>{plan.transfer}</p>
              </div>

              <a
                href="https://my.kloud101.com/vps/order/storage-vps"
                className="w-full block text-center bg-blue-600 py-3 rounded-xl mt-8"
              >
                Deploy
              </a>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}