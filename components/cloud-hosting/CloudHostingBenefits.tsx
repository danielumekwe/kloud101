import { Cloud, Globe, HardDrive, Headphones, Lock, RefreshCw, Shield, Zap } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const benefits = [
  { title: "High Availability", text: "Built on reliable cloud infrastructure designed for maximum uptime.", icon: Cloud },
  {
    title: "NVMe SSD Storage",
    text: "Ultra-fast NVMe storage for faster website and application performance.",
    icon: HardDrive,
  },
  {
    title: "Automatic Daily Backups",
    text: "Protect your data with automated backups and recovery options.",
    icon: RefreshCw,
  },
  { title: "DDoS Protection", text: "Enterprise-grade protection against malicious attacks and threats.", icon: Shield },
  { title: "Free SSL Certificates", text: "Secure your websites and applications with free SSL encryption.", icon: Lock },
  { title: "Instant Scalability", text: "Scale resources as your business grows without downtime.", icon: Zap },
  {
    title: "Global Infrastructure",
    text: "Deliver content faster through strategically located infrastructure.",
    icon: Globe,
  },
  { title: "24/7 Expert Support", text: "Our technical team is available whenever you need assistance.", icon: Headphones },
];

export default function CloudHostingBenefits() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="WHY CHOOSE CLOUD HOSTING"
          title="Enterprise Features Built In"
          text="Everything you need to host websites, applications and business workloads on a modern cloud platform."
        />
        <FeatureGrid items={benefits} />
      </div>
    </section>
  );
}
