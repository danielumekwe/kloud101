import {
  Target,
  Eye,
  Gem,
} from "lucide-react";

const items = [
  {
    title: "Our Mission",
    description:
      "To provide reliable, secure and affordable cloud infrastructure that empowers businesses, developers and entrepreneurs to grow online.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become a trusted global cloud provider known for innovation, exceptional support and dependable infrastructure.",
    icon: Eye,
  },
  {
    title: "Core Values",
    description:
      "Integrity, reliability, customer success, innovation and continuous improvement drive everything we do.",
    icon: Gem,
  },
];

export default function AboutMission() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            What Drives Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Mission, Vision & Values
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-8"
            >
              <item.icon
                size={40}
                className="text-blue-500 mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}