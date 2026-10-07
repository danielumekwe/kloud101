import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function HomeCTA() {
  return (
    <ClosingCta
      eyebrow="GET STARTED TODAY"
      title={
        <>
          Ready To Power
          <br />
          Your Business?
        </>
      }
      text="Everything you need to launch, manage and scale online — backed by reliable infrastructure, expert support and enterprise-grade technology."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/register">Get Started</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
      points={["Managed VPS", "Managed Dedicated", "Business Email", "Cloud Hosting", "Backup & Security"]}
    />
  );
}
