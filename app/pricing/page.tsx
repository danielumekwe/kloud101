import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PricingHero from "@/components/pricing/PricingHero";
import PricingServices from "@/components/pricing/PricingServices";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Pricing - Kloud101 Cloud Hosting Solutions",
  description:
    "Explore transparent pricing for Kloud101's VPS, dedicated server, email and hosting plans, and find the infrastructure that fits your business.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <Navbar />

      <PricingHero />

      <PricingServices />

      <HomeCTA />

      <Footer />

    </main>
  );
}
