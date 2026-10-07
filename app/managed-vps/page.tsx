import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductTabs from "@/components/site/ProductTabs";

import ManagedVpsHero from "@/components/managed-vps/ManagedVpsHero";
import ManagedVpsPricing from "@/components/managed-vps/ManagedVpsPricing";
import ManagedVpsFeatures from "@/components/managed-vps/ManagedVpsFeatures";
import ManagedVpsCpanel from "@/components/managed-vps/ManagedVpsCpanel";
import ManagedVpsComparison from "@/components/managed-vps/ManagedVpsComparison";
import ManagedVpsFaq from "@/components/managed-vps/ManagedVpsFaq";
import ManagedVpsCta from "@/components/managed-vps/ManagedVpsCta";

export default function ManagedVpsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ManagedVpsHero />
      <ProductTabs active="/managed-vps" />
      <ManagedVpsPricing />
      <ManagedVpsFeatures />
      <ManagedVpsCpanel />
      <ManagedVpsComparison />
      <ManagedVpsFaq />
      <ManagedVpsCta />
      <Footer />
    </main>
  );
}
