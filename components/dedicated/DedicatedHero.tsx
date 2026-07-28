"use client";

import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";

export default function DedicatedHero() {
  const { formatPrice } = useCurrency();

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              Dedicated Servers
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mt-4 mb-8">
              Bare Metal Servers
              Built For Maximum
              Performance.
            </h1>

            <div className="max-w-xl bg-blue-50 border border-slate-200 rounded-2xl p-8 mb-8">

              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3">

                <span className="text-slate-600">
                  Starts at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  {formatPrice(79)}
                </span>

                <span className="text-slate-600 mb-1">
                  /month
                </span>

              </div>

            </div>

            <p className="text-slate-600 text-lg">
              Enterprise-grade dedicated servers with full hardware
              resources, NVMe SSD storage and complete control.
            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/services/dedi.png"
              alt="Dedicated Server"
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