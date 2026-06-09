import Navbar from "@/components/layout/Navbar"
import TrustedBy from "@/components/home/TrustedBy"
import Hero from "@/components/home/Hero"
import Stats from "@/components/home/Stats"
import Footer from "@/components/layout/Footer"
import VpsPricing from "@/components/pricing/VpsPricing"
import Features from "@/components/home/Features"
import DedicatedPricing from "@/components/pricing/DedicatedPricing"
import HeroSlider from "@/components/home/HeroSlider";
import ServiceCards from "@/components/home/ServiceCards";
import PowerfulFeatures from "@/components/home/PowerfulFeatures";
import FeaturedSolutions from "@/components/home/FeaturedSolutions";
import WhyKloud101 from "@/components/home/WhyKloud101";
import GlobalInfrastructure from "@/components/home/GlobalInfrastructure";
import BusinessGrowthJourney from "@/components/home/BusinessGrowthJourney";
import TrustMetrics from "@/components/home/TrustMetrics";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSlider />
      <FeaturedSolutions />
      <WhyKloud101 />
      <GlobalInfrastructure />
      <BusinessGrowthJourney />
      <TrustMetrics />
      <HomeCTA />
      
      <Footer />
    </main>
  )
}