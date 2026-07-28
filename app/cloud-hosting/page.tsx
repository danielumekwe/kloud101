import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CloudHostingHero from "@/components/cloud-hosting/CloudHostingHero";
import CloudHostingPricing from "@/components/cloud-hosting/CloudHostingPricing";
import CloudHostingBenefits from "@/components/cloud-hosting/CloudHostingBenefits";
import CloudHostingUseCases from "@/components/cloud-hosting/CloudHostingUseCases";
import CloudHostingFaq from "@/components/cloud-hosting/CloudHostingFaq";
import CloudHostingCta from "@/components/cloud-hosting/CloudHostingCta";

export default function CloudHostingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <CloudHostingHero />

      <CloudHostingPricing />

      <CloudHostingBenefits />

      <CloudHostingUseCases />

      <CloudHostingFaq />

      <CloudHostingCta />

      <Footer />

    </main>
  );
}