import Link from "next/link";
import Image from "next/image";
import { LifeBuoy, Gauge, Globe2, Star, ArrowRight } from "lucide-react";

const links = [
  { label: "Contact Support", href: "/contact", icon: LifeBuoy },
  { label: "Speed Test", href: "/speed-test", icon: Gauge },
  { label: "Data Centers", href: "/data-centers", icon: Globe2 },
  { label: "Reviews", href: "/reviews", icon: Star },
];

export default function SupportResources() {
  return (
    <section className="py-20 md:py-28 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">
          <span className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Get The Most From Kloud101
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-5 mb-5 leading-tight">
            Useful Resources After You Choose A Plan
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Reach the support team, check where our infrastructure lives,
            or see what's guaranteed before you commit to a plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-blue-50/40 px-6 py-5 transition-colors duration-200 hover:border-blue-500 hover:bg-blue-50"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition-colors duration-200 group-hover:bg-blue-500/20">
                      <Icon size={20} />
                    </span>
                    <span className="font-semibold text-slate-900">
                      {item.label}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600"
                  />
                </Link>
              );
            })}
          </div>

          {/* Feature Card */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-10">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent_55%)]" />

            <div className="relative grid sm:grid-cols-2 gap-8 items-center h-full">

              <div className="relative aspect-square w-full max-w-[220px] mx-auto sm:mx-0">
                <Image
                  src="/services/vps-hero.png"
                  alt="Kloud101 infrastructure"
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-snug">
                  Support That Scales With You.
                </h3>

                <p className="text-slate-700 leading-relaxed mb-8">
                  Kloud101 pairs managed VPS, dedicated servers and business
                  email in one account, backed by engineers who step in the
                  moment your workload outgrows the plan it started on.
                </p>

                <Link
                  href="/contact"
                  className="inline-block px-7 py-3.5 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-white text-sm transition-colors duration-200"
                >
                  Contact Sales
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
