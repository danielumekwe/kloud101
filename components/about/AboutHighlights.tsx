import { Network, Server, Star, Users } from "lucide-react";
import FeatureGrid from "@/components/site/FeatureGrid";

const items = [
  {
    title: "Our Network",
    text: "Built on reliable infrastructure designed for speed, redundancy and performance.",
    icon: Network,
  },
  {
    title: "Our Datacenter",
    text: "Enterprise-grade facilities with secure environments and high availability.",
    icon: Server,
  },
  {
    title: "Our Team",
    text: "Dedicated professionals focused on delivering outstanding customer experiences.",
    icon: Users,
  },
  {
    title: "Customer Reviews",
    text: "Trusted by businesses, agencies and developers across multiple industries.",
    icon: Star,
  },
];

export default function AboutHighlights() {
  return (
    <section className="section">
      <div className="wrap">
        <FeatureGrid items={items} />
      </div>
    </section>
  );
}
