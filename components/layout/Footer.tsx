import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-6 gap-12">

          {/* Company */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-white mb-4">
              Kloud101
            </h2>

            <p className="text-slate-400 leading-relaxed mb-8">
              Reliable cloud infrastructure for modern businesses.
              From Managed VPS and Dedicated Servers to Business Email,
              Cloud Hosting and Security Solutions.
            </p>

            <div className="space-y-2 text-slate-400">

              <p>sales@kloud101.com</p>

              <p>support@kloud101.com</p>

              <p>24/7 Technical Support</p>

            </div>

          </div>

          {/* Cloud Services */}

          <div>

            <h3 className="font-semibold text-lg text-white mb-5">
              Cloud Services
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/managed-vps" className="block hover:text-white">
                Managed VPS
              </Link>

              <Link
                href="/managed-dedicated"
                className="block hover:text-white"
              >
                Managed Dedicated Servers
              </Link>

              <Link
                href="/cloud-hosting"
                className="block hover:text-white"
              >
                Cloud Hosting
              </Link>

              <Link
                href="/business-email"
                className="block hover:text-white"
              >
                Business Email
              </Link>

              <Link
                href="/backup-security"
                className="block hover:text-white"
              >
                Backup & Security
              </Link>

            </div>

          </div>

          {/* Solutions */}

          <div>

            <h3 className="font-semibold text-lg text-white mb-5">
              Solutions
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link href="#" className="block hover:text-white">
                Startup Solutions
              </Link>

              <Link href="#" className="block hover:text-white">
                SME Solutions
              </Link>

              <Link href="#" className="block hover:text-white">
                Agency Solutions
              </Link>

              <Link href="#" className="block hover:text-white">
                Enterprise Solutions
              </Link>

              <Link href="#" className="block hover:text-white">
                E-Commerce Solutions
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-lg text-white mb-5">
              Resources
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/blog" className="block hover:text-white">
                Blog
              </Link>

              <Link
                href="/knowledge-base"
                className="block hover:text-white"
              >
                Knowledge Base
              </Link>

              <Link href="/tutorials" className="block hover:text-white">
                Tutorials
              </Link>

              <Link href="/status" className="block hover:text-white">
                Status Page
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-lg text-white mb-5">
              Company
            </h3>

            <div className="space-y-3 text-slate-400">

              <Link href="/about" className="block hover:text-white">
                About Us
              </Link>

              <Link href="/partners" className="block hover:text-white">
                Partners
              </Link>

              <Link href="/careers" className="block hover:text-white">
                Careers
              </Link>

              <Link
                href="/affiliate-program"
                className="block hover:text-white"
              >
                Affiliate Program
              </Link>

              <Link href="/contact" className="block hover:text-white">
                Contact
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kloud101. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>

            <Link href="/acceptable-use-policy" className="hover:text-white">
              Acceptable Use Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}