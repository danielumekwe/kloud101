import { Eye, Gem, Target } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const items = [
  {
    title: "Our Mission",
    text: "To provide reliable, secure and affordable cloud infrastructure that empowers businesses, developers and entrepreneurs to grow online.",
    icon: Target,
  },
  {
    title: "Our Vision",
    text: "To become a trusted global cloud provider known for innovation, exceptional support and dependable infrastructure.",
    icon: Eye,
  },
  {
    title: "Core Values",
    text: "Integrity, reliability, customer success, innovation and continuous improvement drive everything we do.",
    icon: Gem,
  },
];

export default function AboutMission() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading eyebrow="WHAT DRIVES US" title="Mission, Vision & Values" />
        <FeatureGrid items={items} columns={3} />
      </div>
    </section>
  );
}
