export default function DedicatedManagement() {
  const plans = [
    {
      title: "Self Managed",
      description:
        "Full control for experienced system administrators.",
    },
    {
      title: "Managed",
      description:
        "Infrastructure assistance and monitoring included.",
    },
    {
      title: "Fully Managed",
      description:
        "Server administration, updates and support handled for you.",
    },
  ];

  return (
    <section className="py-24 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Management Options
          </h2>

          <p className="text-slate-600">
            Choose the level of server management that fits your needs.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="border border-slate-200 rounded-2xl p-8 bg-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                {plan.title}
              </h3>

              <p className="text-slate-600">
                {plan.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}