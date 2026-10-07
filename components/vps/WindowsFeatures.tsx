import { Database, Layers, MonitorSmartphone, Terminal } from "lucide-react";
import FeatureGrid from "@/components/site/FeatureGrid";

const features = [
  {
    icon: Terminal,
    title: "Administrator access",
    text: "Full administrator access to configure Windows Server the way your applications need.",
  },
  {
    icon: MonitorSmartphone,
    title: "Remote Desktop",
    text: "Connect over Remote Desktop and manage your server like a local machine.",
  },
  {
    icon: Database,
    title: "MSSQL support",
    text: "Run Microsoft SQL Server and the Windows applications that depend on it.",
  },
  {
    icon: Layers,
    title: "Scalable resources",
    text: "Scale CPU, RAM and storage resources as your requirements grow.",
  },
];

export default function WindowsFeatures() {
  return (
    <section className="section">
      <div className="wrap">
        <FeatureGrid items={features} />
      </div>
    </section>
  );
}
