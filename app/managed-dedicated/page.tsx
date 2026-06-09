import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import DedicatedNavigation from "@/components/dedicated/DedicatedNavigation";

import ManagedDedicatedHero from "@/components/managed-dedicated/ManagedDedicatedHero";
import ManagedDedicatedPricing from "@/components/managed-dedicated/ManagedDedicatedPricing";
import ManagedDedicatedFeatures from "@/components/managed-dedicated/ManagedDedicatedFeatures";
import ManagedDedicatedCpanel from "@/components/managed-dedicated/ManagedDedicatedCpanel";
import ManagedDedicatedComparison from "@/components/managed-dedicated/ManagedDedicatedComparison";
import ManagedDedicatedFaq from "@/components/managed-dedicated/ManagedDedicatedFaq";
import ManagedDedicatedCta from "@/components/managed-dedicated/ManagedDedicatedCta";

export default function ManagedDedicatedPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <ManagedDedicatedHero />

      <DedicatedNavigation active="managed" />

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