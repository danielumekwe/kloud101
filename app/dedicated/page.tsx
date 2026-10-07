import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductTabs, { dedicatedFamily } from "@/components/site/ProductTabs";
import DedicatedHero from "@/components/dedicated/DedicatedHero";
import DedicatedPricing from "@/components/dedicated/DedicatedPricing";
import DedicatedBenefits from "@/components/dedicated/DedicatedBenefits";
import DedicatedUseCases from "@/components/dedicated/DedicatedUseCases";
import DedicatedLocations from "@/components/dedicated/DedicatedLocations";
import DedicatedManagement from "@/components/dedicated/DedicatedManagement";
import DedicatedFaq from "@/components/dedicated/DedicatedFaq";
import DedicatedCta from "@/components/dedicated/DedicatedCta";

export default function DedicatedPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DedicatedHero />
      <ProductTabs active="/dedicated" items={dedicatedFamily} label="Dedicated server products" />
      <DedicatedPricing />
      <DedicatedBenefits />
      <DedicatedUseCases />
      <DedicatedLocations />
      <DedicatedManagement />
      <DedicatedFaq />
      <DedicatedCta />
      <Footer />
    </main>
  );
}
