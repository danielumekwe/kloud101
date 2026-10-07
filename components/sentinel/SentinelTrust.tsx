import { Building2, Cloud, Globe, Server } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const audiences = [
  { icon: Globe, title: "WordPress Websites" },
  { icon: Server, title: "Hosting Providers" },
  { icon: Cloud, title: "Cloud Servers" },
  { icon: Building2, title: "Businesses" },
];

export default function SentinelTrust() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading eyebrow="BUILT BY KLOUD101 SOLUTIONS" title="Security For Every Part Of Your Business" />
        <FeatureGrid items={audiences} />
      </div>
    </section>
  );
}
