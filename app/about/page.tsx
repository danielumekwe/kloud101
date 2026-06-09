import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutHighlights from "@/components/about/AboutHighlights";
import AboutStory from "@/components/about/AboutStory";
import AboutMission from "@/components/about/AboutMission";
import AboutStats from "@/components/about/AboutStats";
import AboutCta from "@/components/about/AboutCta";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <AboutHero />
      <AboutHighlights />
      <AboutStory />
      <AboutMission />
      <AboutStats />
      <AboutCta />

      <Footer />

    </main>
  );
}