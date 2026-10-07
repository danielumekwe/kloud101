import { Check, Cloud, Globe, Server } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CtaLink from "@/components/site/CtaLink";

const products = [
  {
    id: "wordpress-security",
    icon: Globe,
    title: "KloudSentinel WordPress Security",
    description:
      "Free security plugin for WordPress websites. Detect malware, suspicious files, hidden backdoors, fake plugins, unauthorized changes and security risks.",
    features: [
      "Malware scanning",
      "File integrity monitoring",
      "Suspicious PHP detection",
      "Plugin/theme security checks",
      "Security reports",
    ],
    button: "Download Free Plugin",
    href: "#download",
    featured: true,
  },
  {
    id: "whm-security",
    icon: Server,
    title: "KloudSentinel WHM Security Plugin",
    description:
      "Server-level protection for hosting providers, WHM administrators and managed hosting companies.",
    features: [
      "Multiple account monitoring",
      "WordPress malware detection",
      "Server security checks",
      "Hosting security dashboard",
      "Automated threat alerts",
    ],
    button: "Request WHM Edition",
    href: "/contact",
  },
  {
    id: "cloud-security",
    icon: Cloud,
    title: "KloudSentinel Cloud Security",
    description: "Enterprise cloud security monitoring for VPS, dedicated servers and cloud infrastructure.",
    features: [
      "Real-time threat monitoring",
      "AI security analysis",
      "Server health monitoring",
      "Security intelligence",
      "Centralized dashboard",
    ],
    button: "Join Cloud Security Beta",
    href: "/contact",
  },
];

export default function SentinelPlatformOverview() {
  return (
    <section id="platform" className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="SECURITY PLATFORM"
          title="One Platform, Complete Protection"
          text="From a single WordPress site to a fleet of cloud servers, KloudSentinel scales to protect every layer of your business."
        />
        <div className="sentinel-editions">
          {products.map(({ id, icon: Icon, title, description, features, button, href, featured }) => (
            <article key={id} id={id} className="sentinel-edition scroll-mt-24">
              <Icon />
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="feature-list">
                {features.map((feature) => (
                  <li key={feature}>
                    <Check />
                    {feature}
                  </li>
                ))}
              </ul>
              <CtaLink href={href} variant={featured ? "primary" : "outline"} className="w-full rounded-md px-4">
                {button}
              </CtaLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
