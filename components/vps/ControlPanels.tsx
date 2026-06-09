import {
  Server,
  Shield,
  Globe,
  Settings,
  LayoutDashboard,
} from "lucide-react";

const panels = [
  {
    title: "cPanel",
    description:
      "Industry-leading hosting control panel for managing websites, email and databases.",
    icon: LayoutDashboard,
  },
  {
    title: "DirectAdmin",
    description:
      "Lightweight and affordable control panel with powerful hosting features.",
    icon: Settings,
  },
  {
    title: "Plesk",
    description:
      "Perfect for Windows and Linux server management with a modern interface.",
    icon: Globe,
  },
  {
    title: "CyberPanel",
    description:
      "High-performance OpenLiteSpeed panel with WordPress optimization.",
    icon: Shield,
  },
  {
    title: "Webmin",
    description:
      "Advanced Linux server administration through a web-based interface.",
    icon: Server,
  },
];

export default function ControlPanels() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Control Panel Options
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Manage websites, databases, email accounts and server resources
            using your preferred control panel.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {panels.map((panel) => (
            <div
              key={panel.title}
              className="bg-black border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <panel.icon
                size={42}
                className="text-blue-500 mb-6"
              />

              <h3 className="text-2xl font-semibold mb-4">
                {panel.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {panel.description}
              </p>

              <button className="text-blue-500 font-medium">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}