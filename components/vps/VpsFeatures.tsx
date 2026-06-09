import {
  Shield,
  Database,
  Globe,
  Server,
  Lock,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Full Root Access",
    description:
      "Complete control over your VPS environment and software stack.",
    icon: Server,
  },
  {
    title: "Managed Support",
    description:
      "24/7 technical support from experienced infrastructure engineers.",
    icon: Headphones,
  },
  {
    title: "Automatic Backups",
    description:
      "Protect your workloads with scheduled backup options.",
    icon: Database,
  },
  {
    title: "DDoS Protection",
    description:
      "Enterprise-grade protection against network attacks.",
    icon: Shield,
  },
  {
    title: "Global Datacenters",
    description:
      "Deploy closer to your customers for lower latency.",
    icon: Globe,
  },
  {
    title: "Security Isolation",
    description:
      "Dedicated resources and isolated virtualization.",
    icon: Lock,
  },
];

export default function VpsFeatures() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Why Choose Kloud101 VPS
          </h2>

          <p className="text-gray-400">
            Enterprise-grade infrastructure designed for performance.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-slate-800 rounded-2xl p-8 bg-slate-950"
            >
              <feature.icon
                className="text-blue-500 mb-6"
                size={40}
              />

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}