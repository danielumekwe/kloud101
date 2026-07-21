import Link from "next/link";
import {
  Mail,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

export default function BusinessEmailCta() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 to-slate-950 p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-blue-500 uppercase tracking-wider font-semibold">
                Business Email
              </span>

              <h2 className="text-5xl font-bold mt-4 mb-6">
                Ready To Upgrade
                Your Business Email?
              </h2>

              <p className="text-gray-400 text-lg mb-8">
                Build trust, improve communication and give your business
                a professional image with branded email addresses.
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
                  className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Contact Sales
                </Link>

              </div>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-black border border-slate-800 rounded-2xl p-6">
                <Mail size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">
                  Professional Email
                </h3>
                <p className="text-gray-400 text-sm">
                  Use your own business domain.
                </p>
              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">
                <Shield size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">
                  Secure Communication
                </h3>
                <p className="text-gray-400 text-sm">
                  Advanced protection against threats.
                </p>
              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">
                <Smartphone size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">
                  Mobile Access
                </h3>
                <p className="text-gray-400 text-sm">
                  Access email from anywhere.
                </p>
              </div>

              <div className="bg-black border border-slate-800 rounded-2xl p-6">
                <Users size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">
                  Team Collaboration
                </h3>
                <p className="text-gray-400 text-sm">
                  Grow and collaborate efficiently.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}