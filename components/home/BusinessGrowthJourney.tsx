import {
  Globe,
  Mail,
  Monitor,
  Shield,
  Server,
  TrendingUp,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    title: "Register Your Domain",
    description:
      "Secure your online identity with the perfect domain name.",
    icon: Globe,
  },
  {
    title: "Create Business Email",
    description:
      "Build trust with professional email addresses on your domain.",
    icon: Mail,
  },
  {
    title: "Launch Your Website",
    description:
      "Get online quickly with reliable cloud hosting solutions.",
    icon: Monitor,
  },
  {
    title: "Protect Your Business",
    description:
      "Safeguard your data with backups, security and monitoring.",
    icon: Shield,
  },
  {
    title: "Scale Infrastructure",
    description:
      "Upgrade to managed VPS or dedicated servers as you grow.",
    icon: Server,
  },
  {
    title: "Accelerate Growth",
    description:
      "Focus on growing your business while we manage the technology.",
    icon: TrendingUp,
  },
];

export default function BusinessGrowthJourney() {
  return (
    <section className="py-32 bg-white dark:bg-black">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-blue-500 uppercase tracking-[0.3em] text-sm font-semibold">
            Business Growth Journey
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mt-6 mb-6">
            Everything Your Business Needs
            <br />
            To Succeed Online
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl mx-auto">
            From your first domain name to enterprise infrastructure,
            Kloud101 provides every tool needed to launch, protect and
            scale your business online.
          </p>

        </div>

        <div className="space-y-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>

                <div className="flex gap-6 items-start">

                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">

                    <Icon
                      size={30}
                      className="text-blue-500"
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      {step.description}
                    </p>

                  </div>

                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center py-6">

                    <ArrowDown
                      size={28}
                      className="text-blue-500"
                    />

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}