import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductTabs from "@/components/site/ProductTabs";
import LinuxHero from "@/components/vps/LinuxHero";
import VpsPlans from "@/components/vps/VpsPlans";
import VpsFeatures from "@/components/vps/VpsFeatures";
import VpsUseCases from "@/components/vps/VpsUseCases";
import OperatingSystems from "@/components/vps/OperatingSystems";
import ControlPanels from "@/components/vps/ControlPanels";
import VpsBenefits from "@/components/vps/VpsBenefits";
import VpsFaq from "@/components/vps/VpsFaq";
import RelatedProducts from "@/components/vps/RelatedProducts";
import VpsCta from "@/components/vps/VpsCta";

export default function VPSPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LinuxHero />
      <ProductTabs active="/vps" />
      <VpsPlans />
      <VpsUseCases />
      <VpsFeatures />
      <OperatingSystems />
      <ControlPanels />
      <VpsBenefits />
      <VpsFaq />
      <RelatedProducts />
      <VpsCta />
      <Footer />
    </main>
  );
}
