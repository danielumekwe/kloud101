import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function AboutCta() {
  return (
    <ClosingCta
      title="Ready to Build With Kloud101?"
      text="Whether you're launching a website, deploying cloud servers, or scaling enterprise workloads, our infrastructure is ready for your next project."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/register">Get Started</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
    />
  );
}
