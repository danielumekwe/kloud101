"use client";

import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";

export default function CloudHostingHero() {
  const { formatPrice } = useCurrency();

  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <div>

            <span className="text-blue-500 font-semibold uppercase tracking-wider">
              Cloud Hosting
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mt-4 mb-8">
              Fast, Reliable Cloud Hosting
              Built For Modern Businesses
            </h1>

            <div className="max-w-xl bg-slate-900/70 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">

              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3 mb-6">

                <span className="text-gray-400 text-xl">
                  Starts at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  {formatPrice(9.99)}
                </span>

                <span className="text-gray-400 text-xl mb-1">
                  /month
                </span>

              </div>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="#plans"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Get Started
                </Link>

                <Link
                  href="#plans"
                  className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Compare Plans
                </Link>

              </div>

            </div>

            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-10">
              Deploy websites, applications and business platforms on
              enterprise-grade cloud infrastructure with high availability,
              NVMe storage, daily backups and built-in security.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="font-semibold">
                  99.9% Uptime
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="font-semibold">
                  NVMe SSD Storage
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="font-semibold">
                  Daily Backups
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="font-semibold">
                  Free SSL Certificates
                </div>
              </div>

            </div>

          </div>

          {/* Right Content */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <Image
                src="/services/cloud-hosting-hero.png"
                alt="Cloud Hosting"
                width={750}
                height={750}
                priority
                className="object-contain"
              />

              <div className="absolute top-10 left-0 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl px-5 py-4">

                <div className="text-sm text-gray-400">
                  Uptime
                </div>

                <div className="text-xl font-bold">
                  99.9%
                </div>

              </div>

              <div className="absolute bottom-10 right-0 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl px-5 py-4">

                <div className="text-sm text-gray-400">
                  Storage
                </div>

                <div className="text-xl font-bold">
                  NVMe SSD
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}