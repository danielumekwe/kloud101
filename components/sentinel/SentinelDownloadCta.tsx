import Link from "next/link";
import { Globe, ScanLine, FileCheck, Bell } from "lucide-react";

export default function SentinelDownloadCta() {
  return (
    <section id="download" className="py-24 bg-white scroll-mt-16">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-50 to-white p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-blue-500 uppercase tracking-wider font-semibold">
                Free WordPress Plugin
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Start Protecting Your WordPress Website Today
              </h2>

              <p className="text-slate-600 text-lg mb-8">
                Download KloudSentinel WordPress Plugin and get malware
                scanning, file integrity monitoring and security reports
                running on your site in minutes.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">

                <Link
                  href="https://my.kloud101.com/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Download Free Version
                </Link>

                <Link
                  href="/contact"
                  className="border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Contact Sales
                </Link>

              </div>

              <p className="text-slate-500 text-sm">
                Free forever for personal and small business websites.
              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <Globe size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">WordPress Ready</h3>
                <p className="text-slate-600 text-sm">
                  Works with any WordPress site out of the box.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <ScanLine size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">Malware Scanning</h3>
                <p className="text-slate-600 text-sm">
                  Scan files, plugins and themes for threats.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <FileCheck size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">Integrity Monitoring</h3>
                <p className="text-slate-600 text-sm">
                  Get notified of unauthorized file changes.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <Bell size={40} className="text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">Security Reports</h3>
                <p className="text-slate-600 text-sm">
                  Clear reports on your site&apos;s security status.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
