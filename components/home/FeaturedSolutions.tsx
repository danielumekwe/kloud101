"use client";

import { useCurrency } from "@/context/CurrencyContext";

const BASE_PRICE_PER_SLICE = 4.5;
const LINK = "https://my.kloud101.com/vps/order/linux-vps";

const tiers = [
  { slices: 1, cores: "1 core", memory: "2GB memory", storage: "40GB SSD", transfer: "2TB transfer" },
  { slices: 4, cores: "2 cores", memory: "8GB memory", storage: "160GB SSD", transfer: "8TB transfer" },
  { slices: 8, cores: "4 cores", memory: "16GB memory", storage: "320GB SSD", transfer: "16TB transfer", featured: true },
  { slices: 12, cores: "6 cores", memory: "24GB memory", storage: "480GB SSD", transfer: "24TB transfer" },
];

export default function FeaturedSolutions() {
  const { formatPrice } = useCurrency();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-500 uppercase tracking-wider font-semibold text-sm">
            Featured Solutions
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
             VPS Hosting
            <br className="hidden sm:block" />
            For Modern Businesses
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
            Launch and scale your business with fully managed VPS
            infrastructure, full root access and enterprise-grade support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => {
            const specs = [
              { label: tier.cores, detail: tier.memory },
              { label: tier.storage, detail: tier.transfer },
              { label: "10Gbps", detail: "Shared port" },
              { label: "Root access", detail: "Full server control" },
            ];

            return (
              <div
                key={tier.slices}
                className={`relative rounded-3xl border p-6 md:p-8 transition-all duration-300 ${
                  tier.featured
                    ? "border-blue-500 bg-white shadow-xl shadow-blue-500/10 lg:-translate-y-4"
                    : "border-slate-200 bg-white hover:border-blue-500 hover:-translate-y-1"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Price */}
                <div className="flex flex-wrap items-baseline justify-center gap-1.5 mb-6 md:mb-8">
                  <span className="text-3xl md:text-4xl font-bold text-slate-900">
                    {formatPrice(tier.slices * BASE_PRICE_PER_SLICE)}
                  </span>
                  <span className="text-slate-500 text-sm">
                    /mo
                  </span>
                </div>

                {/* Specs */}
                <div className="mb-6 md:mb-8 divide-y divide-slate-200 border-t border-b border-slate-200">
                  {specs.map((spec) => (
                    <div key={spec.label} className="py-2.5 md:py-3">
                      <p className="font-semibold text-slate-900 text-sm">
                        {spec.label}
                      </p>
                      <p className="text-slate-500 text-xs md:text-sm">
                        {spec.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={LINK}
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 ${
                    tier.featured
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  Deploy VPS
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
