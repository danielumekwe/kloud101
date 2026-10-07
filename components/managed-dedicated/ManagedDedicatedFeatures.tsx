import { Database, Gauge, HardDrive, LifeBuoy, Lock, Monitor, Settings, Shield } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const features = [
  {
    title: "cPanel & WHM Included",
    text: "Full control of websites, email accounts, DNS and server administration.",
    icon: Settings,
  },
  { title: "24/7 Monitoring", text: "Continuous monitoring of hardware, services and network performance.", icon: Monitor },
  {
    title: "Security Hardening",
    text: "Firewall configuration, malware protection and security best practices.",
    icon: Shield,
  },
  { title: "Daily Backups", text: "Automated backups to protect your business-critical data.", icon: HardDrive },
  { title: "OS Updates", text: "Operating system updates and security patch management.", icon: Lock },
  {
    title: "Performance Optimization",
    text: "Server tuning and resource optimization for maximum performance.",
    icon: Gauge,
  },
  { title: "Database Management", text: "MySQL and MariaDB administration and optimization.", icon: Database },
  { title: "Expert Support", text: "Dedicated technical assistance from experienced engineers.", icon: LifeBuoy },
];

export default function ManagedDedicatedFeatures() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="WHAT'S INCLUDED"
          title="Fully Managed Dedicated Services"
          text="Focus on growing your business while our experts manage your dedicated server infrastructure."
        />
        <FeatureGrid items={features} />
      </div>
    </section>
  );
}
