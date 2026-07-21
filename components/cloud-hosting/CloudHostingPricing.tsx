"use client";

import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";

const plans = [
  {
    name: "Starter",
    price: 9.99,
    cpu: "2 vCPU",
    ram: "4GB RAM",
    storage: "50GB NVMe SSD",
    websites: "1 Website",
  },
  {
    name: "Business",
    price: 19.99,
    cpu: "4 vCPU",
    ram: "8GB RAM",
    storage: "100GB NVMe SSD",
    websites: "Unlimited Websites",
    featured: true,
  },
  {
    name: "Enterprise",
    price: 39.99,
    cpu: "8 vCPU",
    ram: "16GB RAM",
    storage: "250GB NVMe SSD",
    websites: "Unlimited Websites",
  },
];

export default function CloudHostingPricing() {
  const { formatPrice } = useCurrency();

  return (
    <section
      id="plans"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Cloud Hosting Plans
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Choose The Perfect Cloud Plan
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            High-performance cloud hosting built for speed,
            scalability and reliability.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-blue-500 bg-slate-950"
                  : "border-slate-800 bg-slate-950"
              }`}
            >
              {plan.featured && (
                <div className="inline-block bg-blue-600 px-4 py-2 rounded-full text-sm mb-6">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold mb-4">
                {plan.name}
              </h3>

              <div className="flex flex-wrap items-end gap-2 mb-8">

                <span className="text-5xl font-bold text-blue-500">
                  {formatPrice(plan.price)}
                </span>

                <span className="text-gray-400 mb-1">
                  /month
                </span>

              </div>

              <div className="space-y-4 text-gray-300 mb-8">

                <div>{plan.cpu}</div>

                <div>{plan.ram}</div>

                <div>{plan.storage}</div>

                <div>{plan.websites}</div>

                <div>Daily Backups</div>

                <div>Free SSL Certificates</div>

                <div>99.9% Uptime SLA</div>

                <div>24/7 Support</div>

              </div>

              <Link
                href="https://my.kloud101.com/register"
                className="block text-center bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
              >
                Get Started
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}