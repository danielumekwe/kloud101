import { BarChart3, Bell, Database, Lock, RefreshCw, RotateCcw, Server, Shield } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const features = [
  {
    title: "Automated Backups",
    text: "Scheduled backups ensure your data is protected without manual intervention.",
    icon: Database,
  },
  {
    title: "Real-Time Monitoring",
    text: "Continuous monitoring helps detect issues before they impact your business.",
    icon: BarChart3,
  },
  {
    title: "Malware Protection",
    text: "Advanced malware scanning keeps your websites and applications secure.",
    icon: Shield,
  },
  {
    title: "Ransomware Recovery",
    text: "Recover critical files quickly with secure backup restoration options.",
    icon: RefreshCw,
  },
  { title: "DDoS Protection", text: "Protect your infrastructure from malicious traffic and attacks.", icon: Lock },
  {
    title: "Disaster Recovery",
    text: "Ensure business continuity with reliable disaster recovery solutions.",
    icon: Server,
  },
  { title: "File Restoration", text: "Restore files, databases and websites with just a few clicks.", icon: RotateCcw },
  { title: "Security Alerts", text: "Receive instant notifications when suspicious activity is detected.", icon: Bell },
];

export default function BackupSecurityFeatures() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="SECURITY FEATURES"
          title="Comprehensive Protection For Your Business"
          text="Secure your websites, applications and business data with enterprise-grade backup and security solutions."
        />
        <FeatureGrid items={features} />
      </div>
    </section>
  );
}
