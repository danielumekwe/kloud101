import Link from "next/link";
import {
  Server,
  Cpu,
  Mail,
  Shield,
  Cloud,
} from "lucide-react";

const services = [
  {
    title: "Managed VPS",
    icon: Server,
  },
  {
    title: "Managed Dedicated",
    icon: Cpu,
  },
  {
    title: "Business Email",
    icon: Mail,
  },
  {
    title: "Cloud Hosting",
    icon: Cloud,
  },
  {
    title: "Backup & Security",
    icon: Shield,
  },
];

export default function HomeCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50">

      {/* Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-[0.3em] text-sm font-semibold">
            Get Started Today
          </span>

          <h2 className="text-5xl lg:text-7xl font-bold mt-6 mb-8">
            Ready To Power
            <br />
            Your Business?
          </h2>

          <p className="text-slate-700 text-xl max-w-3xl mx-auto mb-16">
            Everything you need to launch, manage and scale online —
            backed by reliable infrastructure, expert support and
            enterprise-grade technology.
          </p>

          {/* Services */}

          <div className="flex flex-wrap justify-center gap-4 mb-16">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex items-center gap-3 px-5 py-3 bg-white/40 border border-slate-200 rounded-full"
                >
                  <Icon
                    size={18}
                    className="text-blue-500"
                  />

                  <span className="text-slate-700">
                    {service.title}
                  </span>
                </div>
              );
            })}

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="https://my.kloud101.com/register"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition"
            >
              Get Started
            </Link>

            <Link
              href="/contact"
              className="px-10 py-5 border border-slate-300 hover:border-blue-500 rounded-xl font-semibold text-lg transition"
            >
              Contact Sales
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}