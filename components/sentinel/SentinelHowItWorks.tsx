import { Download, ScanSearch, ShieldAlert, BellRing } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Install Sentinel Agent",
    description:
      "Add the KloudSentinel plugin to WordPress, WHM or your cloud server in minutes.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Scan Your Environment",
    description:
      "KloudSentinel scans files, plugins, configurations and server activity for risk.",
  },
  {
    number: "03",
    icon: ShieldAlert,
    title: "Detect Security Threats",
    description:
      "AI-powered analysis flags malware, backdoors and unauthorized changes in real time.",
  },
  {
    number: "04",
    icon: BellRing,
    title: "Receive Alerts & Protection",
    description:
      "Get instant alerts and guided remediation so threats are handled before they spread.",
  },
];

export default function SentinelHowItWorks() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            How It Works
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Protection Up And Running In Minutes
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            A simple, four-step process to bring continuous security
            monitoring to your website, server or cloud infrastructure.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <span className="text-4xl font-bold text-blue-100">
                {step.number}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 mt-4 mb-5">
                <step.icon className="h-6 w-6 text-blue-600" />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
