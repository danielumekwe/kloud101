import { Cpu } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";

export default function ManagedDedicatedHero() {
  return (
    <PageHero
      breadcrumb="Managed Dedicated"
      eyebrow="FULLY MANAGED DEDICATED SERVERS"
      title={"Dedicated Servers With cPanel\n& Expert Management"}
      description="Enterprise-grade dedicated servers with cPanel, server monitoring, security management, backups and expert support included."
      icon={Cpu}
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/">Deploy Managed Dedicated</CtaLink>
          <CtaLink href="#plans" variant="outline">Compare Plans</CtaLink>
        </>
      }
    >
      <HeroPrice usd={149} />
    </PageHero>
  );
}
