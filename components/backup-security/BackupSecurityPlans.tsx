"use client";

import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";

const plans = [
  {
    name: "Starter",
    price: 4.99,
    retention: "30 Days Retention",
    websites: "1 Website",
    backup: "Daily Backups",
  },
  {
    name: "Business",
    price: 9.99,
    retention: "90 Days Retention",
    websites: "5 Websites",
    backup: "Hourly Backups",
    featured: true,
  },
  {
    name: "Enterprise",
    price: 19.99,
    retention: "365 Days Retention",
    websites: "Unlimited Websites",
    backup: "Real-Time Backups",
  },
];

export default function BackupSecurityPlans() {
  const { formatPrice } = useCurrency();

  return (
    <section
      id="plans"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Backup & Security Plans
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Protect What Matters Most
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Flexible backup and security plans designed
            to protect your websites, applications and business data.
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

                <div>{plan.backup}</div>

                <div>{plan.retention}</div>

                <div>{plan.websites}</div>

                <div>Malware Protection</div>

                <div>Ransomware Recovery</div>

                <div>Automated Monitoring</div>

                <div>Disaster Recovery</div>

                <div>24/7 Support</div>

              </div>

              <Link
                href="/register"
                className="block text-center bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
              >
                Get Protected
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}