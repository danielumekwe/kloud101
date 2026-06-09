import {
  Shield,
  Monitor,
  HardDrive,
  Settings,
  Lock,
  LifeBuoy,
  Gauge,
  Database,
} from "lucide-react";

const features = [
  {
    title: "cPanel & WHM Included",
    description:
      "Full control of websites, email accounts, DNS and server administration.",
    icon: Settings,
  },
  {
    title: "24/7 Monitoring",
    description:
      "Continuous monitoring of hardware, services and network performance.",
    icon: Monitor,
  },
  {
    title: "Security Hardening",
    description:
      "Firewall configuration, malware protection and security best practices.",
    icon: Shield,
  },
  {
    title: "Daily Backups",
    description:
      "Automated backups to protect your business-critical data.",
    icon: HardDrive,
  },
  {
    title: "OS Updates",
    description:
      "Operating system updates and security patch management.",
    icon: Lock,
  },
  {
    title: "Performance Optimization",
    description:
      "Server tuning and resource optimization for maximum performance.",
    icon: Gauge,
  },
  {
    title: "Database Management",
    description:
      "MySQL and MariaDB administration and optimization.",
    icon: Database,
  },
  {
    title: "Expert Support",
    description:
      "Dedicated technical assistance from experienced engineers.",
    icon: LifeBuoy,
  },
];

export default function ManagedDedicatedFeatures() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            What's Included
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Fully Managed Dedicated Services
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Focus on growing your business while our experts
            manage your dedicated server infrastructure.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black border border-slate-800 rounded-2xl p-6"
            >
              <feature.icon
                size={40}
                className="text-blue-500 mb-4"
              />

              <h3 className="text-lg font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}