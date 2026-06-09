import { Check, X } from "lucide-react";

export default function ManagedDedicatedComparison() {
  const rows = [
    {
      feature: "cPanel & WHM Included",
      dedicated: false,
      managed: true,
    },
    {
      feature: "24/7 Server Monitoring",
      dedicated: false,
      managed: true,
    },
    {
      feature: "Security Hardening",
      dedicated: false,
      managed: true,
    },
    {
      feature: "Operating System Updates",
      dedicated: false,
      managed: true,
    },
    {
      feature: "Automated Backups",
      dedicated: false,
      managed: true,
    },
    {
      feature: "Performance Optimization",
      dedicated: false,
      managed: true,
    },
    {
      feature: "Database Management",
      dedicated: false,
      managed: true,
    },
    {
      feature: "Expert Technical Support",
      dedicated: false,
      managed: true,
    },
    {
      feature: "Root Access",
      dedicated: true,
      managed: true,
    },
    {
      feature: "Dedicated Hardware",
      dedicated: true,
      managed: true,
    },
  ];

  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Compare Solutions
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Dedicated vs Managed Dedicated
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            See why businesses choose Managed Dedicated Servers
            to eliminate server administration and focus on growth.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800">

          {/* Header */}

          <div className="grid grid-cols-3 bg-black">

            <div className="p-6 font-bold text-xl">
              Features
            </div>

            <div className="p-6 text-center border-l border-slate-800">

              <h3 className="text-xl font-bold">
                Dedicated Server
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Self Managed
              </p>

            </div>

            <div className="p-6 text-center border-l border-slate-800 bg-blue-950/30">

              <h3 className="text-xl font-bold text-blue-400">
                Managed Dedicated
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Fully Managed
              </p>

            </div>

          </div>

          {/* Rows */}

          {rows.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 border-t border-slate-800"
            >
              <div className="p-5">
                {row.feature}
              </div>

              <div className="flex items-center justify-center border-l border-slate-800">

                {row.dedicated ? (
                  <Check className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}

              </div>

              <div className="flex items-center justify-center border-l border-slate-800 bg-blue-950/10">

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