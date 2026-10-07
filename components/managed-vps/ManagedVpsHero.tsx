import { Settings } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";

export default function ManagedVpsHero() {
  return (
    <PageHero
      breadcrumb="Managed VPS"
      eyebrow="FULLY MANAGED VPS HOSTING"
      title="Managed VPS Hosting"
      description="Get the power of VPS hosting with expert server management, cPanel, monitoring, security updates, backups and support included."
      icon={Settings}
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/vps/order/managed-vps">Deploy Managed VPS</CtaLink>
          <CtaLink href="#plans" variant="outline">Compare Plans</CtaLink>
        </>
      }
    >
      <HeroPrice usd={13.5} />
    </PageHero>
  );
}
