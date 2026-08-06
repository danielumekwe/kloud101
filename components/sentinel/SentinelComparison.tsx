import { Check, X, ShieldOff, ShieldCheck } from "lucide-react";

const traditional = [
  "Detect threats after infection",
  "Limited visibility into files and changes",
  "Manual cleanup and recovery",
];

const sentinel = [
  "Continuous monitoring around the clock",
  "Early threat detection before damage occurs",
  "Automated response to suspicious activity",
  "Central security intelligence across every asset",
];

export default function SentinelComparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Why KloudSentinel
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Security That Gets Ahead Of Threats
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            Traditional security tools react after the damage is done.
            KloudSentinel is built to catch threats before they spread.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <div className="flex items-center gap-3 mb-8">
              <ShieldOff className="h-8 w-8 text-slate-400" />
              <h3 className="text-2xl font-bold text-slate-500">
                Traditional Security Tools
              </h3>
            </div>

            <div className="space-y-4">
              {traditional.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <X className="h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-slate-600">{item}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="rounded-3xl border border-blue-500 bg-blue-50 p-8">

            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-600">
                KloudSentinel
              </h3>
            </div>

            <div className="space-y-4">
              {sentinel.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
