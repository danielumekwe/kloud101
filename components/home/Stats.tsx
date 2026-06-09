export default function Stats() {
  return (
    <section className="border-t border-gray-900">
      <div className="max-w-6xl mx-auto py-16 grid md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold">99.99%</h3>
          <p className="text-gray-500">Uptime</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">10Gbps</h3>
          <p className="text-gray-500">Network</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">24/7</h3>
          <p className="text-gray-500">Support</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">Instant</h3>
          <p className="text-gray-500">Provisioning</p>
        </div>
      </div>
    </section>
  )
}