import {
  Shield,
  Rocket,
  Headphones,
  RefreshCcw,
  Server,
  HardDrive,
} from "lucide-react";

const features = [
  {
    title: "99.99% Uptime Guarantee",
    description:
      "Enterprise-grade infrastructure designed for maximum uptime and reliability.",
    icon: Shield,
  },
  {
    title: "Ultra-Fast NVMe SSD",
    description:
      "Experience blazing-fast performance with premium NVMe SSD storage.",
    icon: Rocket,
  },
  {
    title: "24/7 Expert Support",
    description:
      "Our support engineers are available around the clock to assist you.",
    icon: Headphones,
  },
  {
    title: "Free Website Migration",
    description:
      "Move your websites and applications to Kloud101 at no extra cost.",
    icon: RefreshCcw,
  },
  {
    title: "Enterprise Hardware",
    description:
      "Powered by modern server hardware for consistent performance.",
    icon: Server,
  },
  {
    title: "Instant Provisioning",
    description:
      "Deploy VPS and dedicated servers within minutes.",
    icon: HardDrive,
  },
];

export default function PowerfulFeatures() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Powerful Features
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            Everything you need to launch, secure and scale your infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition-all"
              >
                <div className="mb-6">
                  <Icon
                    size={64}
                    strokeWidth={1.5}
                    className="text-blue-500"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
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