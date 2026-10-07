import Link from "next/link";
import { Cloud, Database, Globe, Mail, Server, Settings, type LucideIcon } from "lucide-react";
import PriceFrom from "@/components/site/PriceFrom";

interface Path {
  icon: LucideIcon;
  tone: "green" | "blue" | "navy" | "orange" | "teal" | "slate";
  title: string;
  text: string;
  href: string;
  link: React.ReactNode;
}

const paths: Path[] = [
  {
    icon: Globe,
    tone: "green",
    title: "Cloud Hosting",
    text: "Best for websites, stores, blogs and business platforms that need speed, daily backups and free SSL.",
    href: "/cloud-hosting",
    link: <PriceFrom label="Cloud hosting from" usd={9.99} period="/month" />,
  },
  {
    icon: Cloud,
    tone: "blue",
    title: "Cloud Compute / VPS",
    text: "Predictable KVM slices for apps, databases, staging, Windows workloads and full root control.",
    href: "/vps",
    link: <PriceFrom label="Cloud VPS from" usd={4.5} period="/month" />,
  },
  {
    icon: Server,
    tone: "navy",
    title: "Dedicated Servers",
    text: "Bare metal hardware for production workloads, high traffic, virtualization and custom stacks.",
    href: "/dedicated",
    link: "Browse dedicated servers",
  },
  {
    icon: Settings,
    tone: "orange",
    title: "Managed VPS",
    text: "Fully managed VPS with cPanel, monitoring, security updates, backups and expert support included.",
    href: "/managed-vps",
    link: <PriceFrom label="Managed VPS from" usd={13.5} period="/month" />,
  },
  {
    icon: Mail,
    tone: "teal",
    title: "Business Email",
    text: "Professional email on your own domain with webmail, mobile sync and spam protection.",
    href: "/business-email",
    link: <PriceFrom label="Business email from" usd={1.99} period="/month" />,
  },
  {
    icon: Database,
    tone: "slate",
    title: "Storage & Backup",
    text: "Storage VPS and automated backup services for websites, servers and business data.",
    href: "/backup-security",
    link: "Explore storage & backup",
  },
];

export default function HomeProducts() {
  return (
    <section className="section paths-section">
      <div className="wrap">
        <div className="paths-heading">
          <h2>Choose the infrastructure path that fits the workload.</h2>
          <p>
            Start simple with cloud hosting, scale into cloud compute, move to bare metal when you need the whole
            machine, or let our team manage it for you.
          </p>
        </div>

        <div className="paths-grid">
          {paths.map(({ icon: Icon, tone, title, text, href, link }) => (
            <Link key={title} href={href} className="path-card">
              <span className={`path-icon tone-${tone}`}>
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <strong>{link}</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
