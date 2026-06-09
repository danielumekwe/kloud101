import {
  Network,
  Server,
  Users,
  Star,
} from "lucide-react";

const items = [
  {
    title: "Our Network",
    description:
      "Built on reliable infrastructure designed for speed, redundancy and performance.",
    icon: Network,
  },
  {
    title: "Our Datacenter",
    description:
      "Enterprise-grade facilities with secure environments and high availability.",
    icon: Server,
  },
  {
    title: "Our Team",
    description:
      "Dedicated professionals focused on delivering outstanding customer experiences.",
    icon: Users,
  },
  {
    title: "Customer Reviews",
    description:
      "Trusted by businesses, agencies and developers across multiple industries.",
    icon: Star,
  },
];

export default function AboutHighlights() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="bg-black border border-slate-800 rounded-2xl p-8"
            >
              <item.icon
                size={40}
                className="text-blue-500 mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {item.description}
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition">
                Learn More
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}