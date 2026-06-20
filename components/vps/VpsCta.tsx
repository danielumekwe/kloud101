import Link from "next/link";

export default function VpsCta() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 to-slate-950 p-12 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Deploy Your VPS?
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Launch your cloud server in under 60 seconds with
            enterprise-grade performance, NVMe SSD storage and
            full root access.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://my.kloud101.com/vps/order/linux-vps"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
            >
              Deploy VPS
            </a>

            <Link
              href="/contact"
              className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold"
            >
              Contact Sales
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}