// components/dedicated/DedicatedUseCases.tsx

import {
  Globe,
  Database,
  Cpu,
  Server,
  Gamepad2,
  Building2,
} from "lucide-react";

const useCases = [
  {
    title: "High Traffic Websites",
    description:
      "Host large websites, ecommerce stores and applications with dedicated resources.",
    icon: Globe,
  },
  {
    title: "Virtualization",
    description:
      "Run multiple virtual machines and private cloud environments.",
    icon: Server,
  },
  {
    title: "Game Servers",
    description:
      "Deploy dedicated gaming environments with low latency and full control.",
    icon: Gamepad2,
  },
  {
    title: "Database Hosting",
    description:
      "Power MySQL, PostgreSQL, MongoDB and enterprise databases.",
    icon: Database,
  },
  {
    title: "AI & Compute Workloads",
    description:
      "Handle compute-intensive workloads and data processing tasks.",
    icon: Cpu,
  },
  {
    title: "Enterprise Applications",
    description:
      "Run ERP, CRM, SaaS and mission-critical business applications.",
    icon: Building2,
  },
];

export default function DedicatedUseCases() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Common Workloads
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6">
            What can you run on a
            dedicated server?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Dedicated servers provide isolated hardware resources
            for demanding applications and enterprise workloads.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {useCases.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <item.icon
                size={42}
                className="text-blue-500 mb-6"
              />

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}