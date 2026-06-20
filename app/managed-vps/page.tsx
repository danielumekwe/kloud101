import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VpsNavigation from "@/components/vps/VpsNavigation";

import ManagedVpsHero from "@/components/managed-vps/ManagedVpsHero";
import ManagedVpsPricing from "@/components/managed-vps/ManagedVpsPricing";
import ManagedVpsFeatures from "@/components/managed-vps/ManagedVpsFeatures";
import ManagedVpsCpanel from "@/components/managed-vps/ManagedVpsCpanel";
import ManagedVpsComparison from "@/components/managed-vps/ManagedVpsComparison";
import ManagedVpsFaq from "@/components/managed-vps/ManagedVpsFaq";
import ManagedVpsCta from "@/components/managed-vps/ManagedVpsCta";

export default function ManagedVpsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white">

      <Navbar />

      {/* Hero */}
      <ManagedVpsHero />
        {/* Navigation */}
      <VpsNavigation active="managed" />

      {/* Pricing */}
      <ManagedVpsPricing />

      {/* Managed Features */}
      <ManagedVpsFeatures />

      {/* cPanel & WHM Benefits */}
      <ManagedVpsCpanel />

      {/* Linux VPS vs Managed VPS */}
      <ManagedVpsComparison />

      {/* FAQ */}
      <ManagedVpsFaq />

      {/* Call To Action */}
      <ManagedVpsCta />

      <Footer />

    </main>
  );
}