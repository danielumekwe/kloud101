import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaLink from "@/components/site/CtaLink";
import HeroDetails from "@/components/site/HeroDetails";

export default function SentinelHero() {
  return (
    <PageHero
      breadcrumb="KloudSentinel"
      eyebrow="KLOUDSENTINEL SECURITY PLATFORM"
      title={"Advanced Security Protection\nfor WordPress, Servers & Cloud"}
      description="KloudSentinel detects malware, vulnerabilities, unauthorized changes, and security threats before they become business problems."
      icon={ShieldCheck}
      actions={
        <>
          <CtaLink href="#cloud-security">Explore Cloud Security</CtaLink>
          <CtaLink href="#download" variant="outline">Download Free Plugin</CtaLink>
        </>
      }
    >
      <HeroDetails items={["Malware scanning", "Vulnerability detection", "File integrity monitoring"]} />
    </PageHero>
  );
}
