"use client";

import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";

export default function ManagedDedicatedHero() {
  const { formatPrice } = useCurrency();

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              Fully Managed Dedicated Servers
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mt-4 mb-8">
              Dedicated Servers
              With cPanel &
              Expert Management
            </h1>

            <div className="max-w-xl bg-blue-50 border border-slate-200 rounded-2xl p-8 mb-8">

              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3">

                <span className="text-slate-600">
                  Starts at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  {formatPrice(149)}
                </span>

                <span className="text-slate-600 mb-1">
                  /month
                </span>

              </div>

            </div>

            <p className="text-slate-600 text-lg">
              Enterprise-grade dedicated servers with cPanel,
              server monitoring, security management,
              backups and expert support included.
            </p>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <Image
              src="/services/managed-dedicated.png"
              alt="Managed Dedicated Servers"
              width={750}
              height={750}
              priority
              className="object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}