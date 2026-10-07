import Link from "next/link";
import { ArrowUpRight, HardDrive, Mail, Monitor, Server, Shield, Terminal, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import RackVisual from "@/components/site/RackVisual";
import PriceBadge from "@/components/site/PriceBadge";

const smallProducts: { icon: LucideIcon; label: string; title: string; text: string; href: string }[] = [
  {
    icon: Monitor,
    label: "WINDOWS SERVER",
    title: "Windows VPS",
    text: "Windows Server VPS with full administrator access and Remote Desktop connectivity.",
    href: "/vps/windows",
  },
  {
    icon: HardDrive,
    label: "STORAGE OPTIMIZED",
    title: "Storage VPS",
    text: "Massive storage for backups, archives, media libraries and file hosting.",
    href: "/vps/storage",
  },
  {
    icon: Mail,
    label: "BUSINESS EMAIL",
    title: "Business Email",
    text: "Professional email on your own domain. Secure, reliable and accessible anywhere.",
    href: "/business-email",
  },
  {
    icon: Shield,
    label: "BACKUP & SECURITY",
    title: "Backup & Security",
    text: "Automated backups, DDoS protection, SSL and disaster recovery.",
    href: "/backup-security",
  },
];

function ExploreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline underline-offset-4">
      {children}
      <ArrowUpRight className="size-4" />
    </Link>
  );
}

export default function HomeProducts() {
  return (
    <section className="section products-section">
      <div className="wrap">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title={
            <>
              Infrastructure for
              <br />
              every workload.
            </>
          }
          aside={
            <p className="heading-aside">
              From managed VPS hosting and dedicated servers
              <br className="desktop-break" /> to business email and backup solutions.
            </p>
          }
        />

        <div className="product-grid">
          <article className="product-feature linux-feature">
            <div className="product-label">
              <Terminal />
              <span>LINUX VPS</span>
              <PriceBadge usd={4.5} />
            </div>
            <h3>
              Fast KVM virtual servers
              <br />
              with full root access.
            </h3>
            <p>
              Instant provisioning, NVMe SSD storage
              <br />
              and flexible resource scaling.
            </p>
            <ExploreLink href="/vps">Explore Linux VPS</ExploreLink>
            <div className="terminal-preview" aria-label="Example Linux server terminal">
              <div>
                <span />
                <span />
                <span />
                <small>root@kloud101:~</small>
              </div>
              <code>
                <span className="text-primary">$</span> ssh root@your-server
                <br />
                <span className="terminal-muted">Welcome to Ubuntu 24.04 LTS</span>
                <br />
                <br />
                <span className="terminal-muted">System ready. Deployed in under 60 seconds.</span>
                <br />
                <span className="text-primary">root@kloud101</span>:~# <span className="terminal-cursor" />
              </code>
            </div>
          </article>

          <article className="product-feature dedicated-feature">
            <div className="product-label">
              <Server />
              <span>DEDICATED SERVERS</span>
            </div>
            <h3>
              Bare metal servers built
              <br />
              for maximum performance.
            </h3>
            <p>
              Full hardware resources, NVMe SSD storage
              <br />
              and complete control.
            </p>
            <ExploreLink href="/dedicated">Explore Dedicated Servers</ExploreLink>
            <div className="mini-racks">
              <RackVisual />
            </div>
          </article>

          {smallProducts.map(({ icon: Icon, label, title, text, href }) => (
            <article key={title} className="product-small">
              <div className="product-small-top">
                <Icon />
                <span>{label}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ExploreLink href={href}>Explore {title}</ExploreLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
