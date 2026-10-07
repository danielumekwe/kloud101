import { Database, Globe, Headphones, Lock, Server, Shield } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const features = [
  { title: "Full Root Access", text: "Complete control over your VPS environment and software stack.", icon: Server },
  { title: "Managed Support", text: "24/7 technical support from experienced infrastructure engineers.", icon: Headphones },
  { title: "Automatic Backups", text: "Protect your workloads with scheduled backup options.", icon: Database },
  { title: "DDoS Protection", text: "Enterprise-grade protection against network attacks.", icon: Shield },
  { title: "Global Datacenters", text: "Deploy closer to your customers for lower latency.", icon: Globe },
  { title: "Security Isolation", text: "Dedicated resources and isolated virtualization.", icon: Lock },
];

export default function VpsFeatures() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="WHY KLOUD101"
          title="Why Choose Kloud101 VPS"
          text="Enterprise-grade infrastructure designed for performance."
        />
        <FeatureGrid items={features} columns={3} />
      </div>
    </section>
  );
}
