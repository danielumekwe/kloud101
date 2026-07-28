import Link from "next/link";

export default function DedicatedCta() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-50 to-white p-12 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Deploy Your Dedicated Server?
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Enterprise-grade hardware, dedicated resources,
            NVMe storage and complete control.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://my.kloud101.com/"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
            >
              Deploy Server
            </a>

            <Link
              href="/contact"
              className="border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold"
            >
              Contact Sales
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}