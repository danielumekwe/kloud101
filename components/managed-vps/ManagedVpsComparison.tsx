import { Check, X } from "lucide-react";

export default function ManagedVpsComparison() {
  const rows = [
    {
      feature: "cPanel Included",
      linux: false,
      managed: true,
    },
    {
      feature: "Server Monitoring",
      linux: false,
      managed: true,
    },
    {
      feature: "Security Hardening",
      linux: false,
      managed: true,
    },
    {
      feature: "Operating System Updates",
      linux: false,
      managed: true,
    },
    {
      feature: "Automated Backups",
      linux: false,
      managed: true,
    },
    {
      feature: "Performance Optimization",
      linux: false,
      managed: true,
    },
    {
      feature: "Expert Technical Support",
      linux: false,
      managed: true,
    },
    {
      feature: "Root Access",
      linux: true,
      managed: true,
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Compare Services
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Linux VPS vs Managed VPS
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            See why businesses choose Managed VPS hosting for
            convenience, security and peace of mind.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200">

          <div className="grid grid-cols-3 bg-blue-50">

            <div className="p-6 font-bold text-xl">
              Features
            </div>

            <div className="p-6 text-center border-l border-slate-200">

              <h3 className="text-xl font-bold">
                Linux VPS
              </h3>

              <p className="text-slate-600 text-sm mt-2">
                Self Managed
              </p>

            </div>

            <div className="p-6 text-center border-l border-slate-200 bg-blue-50/30">

              <h3 className="text-xl font-bold text-blue-600">
                Managed VPS
              </h3>

              <p className="text-slate-600 text-sm mt-2">
                Fully Managed
              </p>

            </div>

          </div>

          {rows.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 border-t border-slate-200"
            >

              <div className="p-5">
                {row.feature}
              </div>

              <div className="flex justify-center items-center border-l border-slate-200">

                {row.linux ? (
                  <Check className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}

              </div>

              <div className="flex justify-center items-center border-l border-slate-200 bg-blue-50/10">

                {row.managed ? (
                  <Check className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}