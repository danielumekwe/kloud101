"use client";

import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";

export default function StorageHero() {
  const { formatPrice } = useCurrency();

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              Storage VPS Hosting
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mt-4 mb-8">
              Storage optimized VPS
              hosting with massive
              SSD capacity.
            </h1>

            <div className="max-w-xl bg-blue-50 border border-slate-200 rounded-2xl p-8 mb-8">

              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3">

                <span className="text-slate-600">
                  Starts at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  {formatPrice(4.50)}
                </span>

                <span className="text-slate-600 mb-1">
                  /TB
                </span>

              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="https://my.kloud101.com/vps/order/storage-vps"
                  className="bg-blue-600 px-8 py-4 rounded-xl"
                >
                  Order Storage VPS
                </a>

                <button className="border border-slate-200 px-8 py-4 rounded-xl">
                  Compare Plans
                </button>

              </div>

            </div>

            <p className="text-slate-600 text-lg">
              Perfect for backups, archives, media libraries,
              large datasets and file hosting applications.
            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/services/storage.png"
              alt="Storage VPS"
              width={700}
              height={700}
              className="object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}