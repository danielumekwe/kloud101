"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function ManagedDedicatedPricing() {
  const { formatPrice } = useCurrency();

  const plans = [
    {
      name: "Essential",
      cpu: "Intel Xeon E3",
      ram: "32GB RAM",
      storage: "2 x 1TB SSD",
      price: 149,
    },
    {
      name: "Business",
      cpu: "Intel Xeon Silver",
      ram: "64GB RAM",
      storage: "2 x 2TB SSD",
      price: 249,
      featured: true,
    },
    {
      name: "Enterprise",
      cpu: "Dual Xeon Gold",
      ram: "128GB RAM",
      storage: "4 x 2TB SSD",
      price: 399,
    },
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Managed Dedicated Plans
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Dedicated Servers Managed For You
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-blue-500 bg-slate-950"
                  : "border-slate-800"
              }`}
            >
              {plan.featured && (
                <div className="bg-blue-600 inline-block px-4 py-2 rounded-full text-sm mb-6">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold mb-6">
                {plan.name}
              </h3>

              <div className="flex flex-wrap items-end gap-2 text-5xl font-bold text-blue-500 mb-6">
                <span>{formatPrice(plan.price)}</span>
                <span className="text-lg text-gray-400">/mo</span>
              </div>

              <div className="space-y-4 text-gray-300">

                <div>{plan.cpu}</div>
                <div>{plan.ram}</div>
                <div>{plan.storage}</div>

                <div>cPanel Included</div>
                <div>24/7 Monitoring</div>
                <div>Security Hardening</div>
                <div>Daily Backups</div>
                <div>Expert Support</div>

              </div>

              <a
                href="https://my.kloud101.com/"
                className="w-full block text-center mt-8 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold"
              >
                Order Now
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}