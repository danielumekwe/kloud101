"use client";

import Link from "next/link";
import {
  Server,
  HardDrive,
  Monitor,
  Settings,
  HelpCircle,
  MapPin,
  Shield,
  Database,
} from "lucide-react";

export default function VpsMegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 mt-4 w-[950px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

      <div className="grid grid-cols-4 gap-8">

        {/* Products */}

        <div className="col-span-2">

          <div className="grid grid-cols-2 gap-4">

            <Link
              href="/vps"
              className="border rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <Server className="h-8 w-8 text-blue-600 mb-4" />

              <h3 className="font-bold text-slate-900">
                Linux VPS
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                KVM Cloud VPS from $3/mo
              </p>
            </Link>

            <Link
              href="/storage-vps"
              className="border rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <HardDrive className="h-8 w-8 text-blue-600 mb-4" />

              <h3 className="font-bold text-slate-900">
                Storage VPS
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                High-capacity storage VPS
              </p>
            </Link>

            <Link
              href="/windows-vps"
              className="border rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <Monitor className="h-8 w-8 text-blue-600 mb-4" />

              <h3 className="font-bold text-slate-900">
                Windows VPS
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Remote Desktop Hosting
              </p>
            </Link>

            <Link
              href="/managed-vps"
              className="border rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <Settings className="h-8 w-8 text-blue-600 mb-4" />

              <h3 className="font-bold text-slate-900">
                Managed VPS
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Fully managed infrastructure
              </p>
            </Link>

          </div>

        </div>

        {/* Information */}

        <div>

          <h4 className="font-bold text-slate-900 mb-6">
            Information
          </h4>

          <div className="space-y-4">

            <Link
              href="/vps#faq"
              className="flex items-center gap-3 text-slate-600 hover:text-blue-600"
            >
              <HelpCircle size={16} />
              FAQ
            </Link>

            <Link
              href="/vps#locations"
              className="flex items-center gap-3 text-slate-600 hover:text-blue-600"
            >
              <MapPin size={16} />
              Locations
            </Link>

            <Link
              href="/vps#operating-systems"
              className="flex items-center gap-3 text-slate-600 hover:text-blue-600"
            >
              <Database size={16} />
              Supported OS
            </Link>

          </div>

        </div>

        {/* Related Services */}

        <div>

          <h4 className="font-bold text-slate-900 mb-6">
            Related Services
          </h4>

          <div className="space-y-4">

            <Link
              href="/dedicated"
              className="flex items-center gap-3 text-slate-600 hover:text-blue-600"
            >
              <Server size={16} />
              Dedicated Servers
            </Link>

            <Link
              href="/web-hosting"
              className="flex items-center gap-3 text-slate-600 hover:text-blue-600"
            >
              <Database size={16} />
              Web Hosting
            </Link>

            <Link
              href="/email-hosting"
              className="flex items-center gap-3 text-slate-600 hover:text-blue-600"
            >
              <Database size={16} />
              Email Hosting
            </Link>

            <Link
              href="/ddos-protection"
              className="flex items-center gap-3 text-slate-600 hover:text-blue-600"
            >
              <Shield size={16} />
              DDoS Protection
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}