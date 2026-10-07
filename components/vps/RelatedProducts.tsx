import Link from "next/link";
import { ArrowRight, Globe, HardDrive, Mail, Monitor, Server, Shield } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const products = [
  { title: "Storage VPS", href: "/vps/storage", icon: HardDrive },
  { title: "Windows VPS", href: "/vps/windows", icon: Monitor },
  { title: "Dedicated Servers", href: "/dedicated", icon: Server },
  { title: "Web Hosting", href: "/cloud-hosting", icon: Globe },
  { title: "Email Hosting", href: "/business-email", icon: Mail },
  { title: "DDoS Protection", href: "/backup-security", icon: Shield },
];

export default function RelatedProducts() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="EXPLORE MORE"
          title="Related Products"
          text="Explore other infrastructure and hosting solutions."
        />
        <div className="link-grid">
          {products.map(({ title, href, icon: Icon }) => (
            <Link key={title} href={href}>
              <Icon />
              <strong>{title}</strong>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
