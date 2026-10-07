import { Database, Gauge, HardDrive, LifeBuoy, Lock, Monitor, Settings, Shield } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const features = [
  {
    title: "cPanel & WHM Included",
    text: "Manage websites, email accounts, databases and hosting resources easily.",
    icon: Settings,
  },
  { title: "24/7 Monitoring", text: "Continuous monitoring of your VPS infrastructure and services.", icon: Monitor },
  {
    title: "Security Hardening",
    text: "Firewall configuration, malware protection and proactive security measures.",
    icon: Shield,
  },
  { title: "Daily Backups", text: "Automated backups to help protect your data and business continuity.", icon: HardDrive },
  { title: "OS Updates & Patching", text: "We handle operating system updates and security patches for you.", icon: Lock },
  { title: "Performance Optimization", text: "Server tuning and optimization for improved website performance.", icon: Gauge },
  { title: "Database Management", text: "Support for MySQL, MariaDB and database performance optimization.", icon: Database },
  { title: "Expert Technical Support", text: "Access to experienced technicians whenever you need assistance.", icon: LifeBuoy },
];

export default function ManagedVpsFeatures() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="WHAT'S INCLUDED"
          title="Fully Managed VPS Services"
          text="Focus on your business while we handle the server administration, maintenance and security."
        />
        <FeatureGrid items={features} />
      </div>
    </section>
  );
}
