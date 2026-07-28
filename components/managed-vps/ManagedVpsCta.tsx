import Link from "next/link";
import {
  Shield,
  Monitor,
  Settings,
  CheckCircle,
} from "lucide-react";

export default function ManagedVpsCta() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-50 to-white p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="text-blue-500 uppercase tracking-wider font-semibold">
                Fully Managed VPS Hosting
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-6">
                Focus On Your Business.
                We'll Handle The Server.
              </h2>

              <p className="text-slate-600 text-lg mb-8">
                Get enterprise-grade VPS hosting with cPanel,
                monitoring, security management, backups,
                updates and expert support included.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="https://my.kloud101.com/vps/order/managed-vps"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Deploy Managed VPS
                </a>

                <Link
                  href="/contact"
                  className="border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Contact Sales
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <Settings
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  cPanel Included
                </h3>

                <p className="text-slate-600 text-sm">
                  Full cPanel & WHM management tools.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <Monitor
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  24/7 Monitoring
                </h3>

                <p className="text-slate-600 text-sm">
                  Continuous monitoring and alerts.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <Shield
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  Security Managed
                </h3>

                <p className="text-slate-600 text-sm">
                  Security hardening and protection.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <CheckCircle
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  Expert Support
                </h3>

                <p className="text-slate-600 text-sm">
                  Assistance whenever you need it.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}