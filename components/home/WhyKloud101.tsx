import Link from "next/link";
import Image from "next/image";

export default function WhyKloud101() {
  return (
    <section className="relative py-28 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div className="relative w-full aspect-square">

            <Image
              src="/images/why-kloud101.png"
              alt="Why Kloud101"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />

          </div>

          {/* Right Side */}

          <div>

            <span className="text-blue-600 uppercase tracking-[0.25em] font-semibold">
              Why Kloud101
            </span>

            <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-4 leading-tight">
              Built For Businesses.
              <br />
              Powered By Reliable Infrastructure.
            </h2>

            <p className="text-blue-200 text-xl mb-10">
              Helping businesses launch, grow and scale with confidence.
            </p>

            <div className="border-l-4 border-blue-500 pl-8 space-y-8">

              <p className="text-slate-700 text-lg leading-relaxed">
                At Kloud101, we believe technology should empower
                businesses, not complicate them. That's why we've built
                a cloud platform focused on reliability, security and
                simplicity.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                From managed VPS hosting and dedicated servers to
                business email and backup solutions, our services are
                designed to remove the complexity of managing
                infrastructure while giving you the performance and
                flexibility your business deserves.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                Whether you're launching a startup, running an agency,
                managing an eCommerce platform or scaling an enterprise,
                Kloud101 provides the tools, support and infrastructure
                needed to help you succeed online.
              </p>

            </div>

            <div className="flex flex-wrap gap-4 mt-12">

              <Link
                href="/about"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
              >
                Learn More About Us
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 border border-slate-300 hover:border-blue-500 rounded-xl font-semibold transition"
              >
                Contact Sales
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}