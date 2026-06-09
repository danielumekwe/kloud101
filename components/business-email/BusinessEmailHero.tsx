import Link from "next/link";
import Image from "next/image";

export default function BusinessEmailHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-500 font-semibold uppercase tracking-wider">
              Business Email Hosting
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mt-4 mb-8">
              Professional Email
              For Modern Businesses
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              Build trust and credibility with professional email
              addresses using your own domain name.
              Secure, reliable and accessible from anywhere.
            </p>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-xl mb-8">

              <div className="flex items-end gap-3 mb-6">

                <span className="text-gray-400">
                  Starting at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  $1.99
                </span>

                <span className="text-gray-400 mb-2">
                  /month
                </span>

              </div>

              <div className="flex gap-4 flex-wrap">

                <Link
                  href="#plans"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Get Business Email
                </Link>

                <Link
                  href="#plans"
                  className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Compare Plans
                </Link>

              </div>

            </div>

          </div>

          <div className="flex justify-center">

            <Image
              src="/services/business-email-hero.png"
              alt="Business Email"
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