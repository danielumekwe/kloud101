import Image from "next/image";

const locations = [
  "New York",
  "Dallas",
  "Los Angeles",
  "Toronto",
  "London",
  "Amsterdam",
  "Frankfurt",
  "Singapore",
];

const stats = [
  {
    value: "99.9%",
    label: "Network Uptime",
  },
  {
    value: "24/7",
    label: "Monitoring",
  },
  {
    value: "8+",
    label: "Global Locations",
  },
  {
    value: "100%",
    label: "Managed",
  },
];

export default function GlobalInfrastructure() {
  return (
    <section id="infrastructure" className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <div>

            <span className="text-blue-500 uppercase tracking-[0.3em] text-sm font-semibold">
              Global Infrastructure
            </span>

            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-6 mb-8 leading-tight">
              Global Infrastructure.
              <br />
              Local Performance.
            </h2>

            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Deploy your websites, applications and business
              workloads closer to your customers through our
              global cloud infrastructure network.
            </p>

            <p className="text-lg text-slate-600 leading-8 mb-10">
              Choose from strategically located datacenters
              designed to deliver low latency, maximum uptime
              and reliable performance for businesses around
              the world.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-6 mb-10">

              {stats.map((stat) => (
                <div key={stat.label}>

                  <div className="text-4xl font-bold text-blue-500">
                    {stat.value}
                  </div>

                  <div className="text-slate-600 mt-2">
                    {stat.label}
                  </div>

                </div>
              ))}

            </div>

            {/* Locations */}

            <div className="flex flex-wrap gap-3">

              {locations.map((location) => (
                <span
                  key={location}
                  className="px-4 py-2 border border-blue-500/40 rounded-full text-sm text-slate-700 hover:border-blue-500 transition"
                >
                  {location}
                </span>
              ))}

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            <Image
              src="/images/global-map.png"
              alt="Global Infrastructure"
              width={1400}
              height={900}
              className="w-full h-auto object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}