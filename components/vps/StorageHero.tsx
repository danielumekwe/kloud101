import { HardDrive } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";

export default function StorageHero() {
  return (
    <PageHero
      breadcrumb="Storage VPS"
      eyebrow="STORAGE VPS HOSTING"
      title={"Storage optimized VPS hosting\nwith massive SSD capacity."}
      description="Perfect for backups, archives, media libraries, large datasets and file hosting applications."
      icon={HardDrive}
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/vps/order/storage-vps">Order Storage VPS</CtaLink>
          <CtaLink href="#plans" variant="outline">Compare Plans</CtaLink>
        </>
      }
    >
      <HeroPrice usd={4.5} period="/TB" />
    </PageHero>
  );
}
