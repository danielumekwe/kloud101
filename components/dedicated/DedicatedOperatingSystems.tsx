import {
  SiUbuntu,
  SiDebian,
  SiRockylinux,
  SiAlmalinux,
} from "react-icons/si";

import { Monitor } from "lucide-react";

const systems = [
  {
    name: "Ubuntu",
    icon: SiUbuntu,
  },
  {
    name: "Debian",
    icon: SiDebian,
  },
  {
    name: "Rocky Linux",
    icon: SiRockylinux,
  },
  {
    name: "AlmaLinux",
    icon: SiAlmalinux,
  },
  {
    name: "Windows Server",
    icon: Monitor,
  },
];

export default function DedicatedOperatingSystems() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Supported Operating Systems
          </h2>

          <p className="text-gray-400">
            Install your preferred operating system.
          </p>

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

          {systems.map((system) => (
            <div
              key={system.name}
              className="border border-slate-800 rounded-2xl p-8 bg-slate-950 text-center"
            >
              <system.icon
                size={48}
                className="mx-auto text-blue-500 mb-4"
              />

              <h3>{system.name}</h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}