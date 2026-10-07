import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function BusinessEmailCta() {
  return (
    <ClosingCta
      eyebrow="BUSINESS EMAIL"
      title={
        <>
          Ready To Upgrade
          <br />
          Your Business Email?
        </>
      }
      text="Build trust, improve communication and give your business a professional image with branded email addresses."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/register">Get Started</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
      points={["Professional Email", "Secure Communication", "Mobile Access", "Team Collaboration"]}
    />
  );
}
