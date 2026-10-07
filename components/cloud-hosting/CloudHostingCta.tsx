import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function CloudHostingCta() {
  return (
    <ClosingCta
      eyebrow="CLOUD HOSTING"
      title={
        <>
          Ready To Move Your Business
          <br />
          To The Cloud?
        </>
      }
      text="Launch websites, applications and online businesses on reliable cloud infrastructure built for speed, security and scalability."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/register">Get Started</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
      points={["High Availability", "Daily Backups", "Free SSL Security", "24/7 Support"]}
    />
  );
}
