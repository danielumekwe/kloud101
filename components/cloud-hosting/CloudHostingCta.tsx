import Link from "next/link";
import {
  Cloud,
  Shield,
  HardDrive,
  Headphones,
} from "lucide-react";

export default function CloudHostingCta() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-50 to-white p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="text-blue-500 uppercase tracking-wider font-semibold">
                Cloud Hosting
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-6">
                Ready To Move
                Your Business
                To The Cloud?
              </h2>

              <p className="text-slate-600 text-lg mb-8">
                Launch websites, applications and online businesses
                on reliable cloud infrastructure built for speed,
                security and scalability.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="https://my.kloud101.com/register"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Get Started
                </Link>

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

                <Cloud
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  High Availability
                </h3>

                <p className="text-slate-600 text-sm">
                  Reliable infrastructure designed for uptime.
                </p>

              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">

                <HardDrive
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  Daily Backups
                </h3>

                <p className="text-slate-600 text-sm">
                  Protect your data with automated backups.
                </p>

              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">

                <Shield
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  Free SSL Security
                </h3>

                <p className="text-slate-600 text-sm">
                  Secure websites and applications.
                </p>

              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">

                <Headphones
                  size={40}
                  className="text-blue-500 mb-4"
                />

                <h3 className="font-semibold mb-2">
                  24/7 Support
                </h3>

                <p className="text-slate-600 text-sm">
                  Expert assistance whenever needed.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}