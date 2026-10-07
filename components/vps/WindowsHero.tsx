import { Monitor } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";

export default function WindowsHero() {
  return (
    <PageHero
      breadcrumb="Windows VPS"
      eyebrow="WINDOWS VPS HOSTING"
      title={"Windows VPS hosting\nwith Remote Desktop."}
      description="Run Windows Server workloads with full administrator access, Remote Desktop connectivity, MSSQL support and scalable resources."
      icon={Monitor}
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/vps/order/windows-vps">Order Windows VPS</CtaLink>
          <CtaLink href="#plans" variant="outline">Compare Plans</CtaLink>
        </>
      }
    >
      <HeroPrice usd={11.5} />
    </PageHero>
  );
}
