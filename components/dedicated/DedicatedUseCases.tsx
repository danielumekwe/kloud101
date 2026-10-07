import { Building2, Cpu, Database, Gamepad2, Globe, Server } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const useCases = [
  {
    title: "High Traffic Websites",
    text: "Host large websites, ecommerce stores and applications with dedicated resources.",
    icon: Globe,
  },
  { title: "Virtualization", text: "Run multiple virtual machines and private cloud environments.", icon: Server },
  {
    title: "Game Servers",
    text: "Deploy dedicated gaming environments with low latency and full control.",
    icon: Gamepad2,
  },
  { title: "Database Hosting", text: "Power MySQL, PostgreSQL, MongoDB and enterprise databases.", icon: Database },
  { title: "AI & Compute Workloads", text: "Handle compute-intensive workloads and data processing tasks.", icon: Cpu },
  {
    title: "Enterprise Applications",
    text: "Run ERP, CRM, SaaS and mission-critical business applications.",
    icon: Building2,
  },
];

export default function DedicatedUseCases() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="COMMON WORKLOADS"
          title="What can you run on a dedicated server?"
          text="Dedicated servers provide isolated hardware resources for demanding applications and enterprise workloads."
        />
        <FeatureGrid items={useCases} columns={3} />
      </div>
    </section>
  );
}
