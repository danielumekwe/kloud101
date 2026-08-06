import Link from "next/link";
import { Check, Globe, Server, Cloud } from "lucide-react";

const products = [
  {
    id: "wordpress-security",
    icon: Globe,
    title: "KloudSentinel WordPress Security",
    description:
      "Free security plugin for WordPress websites. Detect malware, suspicious files, hidden backdoors, fake plugins, unauthorized changes and security risks.",
    features: [
      "Malware scanning",
      "File integrity monitoring",
      "Suspicious PHP detection",
      "Plugin/theme security checks",
      "Security reports",
    ],
    button: "Download Free Plugin",
    href: "#download",
    featured: true,
  },
  {
    id: "whm-security",
    icon: Server,
    title: "KloudSentinel WHM Security Plugin",
    description:
      "Server-level protection for hosting providers, WHM administrators and managed hosting companies.",
    features: [
      "Multiple account monitoring",
      "WordPress malware detection",
      "Server security checks",
      "Hosting security dashboard",
      "Automated threat alerts",
    ],
    button: "Request WHM Edition",
    href: "/contact",
  },
  {
    id: "cloud-security",
    icon: Cloud,
    title: "KloudSentinel Cloud Security",
    description:
      "Enterprise cloud security monitoring for VPS, dedicated servers and cloud infrastructure.",
    features: [
      "Real-time threat monitoring",
      "AI security analysis",
      "Server health monitoring",
      "Security intelligence",
      "Centralized dashboard",
    ],
    button: "Join Cloud Security Beta",
    href: "/contact",
  },
];

export default function SentinelPlatformOverview() {
  return (
    <section id="platform" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Security Platform
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">
            One Platform, Complete Protection
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            From a single WordPress site to a fleet of cloud servers,
            KloudSentinel scales to protect every layer of your business.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className={`flex flex-col rounded-3xl border p-8 scroll-mt-24 ${
                product.featured
                  ? "border-blue-500 bg-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 mb-6">
                <product.icon className="h-6 w-6 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {product.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="space-y-3 mb-8 flex-1">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check className="h-5 w-5 shrink-0 text-blue-500" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href={product.href}
                className={`block text-center py-4 rounded-xl font-semibold transition ${
                  product.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border border-slate-200 hover:border-slate-300"
                }`}
              >
                {product.button}
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
