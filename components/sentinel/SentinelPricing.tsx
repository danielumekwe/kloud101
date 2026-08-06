import Link from "next/link";

const plans = [
  {
    name: "Free WordPress Edition",
    price: "$0",
    period: "/month",
    description: "Core malware and file integrity protection for one WordPress site.",
    features: [
      "Malware scanning",
      "File integrity monitoring",
      "Suspicious PHP detection",
      "Security reports",
    ],
    button: "Get Started Free",
    href: "https://my.kloud101.com/register",
    available: true,
  },
  {
    name: "Professional Edition",
    price: "Coming Soon",
    description: "Advanced WordPress and WHM protection for growing businesses and hosts.",
    features: [
      "Multi-site & WHM monitoring",
      "Automated threat alerts",
      "Priority security support",
      "Hosting security dashboard",
    ],
    button: "Join Waitlist",
    href: "/contact",
    available: false,
    featured: true,
  },
  {
    name: "Cloud Security Platform",
    price: "Coming Soon",
    description: "Enterprise-grade monitoring for VPS, dedicated servers and cloud infrastructure.",
    features: [
      "Real-time threat monitoring",
      "AI security analysis",
      "Server health monitoring",
      "Centralized dashboard",
    ],
    button: "Join Waitlist",
    href: "/contact",
    available: false,
  },
];

export default function SentinelPricing() {
  return (
    <section id="pricing" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Pricing
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Simple Plans For Every Stage
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            Start free on WordPress today. Professional and Cloud Security
            plans are on the way.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl border p-8 ${
                plan.featured
                  ? "border-blue-500 bg-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="inline-block self-start bg-blue-600 text-white px-4 py-2 rounded-full text-sm mb-6">
                  Most Anticipated
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">
                {plan.name}
              </h3>

              <div className="flex flex-wrap items-end gap-2 mb-6">
                <span
                  className={
                    plan.available
                      ? "text-5xl font-bold text-blue-500"
                      : "text-3xl font-bold text-slate-400"
                  }
                >
                  {plan.price}
                </span>

                {plan.period && (
                  <span className="text-slate-600 mb-1">{plan.period}</span>
                )}
              </div>

              <p className="text-slate-600 mb-6">
                {plan.description}
              </p>

              <div className="space-y-3 text-slate-600 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature}>{feature}</div>
                ))}
              </div>

              <Link
                href={plan.href}
                className={`block text-center py-4 rounded-xl font-semibold transition ${
                  plan.available
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border border-slate-200 hover:border-slate-300"
                }`}
              >
                {plan.button}
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
