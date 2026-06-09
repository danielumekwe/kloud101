import {
  Globe,
  ShoppingCart,
  Code,
  Briefcase,
  FileText,
  Rocket,
} from "lucide-react";

const useCases = [
  {
    title: "Business Websites",
    description:
      "Professional websites for businesses that require speed, reliability and uptime.",
    icon: Globe,
  },
  {
    title: "E-Commerce Stores",
    description:
      "Host WooCommerce and online stores with high performance and security.",
    icon: ShoppingCart,
  },
  {
    title: "Web Applications",
    description:
      "Deploy custom applications and SaaS platforms on scalable cloud infrastructure.",
    icon: Code,
  },
  {
    title: "Agency Hosting",
    description:
      "Manage multiple client websites from a reliable cloud platform.",
    icon: Briefcase,
  },
  {
    title: "Blogs & Publishers",
    description:
      "Handle growing traffic and content delivery with ease.",
    icon: FileText,
  },
  {
    title: "Startup Platforms",
    description:
      "Launch and scale quickly without worrying about infrastructure.",
    icon: Rocket,
  },
];

export default function CloudHostingUseCases() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Use Cases
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Built For Every Type Of Business
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Whether you're launching a website, online store or SaaS platform,
            our cloud hosting infrastructure is designed to grow with you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {useCases.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
            >
              <item.icon
                size={42}
                className="text-blue-500 mb-5"
              />

              <h3 className="text-xl font-semibold mb-3">
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