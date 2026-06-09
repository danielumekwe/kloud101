import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DedicatedNavigation from "@/components/dedicated/DedicatedNavigation";
import DedicatedHero from "@/components/dedicated/DedicatedHero";
import DedicatedPricing from "@/components/dedicated/DedicatedPricing";
import DedicatedBenefits from "@/components/dedicated/DedicatedBenefits";
import DedicatedUseCases from "@/components/dedicated/DedicatedUseCases";

import DedicatedLocations from "@/components/dedicated/DedicatedLocations";
import DedicatedOperatingSystems from "@/components/dedicated/DedicatedOperatingSystems";
import DedicatedManagement from "@/components/dedicated/DedicatedManagement";

import DedicatedFaq from "@/components/dedicated/DedicatedFaq";
import DedicatedCta from "@/components/dedicated/DedicatedCta";

export default function DedicatedPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero */}
      <DedicatedHero />
      <DedicatedNavigation active="dedicated" />

      {/* Pricing */}
      <DedicatedPricing />

      {/* Why Dedicated */}
      <DedicatedBenefits />

      {/* Use Cases */}
      <DedicatedUseCases />

      {/* Datacenter Locations */}
      <DedicatedLocations />

      {/* Supported Operating Systems */}
      <DedicatedOperatingSystems />

      {/* Management Options */}
      <DedicatedManagement />

      {/* FAQ */}
      <DedicatedFaq />

      {/* CTA */}
      <DedicatedCta />

      <Footer />

    </main>
  );
}