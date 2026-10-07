import { Cloud, HardDrive, Mail, Monitor, Server, Settings, Shield } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import ProductCard from "@/components/site/ProductCard";

const services = [
  {
    title: "Linux VPS",
    description:
      "Reliable Linux virtual private servers with instant provisioning, full root access and NVMe SSD storage.",
    href: "/vps",
    icon: Server,
  },
  {
    title: "Windows VPS",
    description:
      "Windows Server VPS with full administrator access, Remote Desktop connectivity and scalable resources.",
    href: "/vps/windows",
    icon: Monitor,
  },
  {
    title: "Managed VPS",
    description:
      "Fully managed VPS hosting with cPanel, expert administration, monitoring, backups and support included.",
    href: "/managed-vps",
    icon: Settings,
  },
  {
    title: "Dedicated Servers",
    description:
      "Enterprise-grade bare metal servers with full hardware resources, NVMe SSD storage and complete control.",
    href: "/dedicated",
    icon: HardDrive,
  },
  {
    title: "Private Email",
    description:
      "Professional business email hosting on your own domain name — secure, reliable and accessible anywhere.",
    href: "/business-email",
    icon: Mail,
  },
  {
    title: "Web Hosting",
    description:
      "Fast, reliable cloud hosting for websites and applications, with high availability and daily backups.",
    href: "/cloud-hosting",
    icon: Cloud,
  },
  {
    title: "DDoS Protection",
    description:
      "Automated backups, DDoS protection, SSL and disaster recovery designed to keep your services online.",
    href: "/backup-security",
    icon: Shield,
  },
];

export default function PricingServices() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="PRICING HUB"
          title="Find the right plan."
          text="Every service has its own plans and pricing. Pick one to compare resources and costs."
        />
        <div className="card-grid">
          {services.map((service) => (
            <ProductCard key={service.title} {...service} cta="View Plans" />
          ))}
        </div>
      </div>
    </section>
  );
}
