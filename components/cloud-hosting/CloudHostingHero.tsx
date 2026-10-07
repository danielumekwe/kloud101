import { Cloud } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";
import HeroDetails from "@/components/site/HeroDetails";

export default function CloudHostingHero() {
  return (
    <PageHero
      breadcrumb="Cloud Hosting"
      eyebrow="CLOUD HOSTING"
      title={"Fast, Reliable Cloud Hosting\nBuilt For Modern Businesses"}
      description="Deploy websites, applications and business platforms on enterprise-grade cloud infrastructure with high availability, NVMe storage, daily backups and built-in security."
      icon={Cloud}
      actions={
        <>
          <CtaLink href="#plans">Get Started</CtaLink>
          <CtaLink href="#plans" variant="outline">Compare Plans</CtaLink>
        </>
      }
    >
      <HeroPrice usd={9.99} />
      <HeroDetails items={["99.9% Uptime", "NVMe SSD Storage", "Daily Backups", "Free SSL Certificates"]} />
    </PageHero>
  );
}
