"use client";

import Link from "next/link";
import {
  Check,
  Server,
  Cpu,
  Mail,
} from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";

const plans = [
  {
    title: "Managed VPS Special",
    icon: Server,
    price: 19,
    link: "/managed-vps",
    featured: false,
    features: [
      "cPanel Included",
      "Daily Backups",
      "ImunifyAV Protection",
      "CloudLinux",
      "Unlimited cPanels",
      "WHM Reseller",
      "Softaculous",
      "LiteSpeed",
    ],
  },
  {
    title: "Managed Dedicated Server",
    icon: Cpu,
    price: 99,
    link: "/managed-dedicated",
    featured: true,
    features: [
      "Dedicated Hardware",
      "cPanel Included",
      "Daily Backups",
      "ImunifyAV Protection",
      "CloudLinux",
      "Unlimited cPanels",
      "WHM Reseller",
      "LiteSpeed",
    ],
  },
  {
    title: "Business Email Hosting",
    icon: Mail,
    price: 1.99,
    link: "/business-email",
    featured: false,
    features: [
      "Custom Domain Email",
      "Mobile Sync",
      "Spam Protection",
      "Webmail Access",
      "Shared Calendars",
      "Contact Management",
      "SMTP / IMAP / POP3",
      "24/7 Support",
    ],
  },
];

export default function FeaturedSolutions() {
  const { formatPrice } = useCurrency();

  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-500 uppercase tracking-wider font-semibold text-sm">
            Featured Solutions
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Managed Cloud Solutions
            <br className="hidden sm:block" />
            For Modern Businesses
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
            Launch, manage and scale your business with fully managed
            infrastructure, professional email hosting and enterprise-grade
            support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.title}
                className={`group relative rounded-3xl border transition-all duration-300 ${
                  plan.featured
                    ? "border-blue-500 bg-black shadow-xl shadow-blue-500/10 md:-translate-y-4"
                    : "border-slate-800 bg-black hover:border-blue-500 hover:-translate-y-2"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full font-medium whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 md:p-10">

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500/20">
                      <Icon
                        size={30}
                        className="text-blue-500"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-10">
                    <span className="text-5xl md:text-6xl font-bold text-white">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-gray-400 text-sm md:text-base">
                      Per Month
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <Check
                          size={18}
                          className="text-blue-500 flex-shrink-0"
                        />
                        <span className="text-gray-300 text-sm md:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Link
                    href={plan.link}
                    className={`block text-center py-3.5 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-200 active:scale-95 ${
                      plan.featured
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-slate-900 hover:bg-slate-800 border border-slate-700 text-gray-300 hover:text-white"
                    }`}
                  >
                    Select Plan
                  </Link>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
