import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24 lg:py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 text-blue-600 mb-8">
              About Kloud101
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Building reliable
              cloud infrastructure
            
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              Kloud101 delivers cloud VPS hosting, dedicated servers,
              web hosting, email hosting and enterprise infrastructure
              solutions designed for developers, agencies and businesses
              that demand performance and reliability.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
              >
                Contact Us
              </Link>

              <Link
                href="/vps"
                className="border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold transition"
              >
                Explore Services
              </Link>

            </div>

          </div>

          {/* Right Content */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <Image
                src="/about/about-hero.png"
                alt="Kloud101 Infrastructure"
                width={700}
                height={700}
                priority
                className="object-contain"
              />

              <div className="absolute top-10 left-0 bg-white/90 backdrop-blur border border-slate-200 rounded-xl px-5 py-4">

                <div className="text-sm text-slate-600">
                  Uptime
                </div>

                <div className="text-xl font-bold">
                  99.99%
                </div>

              </div>

              <div className="absolute bottom-10 right-0 bg-white/90 backdrop-blur border border-slate-200 rounded-xl px-5 py-4">

                <div className="text-sm text-slate-600">
                  Support
                </div>

                <div className="text-xl font-bold">
                  24/7
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}