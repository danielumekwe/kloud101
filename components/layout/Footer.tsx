import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-600 border-t border-blue-600 print:hidden">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-6 gap-12">

          {/* Company */}

          <div className="lg:col-span-2">

            <Image
              src="/kloud101logo-white.png"
              alt="Kloud101"
              width={627}
              height={250}
              className="h-11 w-auto mb-4"
            />

            <p className="text-blue-100 leading-relaxed mb-8">
              Reliable cloud infrastructure for modern businesses.
              From Managed VPS and Dedicated Servers to Business Email,
              Cloud Hosting and Security Solutions.
            </p>

            <div className="space-y-2 text-blue-100">

              <p>info@kloud101.com</p>

              <p>0808 969 9705</p>

              <p>24/7 Technical Support</p>

              <p>Nigeria Office: 16 Oduola Ogunrinde Ave, Ikotun, Lagos 100266, Lagos</p>

            </div>

          </div>

          {/* Cloud Services */}

          <div>

            <h3 className="font-semibold text-lg text-white mb-5">
              Cloud Services
            </h3>

            <div className="space-y-3 text-blue-100">

              <Link href="/managed-vps" className="block hover:text-white transition-colors">
                Managed VPS
              </Link>

              <Link href="/managed-dedicated" className="block hover:text-white transition-colors">
                Managed Dedicated Servers
              </Link>

              <Link href="/cloud-hosting" className="block hover:text-white transition-colors">
                Cloud Hosting
              </Link>

              <Link href="/business-email" className="block hover:text-white transition-colors">
                Business Email
              </Link>

              <Link href="/backup-security" className="block hover:text-white transition-colors">
                Backup & Security
              </Link>

            </div>

          </div>

          {/* Solutions */}

          <div>

            <h3 className="font-semibold text-lg text-white mb-5">
              Solutions
            </h3>

            <div className="space-y-3 text-blue-100">

              <Link href="#" className="block hover:text-white transition-colors">
                Startup Solutions
              </Link>

              <Link href="#" className="block hover:text-white transition-colors">
                SME Solutions
              </Link>

              <Link href="#" className="block hover:text-white transition-colors">
                Agency Solutions
              </Link>

              <Link href="#" className="block hover:text-white transition-colors">
                Enterprise Solutions
              </Link>

              <Link href="#" className="block hover:text-white transition-colors">
                E-Commerce Solutions
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-lg text-white mb-5">
              Resources
            </h3>

            <div className="space-y-3 text-blue-100">

              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact Us
              </Link>

              <Link href="https://my.kloud101.com/register" className="block hover:text-white transition-colors">
                Create Account
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-lg text-white mb-5">
              Company
            </h3>

            <div className="space-y-3 text-blue-100">

              <Link href="/about" className="block hover:text-white transition-colors">
                About Us
              </Link>

              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact
              </Link>

            </div>

          </div>

        </div>

        {/* Payment Methods */}

        <div className="mt-16 pt-10 border-t border-white/15 flex flex-col items-center gap-3 text-center">

          <p className="text-blue-100 text-sm">We now accept</p>

          <Image
            src="/payment.webp"
            alt="Accepted payment methods"
            width={560}
            height={35}
            className="h-9 w-auto max-w-full"
          />

        </div>

        {/* Legal Links Row */}

        <div className="mt-10 pt-10 border-t border-white/15">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} Kloud101. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-blue-100">

              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>

              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>

              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>

              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </Link>

              <Link href="/service-level-agreement" className="hover:text-white transition-colors">
                SLA
              </Link>

              <Link href="/acceptable-use-policy" className="hover:text-white transition-colors">
                Acceptable Use
              </Link>

              <Link href="/abuse-policy" className="hover:text-white transition-colors">
                Abuse Policy
              </Link>

              <Link href="/dmca-policy" className="hover:text-white transition-colors">
                DMCA
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
