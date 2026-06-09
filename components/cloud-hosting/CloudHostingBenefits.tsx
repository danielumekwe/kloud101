import {
  Shield,
  HardDrive,
  Globe,
  Zap,
  Cloud,
  Lock,
  RefreshCw,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    title: "High Availability",
    description:
      "Built on reliable cloud infrastructure designed for maximum uptime.",
    icon: Cloud,
  },
  {
    title: "NVMe SSD Storage",
    description:
      "Ultra-fast NVMe storage for faster website and application performance.",
    icon: HardDrive,
  },
  {
    title: "Automatic Daily Backups",
    description:
      "Protect your data with automated backups and recovery options.",
    icon: RefreshCw,
  },
  {
    title: "DDoS Protection",
    description:
      "Enterprise-grade protection against malicious attacks and threats.",
    icon: Shield,
  },
  {
    title: "Free SSL Certificates",
    description:
      "Secure your websites and applications with free SSL encryption.",
    icon: Lock,
  },
  {
    title: "Instant Scalability",
    description:
      "Scale resources as your business grows without downtime.",
    icon: Zap,
  },
  {
    title: "Global Infrastructure",
    description:
      "Deliver content faster through strategically located infrastructure.",
    icon: Globe,
  },
  {
    title: "24/7 Expert Support",
    description:
      "Our technical team is available whenever you need assistance.",
    icon: Headphones,
  },
];

export default function CloudHostingBenefits() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Why Choose Cloud Hosting
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Enterprise Features Built In
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Everything you need to host websites, applications and
            business workloads on a modern cloud platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-black border border-slate-800 rounded-2xl p-6"
            >
              <benefit.icon
                size={40}
                className="text-blue-500 mb-4"
              />

              <h3 className="text-lg font-semibold mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}