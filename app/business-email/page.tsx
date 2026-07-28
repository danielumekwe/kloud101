import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import BusinessEmailHero from "@/components/business-email/BusinessEmailHero";
import BusinessEmailPricing from "@/components/business-email/BusinessEmailPricing";
import BusinessEmailFeatures from "@/components/business-email/BusinessEmailFeatures";
import BusinessEmailBenefits from "@/components/business-email/BusinessEmailBenefits";
import BusinessEmailFaq from "@/components/business-email/BusinessEmailFaq";
import BusinessEmailCta from "@/components/business-email/BusinessEmailCta";

export default function BusinessEmailPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <BusinessEmailHero />

      <BusinessEmailPricing />

      <BusinessEmailFeatures />

      <BusinessEmailBenefits />

      <BusinessEmailFaq />

      <BusinessEmailCta />

      <Footer />

    </main>
  );
}