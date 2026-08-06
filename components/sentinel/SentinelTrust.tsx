import { Globe, Server, Cloud, Building2 } from "lucide-react";

const audiences = [
  { icon: Globe, label: "WordPress Websites" },
  { icon: Server, label: "Hosting Providers" },
  { icon: Cloud, label: "Cloud Servers" },
  { icon: Building2, label: "Businesses" },
];

export default function SentinelTrust() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="text-blue-500 uppercase tracking-wider font-semibold">
          Built By Kloud101 Solutions
        </span>

        <h2 className="text-4xl font-bold mt-4 mb-14">
          Security For Every Part Of Your Business
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.label}
              className="flex flex-col items-center gap-4 bg-blue-50 border border-slate-200 rounded-2xl p-8"
            >
              <audience.icon className="h-9 w-9 text-blue-500" />
              <span className="font-semibold text-slate-800">
                {audience.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
