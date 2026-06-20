import Link from "next/link";
import {
  Server,
  ShieldCheck,
  Cloud,
  Mail,
  HardDrive,
  Cpu,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Managed VPS",
    description:
      "Fully managed VPS hosting with cPanel, monitoring, security updates and expert support.",
    icon: Server,
    link: "/managed-vps",
  },
  {
    title: "Managed Dedicated",
    description:
      "Enterprise dedicated servers fully managed by our infrastructure experts.",
    icon: Cpu,
    link: "/managed-dedicated",
  },
  {
    title: "Cloud Hosting",
    description:
      "Scalable cloud hosting built for business websites, applications and eCommerce.",
    icon: Cloud,
    link: "/cloud-hosting",
  },
  {
    title: "Business Email",
    description:
      "Professional business email hosting with advanced spam protection and collaboration tools.",
    icon: Mail,
    link: "/business-email",
  },
  {
    title: "Backup & Security",
    description:
      "Automated backups, disaster recovery and security solutions for critical business data.",
    icon: ShieldCheck,
    link: "/backup-security",
  },
  {
    title: "Dedicated Servers",
    description:
      "High-performance dedicated infrastructure for demanding workloads and applications.",
    icon: HardDrive,
    link: "/dedicated",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Cloud Services
          </span>

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-4">
            Infrastructure Built For Growth
          </h2>

          <p className="text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything your business needs to launch, grow and scale online —
            from managed infrastructure to business communication and security.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.link}
                className="group bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">

                  <Icon
                    size={30}
                    className="text-blue-500"
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex items-center text-blue-500 font-medium">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />

                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}