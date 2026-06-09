export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-black to-black" />

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

        {/* Badge */}
        <span className="inline-flex items-center px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm font-medium mb-8">
          🚀 Affordable Cloud Infrastructure for African Businesses
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Deploy VPS & Dedicated
          <br />
          <span className="text-blue-500">Servers in Minutes</span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          High-performance cloud infrastructure with instant deployment,
          enterprise-grade networking, SSD storage, and 24/7 support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">

          <a
            href="/vps"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            Deploy VPS
          </a>

          <a
            href="/pricing"
            className="border border-gray-700 hover:border-gray-500 transition px-8 py-4 rounded-xl font-semibold"
          >
            View Pricing
          </a>

        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

          <div>
            <h3 className="text-3xl font-bold text-white">99.99%</h3>
            <p className="text-gray-500 text-sm">Uptime SLA</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">10Gbps</h3>
            <p className="text-gray-500 text-sm">Network Speed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">24/7</h3>
            <p className="text-gray-500 text-sm">Expert Support</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">Instant</h3>
            <p className="text-gray-500 text-sm">Provisioning</p>
          </div>

        </div>

      </div>
    </section>
  )
}