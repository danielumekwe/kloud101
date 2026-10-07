import { Server } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";

export default function DedicatedHero() {
  return (
    <PageHero
      breadcrumb="Dedicated Servers"
      eyebrow="DEDICATED SERVERS"
      title={"Bare Metal Servers Built\nFor Maximum Performance."}
      description="Enterprise-grade dedicated servers with full hardware resources, NVMe SSD storage and complete control."
      icon={Server}
      actions={
        <>
          <CtaLink href="#plans">Configure Your Server</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
    >
      <HeroPrice usd={79} />
    </PageHero>
  );
}
