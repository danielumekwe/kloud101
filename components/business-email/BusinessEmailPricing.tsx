"use client";

import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";

const plans = [
  {
    name: "Starter",
    price: 1.99,
    storage: "5GB Mailbox",
    users: "1 Email Account",
    featured: false,
  },
  {
    name: "Business",
    price: 4.99,
    storage: "25GB Mailbox",
    users: "10 Email Accounts",
    featured: true,
  },
  {
    name: "Enterprise",
    price: 9.99,
    storage: "100GB Mailbox",
    users: "Unlimited Accounts",
    featured: false,
  },
];

export default function BusinessEmailPricing() {
  const { formatPrice } = useCurrency();

  return (
    <section
      id="plans"
      className="py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Business Email Plans
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Choose The Right Email Plan
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Professional email hosting for startups,
            businesses and enterprises.
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

                <div>{plan.storage}</div>

                <div>{plan.users}</div>

                <div>Webmail Access</div>

                <div>Mobile Sync</div>

                <div>Spam Protection</div>

                <div>Custom Domain Email</div>

                <div>SMTP / IMAP / POP3</div>

                <div>24/7 Support</div>

              </div>

              <Link
                href="/register"
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