import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function DedicatedCta() {
  return (
    <ClosingCta
      title="Ready to Deploy Your Dedicated Server?"
      text="Enterprise-grade hardware, dedicated resources, NVMe storage and complete control."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/">Deploy Server</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
    />
  );
}
