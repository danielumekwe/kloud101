"use client";

import Link from "next/link";
import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";

export default function BackupSecurityHero() {
  const { formatPrice } = useCurrency();

  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-500 font-semibold uppercase tracking-wider">
              Backup & Security
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mt-4 mb-8">
              Protect Your Data
              And Business
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Automated backups, ransomware protection,
              website security and disaster recovery solutions
              designed to keep your business running.
            </p>

            <div className="bg-blue-50 border border-slate-200 rounded-2xl p-8 max-w-xl mb-8">

              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3 mb-6">

                <span className="text-slate-600">
                  Starting at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  {formatPrice(4.99)}
                </span>

                <span className="text-slate-600 mb-2">
                  /month
                </span>

              </div>

              <div className="flex gap-4 flex-wrap">

                <Link
                  href="#plans"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Protect My Business
                </Link>

                <Link
                  href="#plans"
                  className="border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Compare Plans
                </Link>

              </div>

            </div>

          </div>

          <div className="flex justify-center">

            <Image
              src="/services/backup-security-hero.png"
              alt="Backup & Security"
              width={700}
              height={700}
              priority
            />

          </div>

        </div>

      </div>

    </section>
  );
}