import { Shield } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";

export default function BackupSecurityHero() {
  return (
    <PageHero
      breadcrumb="Backup & Security"
      eyebrow="BACKUP & SECURITY"
      title={"Protect Your Data\nAnd Business"}
      description="Automated backups, ransomware protection, website security and disaster recovery solutions designed to keep your business running."
      icon={Shield}
      actions={
        <>
          <CtaLink href="#plans">Protect My Business</CtaLink>
          <CtaLink href="#plans" variant="outline">Compare Plans</CtaLink>
        </>
      }
    >
      <HeroPrice usd={4.99} />
    </PageHero>
  );
}
