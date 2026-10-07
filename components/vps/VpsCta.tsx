import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function VpsCta() {
  return (
    <ClosingCta
      title="Ready to Deploy Your VPS?"
      text="Launch your cloud server in under 60 seconds with enterprise-grade performance, NVMe SSD storage and full root access."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/vps/order/linux-vps">Deploy VPS</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
    />
  );
}
