"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function ManagedVpsPricing() {
  const { formatPrice } = useCurrency();

  const plans = [
    {
      name: "Starter",
      cpu: "2 vCPU",
      ram: "4GB RAM",
      storage: "80GB NVMe",
      price: 12,
    },
    {
      name: "Business",
      cpu: "4 vCPU",
      ram: "8GB RAM",
      storage: "160GB NVMe",
      price: 24,
      featured: true,
    },
    {
      name: "Enterprise",
      cpu: "8 vCPU",
      ram: "16GB RAM",
      storage: "320GB NVMe",
      price: 49,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Managed VPS Plans
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Managed VPS Hosting Plans
          </h2>

          <p className="text-slate-600">
            Fully managed VPS hosting with cPanel and expert support.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >

              {plan.featured && (
                <div className="bg-blue-600 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold mb-6">
                {plan.name}
              </h3>

              <div className="flex flex-wrap items-end gap-2 text-5xl font-bold text-blue-500 mb-6">
                <span>{formatPrice(plan.price)}</span>
                <span className="text-lg text-slate-600">/mo</span>
              </div>

              <div className="space-y-4 text-slate-600">

                <div>{plan.cpu}</div>
                <div>{plan.ram}</div>
                <div>{plan.storage}</div>

                <div>cPanel Included</div>
                <div>Server Monitoring</div>
                <div>Daily Backups</div>
                <div>Security Updates</div>
                <div>24/7 Support</div>

              </div>

              <a
                href="https://my.kloud101.com/vps/order/managed-vps"
                className="w-full block text-center mt-8 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
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