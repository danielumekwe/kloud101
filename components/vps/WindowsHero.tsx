"use client";

import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";

export default function WindowsHero() {
  const { formatPrice } = useCurrency();

  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              Windows VPS Hosting
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mt-4 mb-8">
              Windows VPS
              hosting with
              Remote Desktop.
            </h1>

            <div className="max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8">

              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3">

                <span className="text-gray-400">
                  Starts at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  {formatPrice(10)}
                </span>

                <span className="text-gray-400 mb-1">
                  /month
                </span>

              </div>

              <div className="flex gap-4 mt-6">

                <a
                  href="https://my.kloud101.com/vps/order/windows-vps"
                  className="bg-blue-600 px-8 py-4 rounded-xl"
                >
                  Order Windows VPS
                </a>

                <button className="border border-slate-700 px-8 py-4 rounded-xl">
                  Compare Plans
                </button>

              </div>

            </div>

            <p className="text-gray-400 text-lg">
              Run Windows Server workloads with full administrator access,
              Remote Desktop connectivity, MSSQL support and scalable resources.
            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/services/windows-vps.png"
              alt="Windows VPS"
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