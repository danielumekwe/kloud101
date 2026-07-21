import Link from "next/link";
import {
  Shield,
  Database,
  RotateCcw,
  Bell,
} from "lucide-react";

export default function BackupSecurityCta() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 to-slate-950 p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-blue-500 uppercase tracking-wider font-semibold">
                Backup & Security
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-6">
                Protect Your Business
                Before Problems Happen
              </h2>

              <p className="text-gray-400 text-lg mb-8">
                Keep your websites, applications and critical business
                data protected with automated backups and enterprise security.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="https://my.kloud101.com/register"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Get Protected
                </Link>

                <Link
                  href="/contact"
                  className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Contact Sales
                </Link>

              </div>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-black border border-slate-800 rounded-2xl p-6">
                <Shield size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">
                  Security Protection
                </h3>
                <p className="text-gray-400 text-sm">
                  Advanced protection against cyber threats.
                </p>
              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">
                <Database size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">
                  Automated Backups
                </h3>
                <p className="text-gray-400 text-sm">
                  Reliable backup schedules and retention.
                </p>
              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">
                <RotateCcw size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">
                  Fast Recovery
                </h3>
                <p className="text-gray-400 text-sm">
                  Restore data quickly when needed.
                </p>
              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">
                <Bell size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">
                  Security Alerts
                </h3>
                <p className="text-gray-400 text-sm">
                  Stay informed about potential threats.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}