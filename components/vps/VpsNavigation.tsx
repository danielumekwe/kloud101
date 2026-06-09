import Link from "next/link";

interface VpsNavigationProps {
  active: "linux" | "storage" | "windows" | "managed";
}

export default function VpsNavigation({
  active,
}: VpsNavigationProps) {
  return (
    <div className="max-w-7xl mx-auto mb-20 px-6">
      <div className="grid md:grid-cols-4 border border-slate-800 rounded-2xl overflow-hidden">

        {/* Linux VPS */}

        <Link
          href="/vps"
          className={`p-8 transition ${
            active === "linux"
              ? "bg-blue-600 text-white"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          <h3 className="font-bold text-xl mb-2">
            Linux VPS
          </h3>

          <p className="text-sm opacity-80">
            Fast KVM virtual servers with full root access.
          </p>
        </Link>

        {/* Storage VPS */}

        <Link
          href="/vps/storage"
          className={`p-8 transition ${
            active === "storage"
              ? "bg-blue-600 text-white"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          <h3 className="font-bold text-xl mb-2">
            Storage VPS
          </h3>

          <p className="text-sm opacity-80">
            Massive storage for backups and file hosting.
          </p>
        </Link>

        {/* Windows VPS */}

        <Link
          href="/vps/windows"
          className={`p-8 transition ${
            active === "windows"
              ? "bg-blue-600 text-white"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          <h3 className="font-bold text-xl mb-2">
            Windows VPS
          </h3>

          <p className="text-sm opacity-80">
            Windows Server with Remote Desktop access.
          </p>
        </Link>

        {/* Managed VPS */}

        <Link
          href="/managed-vps"
          className={`p-8 transition ${
            active === "managed"
              ? "bg-blue-600 text-white"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          <h3 className="font-bold text-xl mb-2">
            Managed VPS
          </h3>

          <p className="text-sm opacity-80">
            Fully managed VPS with cPanel included.
          </p>
        </Link>

      </div>
    </div>
  );
}