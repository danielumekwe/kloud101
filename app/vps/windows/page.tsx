import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import WindowsHero from "@/components/vps/WindowsHero";
import WindowsPricing from "@/components/vps/WindowsPricing";

import VpsNavigation from "@/components/vps/VpsNavigation";
import VpsBenefits from "@/components/vps/VpsBenefits";
import VpsUseCases from "@/components/vps/VpsUseCases";
import VpsFaq from "@/components/vps/VpsFaq";
import VpsCta from "@/components/vps/VpsCta";

export default function WindowsVpsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <WindowsHero />

      <VpsNavigation active="windows" />

      <WindowsPricing />

      <VpsBenefits />

      <VpsUseCases />

      <VpsFaq />

      <VpsCta />

      <Footer />

    </main>
  );
}