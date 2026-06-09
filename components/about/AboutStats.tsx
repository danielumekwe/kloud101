const stats = [
  {
    value: "99.99%",
    label: "Network Uptime",
  },
  {
    value: "24/7",
    label: "Technical Support",
  },
  {
    value: "1000+",
    label: "Active Customers",
  },
  {
    value: "15+",
    label: "Countries Served",
  },
];

export default function AboutStats() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Kloud101 By The Numbers
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Trusted Infrastructure
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We continuously invest in our infrastructure,
            support systems and cloud technologies to
            deliver dependable services worldwide.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-10 text-center"
            >
              <div className="text-5xl font-bold text-blue-500 mb-4">
                {stat.value}
              </div>

              <div className="text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}