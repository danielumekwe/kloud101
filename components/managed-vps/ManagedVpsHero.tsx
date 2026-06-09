import Image from "next/image";

export default function ManagedVpsHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              Fully Managed VPS Hosting
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mt-4 mb-8">
              Managed VPS Hosting
              With cPanel Included
            </h1>

            <div className="max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-8 mb-8">

              <div className="flex items-end gap-3">

                <span className="text-gray-400">
                  Starts at
                </span>

                <span className="text-6xl font-bold text-blue-500">
                  $12
                </span>

                <span className="text-gray-400 mb-1">
                  /month
                </span>

              </div>

            </div>

            <p className="text-gray-400 text-lg">
              Get the power of VPS hosting with expert server management,
              cPanel, monitoring, security updates, backups and support included.
            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/services/managed-vps.png"
              alt="Managed VPS Hosting"
              width={750}
              height={750}
              className="object-contain"
              priority
            />

          </div>

        </div>

      </div>

    </section>
  );
}