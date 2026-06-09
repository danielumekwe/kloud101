export default function ManagedVpsPricing() {
  const plans = [
    {
      name: "Starter",
      cpu: "2 vCPU",
      ram: "4GB RAM",
      storage: "80GB NVMe",
      price: "$12/mo",
    },
    {
      name: "Business",
      cpu: "4 vCPU",
      ram: "8GB RAM",
      storage: "160GB NVMe",
      price: "$24/mo",
      featured: true,
    },
    {
      name: "Enterprise",
      cpu: "8 vCPU",
      ram: "16GB RAM",
      storage: "320GB NVMe",
      price: "$49/mo",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Managed VPS Plans
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Managed VPS Hosting Plans
          </h2>

          <p className="text-gray-400">
            Fully managed VPS hosting with cPanel and expert support.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-blue-500 bg-slate-950"
                  : "border-slate-800 bg-black"
              }`}
            >

              {plan.featured && (
                <div className="bg-blue-600 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold mb-6">
                {plan.name}
              </h3>

              <div className="text-5xl font-bold text-blue-500 mb-6">
                {plan.price}
              </div>

              <div className="space-y-4 text-gray-300">

                <div>{plan.cpu}</div>
                <div>{plan.ram}</div>
                <div>{plan.storage}</div>

                <div>cPanel Included</div>
                <div>Server Monitoring</div>
                <div>Daily Backups</div>
                <div>Security Updates</div>
                <div>24/7 Support</div>

              </div>

              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition">
                Order Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}