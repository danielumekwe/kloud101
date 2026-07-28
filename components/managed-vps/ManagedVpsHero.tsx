"use client";

import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";

export default function ManagedVpsHero() {
  const { formatPrice } = useCurrency();

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              Fully Managed VPS Hosting
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mt-4 mb-8">
              Managed VPS Hosting
              
            </h1>

            <div className="max-w-xl bg-blue-50 border border-slate-200 rounded-2xl p-8 mb-8">

              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3">

                <span className="text-slate-600">
                  Starts at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  {formatPrice(13.50)}
                </span>

                <span className="text-slate-600 mb-1">
                  /month
                </span>

              </div>

            </div>

            <p className="text-slate-600 text-lg">
              Get the power of VPS hosting with expert server management,
              cPanel, monitoring, security updates, backups and support included.
            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/services/managed-vps.png"
              alt="Managed VPS Hosting"
              width={750}
              height={750}
              className="object-contain"
              priority
            />

          </div>

        </div>

      </div>

    </section>
  );
}