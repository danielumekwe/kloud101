import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import StorageHero from "@/components/vps/StorageHero";
import VpsNavigation from "@/components/vps/VpsNavigation";
import StoragePricing from "@/components/vps/StoragePricing";

import VpsBenefits from "@/components/vps/VpsBenefits";
import VpsFaq from "@/components/vps/VpsFaq";
import VpsCta from "@/components/vps/VpsCta";

export default function StorageVpsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <StorageHero />

      <VpsNavigation active="storage" />

      <StoragePricing />

      <VpsBenefits />

      <VpsFaq />

      <VpsCta />

      <Footer />

    </main>
  );
}