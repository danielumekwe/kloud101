const locations = [
  "New York",
  "Dallas",
  "Los Angeles",
  "London",
  "Amsterdam",
  "Singapore",
];

export default function DedicatedLocations() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Global Data Centers
          </h2>

          <p className="text-slate-600">
            Deploy dedicated servers closer to your customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

          {locations.map((location) => (
            <div
              key={location}
              className="border border-slate-200 rounded-2xl p-8 text-center bg-white"
            >
              <h3 className="font-semibold text-lg">
                {location}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}