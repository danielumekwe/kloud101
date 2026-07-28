export default function Features() {
  const features = [
    {
      title: "Instant Deployment",
      description: "Launch VPS servers in minutes."
    },
    {
      title: "Enterprise SSD Storage",
      description: "Fast NVMe storage for maximum performance."
    },
    {
      title: "DDoS Protection",
      description: "Built-in protection against network attacks."
    },
    {
      title: "24/7 Support",
      description: "Technical assistance whenever you need it."
    },
    {
      title: "API Access",
      description: "Automate infrastructure with our API."
    },
    {
      title: "Scalable Infrastructure",
      description: "Upgrade resources as your business grows."
    }
  ]

  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Why Choose Kloud101
        </h2>

        <p className="text-center text-slate-600 mb-16">
          Built for developers, agencies and businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-slate-200 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}