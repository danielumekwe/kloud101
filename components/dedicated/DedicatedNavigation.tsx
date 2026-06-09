import Link from "next/link";

interface DedicatedNavigationProps {
  active: "dedicated" | "managed";
}

export default function DedicatedNavigation({
  active,
}: DedicatedNavigationProps) {
  return (
    <div className="max-w-5xl mx-auto mb-20 px-6">

      <div className="grid md:grid-cols-2 border border-slate-800 rounded-2xl overflow-hidden">

        {/* Dedicated Servers */}

        <Link
          href="/dedicated"
          className={`p-8 transition ${
            active === "dedicated"
              ? "bg-blue-600 text-white"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          <h3 className="font-bold text-xl mb-2">
            Dedicated Servers
          </h3>

          <p className="text-sm opacity-80">
            High-performance bare metal servers with full control.
          </p>
        </Link>

        {/* Managed Dedicated */}

        <Link
          href="/managed-dedicated"
          className={`p-8 transition ${
            active === "managed"
              ? "bg-blue-600 text-white"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          <h3 className="font-bold text-xl mb-2">
            Managed Dedicated
          </h3>

          <p className="text-sm opacity-80">
            Dedicated servers with cPanel and expert management.
          </p>
        </Link>

      </div>

    </div>
  );
}