import Link from "next/link";
import {
  Server,
  Monitor,
  Settings,
  HardDrive,
  Mail,
  Cloud,
  Shield,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Linux VPS",
    description:
      "Reliable Linux virtual private servers with instant provisioning, full root access and NVMe SSD storage.",
    href: "/vps",
    icon: Server,
  },
  {
    title: "Windows VPS",
    description:
      "Windows Server VPS with full administrator access, Remote Desktop connectivity and scalable resources.",
    href: "/vps/windows",
    icon: Monitor,
  },
  {
    title: "Managed VPS",
    description:
      "Fully managed VPS hosting with cPanel, expert administration, monitoring, backups and support included.",
    href: "/managed-vps",
    icon: Settings,
  },
  {
    title: "Dedicated Servers",
    description:
      "Enterprise-grade bare metal servers with full hardware resources, NVMe SSD storage and complete control.",
    href: "/dedicated",
    icon: HardDrive,
  },
  {
    title: "Private Email",
    description:
      "Professional business email hosting on your own domain name — secure, reliable and accessible anywhere.",
    href: "/business-email",
    icon: Mail,
  },
  {
    title: "Web Hosting",
    description:
      "Fast, reliable cloud hosting for websites and applications, with high availability and daily backups.",
    href: "/cloud-hosting",
    icon: Cloud,
  },
  {
    title: "DDoS Protection",
    description:
      "Automated backups, DDoS protection, SSL and disaster recovery designed to keep your services online.",
    href: "/backup-security",
    icon: Shield,
  },
];

export default function PricingServices() {
  return (
    <section className="py-16 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold text-white transition"
                >
                  View Plans
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
