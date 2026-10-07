import { Headset, Settings, Terminal } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const options = [
  { title: "Self Managed", text: "Full control for experienced system administrators.", icon: Terminal },
  { title: "Managed", text: "Infrastructure assistance and monitoring included.", icon: Settings },
  { title: "Fully Managed", text: "Server administration, updates and support handled for you.", icon: Headset },
];

export default function DedicatedManagement() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="MANAGEMENT OPTIONS"
          title="Management Options"
          text="Choose the level of server management that fits your needs."
        />
        <FeatureGrid items={options} columns={3} />
      </div>
    </section>
  );
}
