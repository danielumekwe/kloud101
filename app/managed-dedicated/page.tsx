import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductTabs, { dedicatedFamily } from "@/components/site/ProductTabs";

import ManagedDedicatedHero from "@/components/managed-dedicated/ManagedDedicatedHero";
import ManagedDedicatedPricing from "@/components/managed-dedicated/ManagedDedicatedPricing";
import ManagedDedicatedFeatures from "@/components/managed-dedicated/ManagedDedicatedFeatures";
import ManagedDedicatedCpanel from "@/components/managed-dedicated/ManagedDedicatedCpanel";
import ManagedDedicatedComparison from "@/components/managed-dedicated/ManagedDedicatedComparison";
import ManagedDedicatedFaq from "@/components/managed-dedicated/ManagedDedicatedFaq";
import ManagedDedicatedCta from "@/components/managed-dedicated/ManagedDedicatedCta";

export default function ManagedDedicatedPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ManagedDedicatedHero />
      <ProductTabs active="/managed-dedicated" items={dedicatedFamily} label="Dedicated server products" />
      <ManagedDedicatedPricing />
      <ManagedDedicatedFeatures />
      <ManagedDedicatedCpanel />
      <ManagedDedicatedComparison />
      <ManagedDedicatedFaq />
      <ManagedDedicatedCta />
      <Footer />
    </main>
  );
}
