import DetailSection from "@/components/site/DetailSection";
import CtaLink from "@/components/site/CtaLink";

export default function VpsBenefits() {
  return (
    <DetailSection
      eyebrow="INCLUDED WITH EVERY VPS"
      title="Control the server from the operating system up."
      text="Kloud101 Cloud VPS gives you dedicated resources, predictable pricing, flexible deployment options and enterprise-grade infrastructure."
      features={[
        "Full root access for Linux VPS and administrator access for Windows VPS.",
        "KVM virtualization for secure workload isolation.",
        "Static public IP addresses for predictable networking.",
        "NVMe SSD storage and high-speed network connectivity.",
      ]}
      rows={[
        { title: "Managed Support", text: "Our engineers can assist with server administration and troubleshooting." },
        { title: "Control Panels", text: "Deploy cPanel, DirectAdmin, Plesk, CyberPanel or Webmin." },
        { title: "Backup Options", text: "Protect your applications and databases with backup services." },
        { title: "Deployment Choices", text: "Choose Linux, Windows, WordPress, Docker and more." },
        { title: "Global Locations", text: "Deploy infrastructure close to your users and applications." },
        { title: "Security Isolation", text: "Dedicated virtual resources separated from other customers." },
      ]}
      actions={
        <>
          <CtaLink href="#plans">Configure VPS</CtaLink>
          <CtaLink href="/vps/windows" variant="outline">Windows VPS</CtaLink>
        </>
      }
    />
  );
}
