import { Mail } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroPrice from "@/components/site/HeroPrice";

export default function BusinessEmailHero() {
  return (
    <PageHero
      breadcrumb="Business Email"
      eyebrow="BUSINESS EMAIL HOSTING"
      title={"Professional Email\nFor Modern Businesses"}
      description="Build trust and credibility with professional email addresses using your own domain name. Secure, reliable and accessible from anywhere."
      icon={Mail}
      actions={
        <>
          <CtaLink href="#plans">Get Business Email</CtaLink>
          <CtaLink href="#plans" variant="outline">Compare Plans</CtaLink>
        </>
      }
    >
      <HeroPrice usd={1.99} />
    </PageHero>
  );
}
