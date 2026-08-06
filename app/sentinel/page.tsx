import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SentinelHero from "@/components/sentinel/SentinelHero";
import SentinelPlatformOverview from "@/components/sentinel/SentinelPlatformOverview";
import SentinelComparison from "@/components/sentinel/SentinelComparison";
import SentinelHowItWorks from "@/components/sentinel/SentinelHowItWorks";
import SentinelDownloadCta from "@/components/sentinel/SentinelDownloadCta";
import SentinelPricing from "@/components/sentinel/SentinelPricing";
import SentinelTrust from "@/components/sentinel/SentinelTrust";

export const metadata: Metadata = {
  title: "KloudSentinel - WordPress Security & Cloud Protection",
  description:
    "Protect WordPress websites, servers and cloud infrastructure with KloudSentinel security platform.",
};

export default function SentinelPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <SentinelHero />

      <SentinelPlatformOverview />

      <SentinelComparison />

      <SentinelHowItWorks />

      <SentinelDownloadCta />

      <SentinelPricing />

      <SentinelTrust />

      <Footer />

    </main>
  );
}
