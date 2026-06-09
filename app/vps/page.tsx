import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import VpsNavigation from "@/components/vps/VpsNavigation";
import VpsPlans from "@/components/vps/VpsPlans";
import VpsFeatures from "@/components/vps/VpsFeatures";
import VpsUseCases from "@/components/vps/VpsUseCases";
import OperatingSystems from "@/components/vps/OperatingSystems";
import ControlPanels from "@/components/vps/ControlPanels";
import VpsBenefits from "@/components/vps/VpsBenefits";
import VpsFaq from "@/components/vps/VpsFaq";
import RelatedProducts from "@/components/vps/RelatedProducts";
import VpsCta from "@/components/vps/VpsCta";
export default function VPSPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Content */}

            <div>

              <span className="text-blue-500 font-semibold uppercase tracking-wider">
                Cloud VPS Hosting
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4 mb-8">
                Cloud VPS hosting for
                scalable virtual
                private servers.
              </h1>

              <div className="max-w-xl bg-slate-900/70 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">

                <div className="flex items-end gap-3 mb-6">

                  <span className="text-gray-400 text-xl">
                    Starts at
                  </span>

                  <span className="text-6xl font-bold text-blue-500">
                    $3
                  </span>

                  <span className="text-gray-400 text-xl mb-1">
                    /month
                  </span>

                </div>

                <div className="flex flex-wrap gap-4">

                  <a
                    href="#plans"
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Order VPS
                  </a>

                  <a
                    href="#plans"
                    className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Compare Plans
                  </a>

                </div>

              </div>

              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Deploy Linux or Windows virtual private servers with instant
                provisioning, NVMe SSD storage, full root access,
                enterprise-grade networking, and flexible resource scaling.
              </p>

            </div>

            {/* Right Content */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative">

                <Image
                  src="/services/vps-hero.png"
                  alt="Cloud VPS Hosting"
                  width={750}
                  height={750}
                  className="object-contain"
                  priority
                />

                <div className="absolute top-12 left-0 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl px-5 py-4">

                  <div className="text-sm text-gray-400">
                    Deployment Time
                  </div>

                  <div className="text-xl font-bold">
                    &lt; 60 Seconds
                  </div>

                </div>

                <div className="absolute bottom-12 right-0 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-xl px-5 py-4">

                  <div className="text-sm text-gray-400">
                    Storage
                  </div>

                  <div className="text-xl font-bold">
                    NVMe SSD
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VPS Navigation */}

      <VpsNavigation active="linux" />

      {/* VPS Pricing Section Goes Here */}
      <VpsPlans />
      {/* VPS Features Section Goes Here */}
      <VpsFeatures />
      {/* VPS Use Cases Section Goes Here */}
      <VpsUseCases />
      {/* VPS Operating Systems Section Goes Here */}
      <OperatingSystems />
      {/* VPS Control Panels Section Goes Here */}
      <ControlPanels />
      {/* VPS Benefits Section Goes Here */}
      <VpsBenefits />
      {/* VPS FAQ Section Goes Here */}
      <VpsFaq />  
      {/* Related Products Section Goes Here */}
      <RelatedProducts />
      {/* Call to Action Section Goes Here */}
      <VpsCta />  
      <Footer />

    </main>
  );
}