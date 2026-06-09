import Image from "next/image";

export default function StorageHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              Storage VPS Hosting
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mt-4 mb-8">
              Storage optimized VPS
              hosting with massive
              SSD capacity.
            </h1>

            <div className="max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8">

              <div className="flex items-end gap-3">

                <span className="text-gray-400">
                  Starts at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  $3
                </span>

                <span className="text-gray-400 mb-1">
                  /TB
                </span>

              </div>

              <div className="flex gap-4 mt-6">

                <button className="bg-blue-600 px-8 py-4 rounded-xl">
                  Order Storage VPS
                </button>

                <button className="border border-slate-700 px-8 py-4 rounded-xl">
                  Compare Plans
                </button>

              </div>

            </div>

            <p className="text-gray-400 text-lg">
              Perfect for backups, archives, media libraries,
              large datasets and file hosting applications.
            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/services/storage.png"
              alt="Storage VPS"
              width={700}
              height={700}
              className="object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}