import { Briefcase, Code, FileText, Globe, Rocket, ShoppingCart } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const useCases = [
  {
    title: "Business Websites",
    text: "Professional websites for businesses that require speed, reliability and uptime.",
    icon: Globe,
  },
  {
    title: "E-Commerce Stores",
    text: "Host WooCommerce and online stores with high performance and security.",
    icon: ShoppingCart,
  },
  {
    title: "Web Applications",
    text: "Deploy custom applications and SaaS platforms on scalable cloud infrastructure.",
    icon: Code,
  },
  { title: "Agency Hosting", text: "Manage multiple client websites from a reliable cloud platform.", icon: Briefcase },
  { title: "Blogs & Publishers", text: "Handle growing traffic and content delivery with ease.", icon: FileText },
  { title: "Startup Platforms", text: "Launch and scale quickly without worrying about infrastructure.", icon: Rocket },
];

export default function CloudHostingUseCases() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="USE CASES"
          title="Built For Every Type Of Business"
          text="Whether you're launching a website, online store or SaaS platform, our cloud hosting infrastructure is designed to grow with you."
        />
        <FeatureGrid items={useCases} columns={3} />
      </div>
    </section>
  );
}
