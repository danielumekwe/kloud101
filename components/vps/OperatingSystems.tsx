import {
  SiUbuntu,
  SiDebian,
  SiFedora,
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
    name: "Fedora",
    icon: SiFedora,
  },
  {
  name: "Windows Server",
  icon: Monitor,
},
];

export default function OperatingSystems() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Supported Operating Systems
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Deploy your preferred operating system with instant provisioning.
          </p>

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

          {systems.map((system) => (
            <div
              key={system.name}
              className="bg-blue-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-blue-500 transition"
            >
              <system.icon
                size={52}
                className="text-blue-500 mb-4"
              />

              <h3 className="font-semibold text-center">
                {system.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}