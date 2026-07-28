import {
  Shield,
  Monitor,
  Database,
  Settings,
  HardDrive,
  LifeBuoy,
  Lock,
  Gauge,
} from "lucide-react";

const features = [
  {
    title: "cPanel & WHM Included",
    description:
      "Manage websites, email accounts, databases and hosting resources easily.",
    icon: Settings,
  },
  {
    title: "24/7 Monitoring",
    description:
      "Continuous monitoring of your VPS infrastructure and services.",
    icon: Monitor,
  },
  {
    title: "Security Hardening",
    description:
      "Firewall configuration, malware protection and proactive security measures.",
    icon: Shield,
  },
  {
    title: "Daily Backups",
    description:
      "Automated backups to help protect your data and business continuity.",
    icon: HardDrive,
  },
  {
    title: "OS Updates & Patching",
    description:
      "We handle operating system updates and security patches for you.",
    icon: Lock,
  },
  {
    title: "Performance Optimization",
    description:
      "Server tuning and optimization for improved website performance.",
    icon: Gauge,
  },
  {
    title: "Database Management",
    description:
      "Support for MySQL, MariaDB and database performance optimization.",
    icon: Database,
  },
  {
    title: "Expert Technical Support",
    description:
      "Access to experienced technicians whenever you need assistance.",
    icon: LifeBuoy,
  },
];

export default function ManagedVpsFeatures() {
  return (
    <section className="py-24 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            What's Included
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Fully Managed VPS Services
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            Focus on your business while we handle the server
            administration, maintenance and security.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-slate-200 rounded-2xl p-6"
            >
              <feature.icon
                size={40}
                className="text-blue-500 mb-4"
              />

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}