import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function ManagedDedicatedCta() {
  return (
    <ClosingCta
      eyebrow="MANAGED DEDICATED SERVERS"
      title={
        <>
          Enterprise Infrastructure.
          <br />
          Expert Management.
        </>
      }
      text="Get dedicated hardware with cPanel, security management, proactive monitoring, backups and expert technical support included."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/">Deploy Managed Dedicated</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
      points={["Dedicated Hardware", "24/7 Monitoring", "Security Managed", "Expert Support"]}
    />
  );
}
