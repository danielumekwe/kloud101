import { Database, Globe, HardDrive, Mail, Settings, Shield } from "lucide-react";
import MediaSection from "@/components/site/MediaSection";

const features = [
  { title: "Website Management", icon: Globe },
  { title: "Email Hosting", icon: Mail },
  { title: "Database Management", icon: Database },
  { title: "Security Tools", icon: Shield },
  { title: "Backups", icon: HardDrive },
  { title: "Server Configuration", icon: Settings },
];

export default function ManagedVpsCpanel() {
  return (
    <MediaSection
      eyebrow="CPANEL INCLUDED"
      title="Powerful cPanel & WHM Management"
      text="Every Managed VPS includes cPanel & WHM, giving you complete control over websites, email accounts, databases, backups and server administration through an intuitive interface."
      items={features}
      image={{ src: "/services/cpanel-dashboard.png", alt: "cPanel Dashboard", width: 700, height: 500 }}
    />
  );
}
