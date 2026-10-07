import { Terminal } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";
import HeroDetails from "@/components/site/HeroDetails";

export default function LinuxHero() {
  return (
    <PageHero
      breadcrumb="Linux VPS"
      eyebrow="CLOUD VPS HOSTING"
      title={"Cloud VPS hosting for scalable\nvirtual private servers."}
      description="Deploy Linux or Windows virtual private servers with instant provisioning, NVMe SSD storage, full root access, enterprise-grade networking, and flexible resource scaling."
      icon={Terminal}
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/vps/order/linux-vps">Order VPS</CtaLink>
          <CtaLink href="#plans" variant="outline">Compare Plans</CtaLink>
        </>
      }
    >
      <HeroPrice usd={4.5} />
      <HeroDetails items={["Deployment in < 60 seconds", "NVMe SSD storage"]} />
    </PageHero>
  );
}
