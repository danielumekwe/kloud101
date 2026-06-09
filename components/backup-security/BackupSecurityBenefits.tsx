import {
  ShieldCheck,
  Clock,
  Lock,
  FileCheck,
  RotateCcw,
  Building2,
} from "lucide-react";

const benefits = [
  {
    title: "Prevent Data Loss",
    description:
      "Keep your business data safe with automated backups and secure storage.",
    icon: ShieldCheck,
  },
  {
    title: "Reduce Downtime",
    description:
      "Quick recovery tools help restore services and minimize interruptions.",
    icon: Clock,
  },
  {
    title: "Protect Customer Data",
    description:
      "Secure sensitive customer information with advanced protection measures.",
    icon: Lock,
  },
  {
    title: "Improve Compliance",
    description:
      "Meet industry standards and regulatory requirements with reliable backups.",
    icon: FileCheck,
  },
  {
    title: "Recover Faster",
    description:
      "Restore websites, databases and files quickly when issues occur.",
    icon: RotateCcw,
  },
  {
    title: "Business Continuity",
    description:
      "Keep operations running smoothly even during unexpected disruptions.",
    icon: Building2,
  },
];

export default function BackupSecurityBenefits() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Business Benefits
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Why Backup & Security Matters
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Protect your business from data loss, cyber threats and
            unexpected downtime with enterprise-grade backup solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
            >
              <benefit.icon
                size={42}
                className="text-blue-500 mb-5"
              />

              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}