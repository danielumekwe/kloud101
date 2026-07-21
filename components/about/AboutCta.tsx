import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-r from-blue-900 to-slate-900 border border-slate-700 rounded-3xl p-12 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Build With Kloud101?
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Whether you're launching a website, deploying cloud servers,
            or scaling enterprise workloads, our infrastructure is ready
            for your next project.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="https://my.kloud101.com/register"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

            <Link
              href="/contact"
              className="border border-slate-600 hover:border-slate-400 px-8 py-4 rounded-xl font-semibold transition"
            >
              Contact Sales
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}