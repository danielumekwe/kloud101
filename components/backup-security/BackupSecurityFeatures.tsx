import {
  Database,
  Shield,
  BarChart3,
  RefreshCw,
  Lock,
  Server,
  RotateCcw,
  Bell,
} from "lucide-react";

const features = [
  {
    title: "Automated Backups",
    description:
      "Scheduled backups ensure your data is protected without manual intervention.",
    icon: Database,
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Continuous monitoring helps detect issues before they impact your business.",
    icon: BarChart3,
  },
  {
    title: "Malware Protection",
    description:
      "Advanced malware scanning keeps your websites and applications secure.",
    icon: Shield,
  },
  {
    title: "Ransomware Recovery",
    description:
      "Recover critical files quickly with secure backup restoration options.",
    icon: RefreshCw,
  },
  {
    title: "DDoS Protection",
    description:
      "Protect your infrastructure from malicious traffic and attacks.",
    icon: Lock,
  },
  {
    title: "Disaster Recovery",
    description:
      "Ensure business continuity with reliable disaster recovery solutions.",
    icon: Server,
  },
  {
    title: "File Restoration",
    description:
      "Restore files, databases and websites with just a few clicks.",
    icon: RotateCcw,
  },
  {
    title: "Security Alerts",
    description:
      "Receive instant notifications when suspicious activity is detected.",
    icon: Bell,
  },
];

export default function BackupSecurityFeatures() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          
          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Security Features
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Comprehensive Protection
            For Your Business
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            Secure your websites, applications and business data
            with enterprise-grade backup and security solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition"
              >
                <Icon
                  size={42}
                  className="text-blue-500 mb-4"
                />

                <h3 className="text-lg font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}