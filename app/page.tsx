import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustMetrics from "@/components/home/TrustMetrics";
import HomeProducts from "@/components/home/HomeProducts";
import FeaturedSolutions from "@/components/home/FeaturedSolutions";
import SentinelSecurity from "@/components/home/SentinelSecurity";
import WhyKloud101 from "@/components/home/WhyKloud101";
import GlobalInfrastructure from "@/components/home/GlobalInfrastructure";
import SupportResources from "@/components/home/SupportResources";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <main className="min-h-screen home">
      <Navbar />
      <Hero />
      <TrustMetrics />
      <HomeProducts />
      <FeaturedSolutions />
      <SentinelSecurity />
      <WhyKloud101 />
      <GlobalInfrastructure />
      <SupportResources />
      <HomeCTA />
      <Footer />
    </main>
  );
}
