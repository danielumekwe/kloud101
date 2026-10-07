import { Code, Database, Globe, HardDrive, Headset, Monitor } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const useCases = [
  {
    title: "WordPress & PHP VPS",
    text: "Deploy WordPress, Laravel, PHP applications and CMS platforms without rebuilding your stack.",
    icon: Globe,
  },
  {
    title: "Windows VPS",
    text: "Run Windows Server workloads with Remote Desktop access and enterprise reliability.",
    icon: Monitor,
  },
  {
    title: "Remote Backups",
    text: "Protect files, databases and applications with secure backup storage.",
    icon: HardDrive,
  },
  {
    title: "Development Environments",
    text: "Host Node.js, Python, PHP, Java, Docker and development workloads on isolated infrastructure.",
    icon: Code,
  },
  {
    title: "Database Servers",
    text: "Run MySQL, MariaDB, PostgreSQL, MongoDB and Redis databases with dedicated resources.",
    icon: Database,
  },
  {
    title: "Managed Support",
    text: "Get expert assistance with server configuration, monitoring and troubleshooting.",
    icon: Headset,
  },
];

export default function VpsUseCases() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="COMMON WORKLOADS"
          title="Run Linux, Windows, databases, web apps, and control panels on your own virtual server."
          text="Cloud VPS is ideal when you need complete control over applications, operating systems and resource allocation."
        />
        <FeatureGrid items={useCases} columns={3} />
      </div>
    </section>
  );
}
