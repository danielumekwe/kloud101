import { Database, Globe, HardDrive, Mail, Settings, Shield } from "lucide-react";
import MediaSection from "@/components/site/MediaSection";

const features = [
  { title: "Website Management", icon: Globe },
  { title: "Email Hosting", icon: Mail },
  { title: "Database Management", icon: Database },
  { title: "Security Tools", icon: Shield },
  { title: "Automated Backups", icon: HardDrive },
  { title: "WHM Administration", icon: Settings },
];

export default function ManagedDedicatedCpanel() {
  return (
    <MediaSection
      eyebrow="CPANEL & WHM INCLUDED"
      title="Enterprise Server Management Made Easy"
      text="Every Managed Dedicated Server includes cPanel & WHM, providing a powerful interface for managing websites, hosting accounts, email services, databases and server resources."
      checks={[
        "Unlimited Hosting Accounts",
        "Centralized Server Management",
        "Advanced Security Controls",
        "Backup & Restore Tools",
      ]}
      items={features}
      image={{ src: "/services/cpanel-dashboard.png", alt: "cPanel WHM", width: 700, height: 500 }}
    />
  );
}
