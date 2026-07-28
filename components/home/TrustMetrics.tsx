const metrics = [
  {
    value: "99.9%",
    label: "Network Uptime",
    description:
      "Reliable infrastructure designed for maximum availability.",
  },
  {
    value: "24/7",
    label: "Expert Support",
    description:
      "Technical assistance whenever your business needs help.",
  },
  {
    value: "100%",
    label: "Managed Services",
    description:
      "We handle the infrastructure so you can focus on growth.",
  },
  {
    value: "8+",
    label: "Global Locations",
    description:
      "Deploy closer to your customers around the world.",
  },
];

export default function TrustMetrics() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-blue-500 uppercase tracking-[0.3em] text-sm font-semibold">
            Trusted Infrastructure
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-6">
            Infrastructure You Can
            Depend On
          </h2>

          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Built for reliability, performance and business continuity.
            Everything you need to operate with confidence.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center"
            >
              <div className="text-6xl lg:text-7xl font-bold text-blue-500 mb-4">
                {metric.value}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {metric.label}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {metric.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}