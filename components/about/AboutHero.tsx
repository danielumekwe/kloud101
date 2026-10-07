import { Building2 } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";

export default function AboutHero() {
  return (
    <PageHero
      breadcrumb="About"
      eyebrow="ABOUT KLOUD101"
      title={"Building reliable\ncloud infrastructure"}
      description="Kloud101 delivers cloud VPS hosting, dedicated servers, web hosting, email hosting and enterprise infrastructure solutions designed for developers, agencies and businesses that demand performance and reliability."
      icon={Building2}
      actions={
        <>
          <CtaLink href="/contact">Contact Us</CtaLink>
          <CtaLink href="/vps" variant="outline">Explore Services</CtaLink>
        </>
      }
    />
  );
}
