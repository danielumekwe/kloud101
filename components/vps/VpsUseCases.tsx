import {
  Globe,
  Monitor,
  Database,
  Code,
  HardDrive,
  Headset,
} from "lucide-react";

const useCases = [
  {
    title: "WordPress & PHP VPS",
    description:
      "Deploy WordPress, Laravel, PHP applications and CMS platforms without rebuilding your stack.",
    icon: Globe,
  },
  {
    title: "Windows VPS",
    description:
      "Run Windows Server workloads with Remote Desktop access and enterprise reliability.",
    icon: Monitor,
  },
  {
    title: "Remote Backups",
    description:
      "Protect files, databases and applications with secure backup storage.",
    icon: HardDrive,
  },
  {
    title: "Development Environments",
    description:
      "Host Node.js, Python, PHP, Java, Docker and development workloads on isolated infrastructure.",
    icon: Code,
  },
  {
    title: "Database Servers",
    description:
      "Run MySQL, MariaDB, PostgreSQL, MongoDB and Redis databases with dedicated resources.",
    icon: Database,
  },
  {
    title: "Managed Support",
    description:
      "Get expert assistance with server configuration, monitoring and troubleshooting.",
    icon: Headset,
  },
];

export default function VpsUseCases() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Common Workloads
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6 max-w-5xl mx-auto">
            Run Linux, Windows, databases,
            web apps, and control panels on
            your own virtual server.
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Cloud VPS is ideal when you need complete control over
            applications, operating systems and resource allocation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {useCases.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-blue-500 transition"
            >
              <item.icon
                size={42}
                className="text-blue-500 mb-6"
              />

              <h3 className="text-3xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}