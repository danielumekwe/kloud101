import Link from "next/link";
import {
  Server,
  Shield,
  Monitor,
  CheckCircle,
} from "lucide-react";

export default function ManagedDedicatedCta() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 to-slate-950 p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="text-blue-500 uppercase tracking-wider font-semibold">
                Managed Dedicated Servers
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-6">
                Enterprise Infrastructure.
                Expert Management.
              </h2>

              <p className="text-gray-400 text-lg mb-8">
                Get dedicated hardware with cPanel, security management,
                proactive monitoring, backups and expert technical
                support included.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="/register"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Deploy Managed Dedicated
                </Link>

                <Link
                  href="/contact"
                  className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Contact Sales
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-black border border-slate-800 rounded-2xl p-6">

                <Server
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  Dedicated Hardware
                </h3>

                <p className="text-gray-400 text-sm">
                  Enterprise-grade bare metal infrastructure.
                </p>

              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">

                <Monitor
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  24/7 Monitoring
                </h3>

                <p className="text-gray-400 text-sm">
                  Continuous monitoring and proactive response.
                </p>

              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">

                <Shield
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  Security Managed
                </h3>

                <p className="text-gray-400 text-sm">
                  Hardening, patching and protection included.
                </p>

              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">

                <CheckCircle
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  Expert Support
                </h3>

                <p className="text-gray-400 text-sm">
                  Experienced engineers available when needed.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}