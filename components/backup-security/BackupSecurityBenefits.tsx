import { Building2, Clock, FileCheck, Lock, RotateCcw, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const benefits = [
  {
    title: "Prevent Data Loss",
    text: "Keep your business data safe with automated backups and secure storage.",
    icon: ShieldCheck,
  },
  {
    title: "Reduce Downtime",
    text: "Quick recovery tools help restore services and minimize interruptions.",
    icon: Clock,
  },
  {
    title: "Protect Customer Data",
    text: "Secure sensitive customer information with advanced protection measures.",
    icon: Lock,
  },
  {
    title: "Improve Compliance",
    text: "Meet industry standards and regulatory requirements with reliable backups.",
    icon: FileCheck,
  },
  { title: "Recover Faster", text: "Restore websites, databases and files quickly when issues occur.", icon: RotateCcw },
  {
    title: "Business Continuity",
    text: "Keep operations running smoothly even during unexpected disruptions.",
    icon: Building2,
  },
];

export default function BackupSecurityBenefits() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="BUSINESS BENEFITS"
          title="Why Backup & Security Matters"
          text="Protect your business from data loss, cyber threats and unexpected downtime with enterprise-grade backup solutions."
        />
        <FeatureGrid items={benefits} columns={3} />
      </div>
    </section>
  );
}
