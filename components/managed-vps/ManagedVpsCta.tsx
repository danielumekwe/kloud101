import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function ManagedVpsCta() {
  return (
    <ClosingCta
      eyebrow="FULLY MANAGED VPS HOSTING"
      title={
        <>
          Focus On Your Business.
          <br />
          We&apos;ll Handle The Server.
        </>
      }
      text="Get enterprise-grade VPS hosting with cPanel, monitoring, security management, backups, updates and expert support included."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/vps/order/managed-vps">Deploy Managed VPS</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
      points={["cPanel Included", "24/7 Monitoring", "Security Managed", "Expert Support"]}
    />
  );
}
