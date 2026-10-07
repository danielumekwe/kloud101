import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

export default function BackupSecurityCta() {
  return (
    <ClosingCta
      eyebrow="BACKUP & SECURITY"
      title={
        <>
          Protect Your Business
          <br />
          Before Problems Happen
        </>
      }
      text="Keep your websites, applications and critical business data protected with automated backups and enterprise security."
      actions={
        <>
          <CtaLink href="https://my.kloud101.com/register">Get Protected</CtaLink>
          <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
        </>
      }
      points={["Security Protection", "Automated Backups", "Fast Recovery", "Security Alerts"]}
    />
  );
}
