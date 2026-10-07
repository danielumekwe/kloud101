import { Check, Globe, HardDrive, Network, Settings, Shield, Terminal } from "lucide-react";
import Eyebrow from "@/components/site/Eyebrow";
import CtaLink from "@/components/site/CtaLink";
import RackVisual from "@/components/site/RackVisual";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const included = [
  "100% dedicated CPU resources.",
  "Dedicated RAM and storage.",
  "Full root or administrator access.",
  "No noisy neighbors or shared resources.",
];

const operatingSystems = ["Ubuntu", "Debian", "Rocky Linux", "AlmaLinux", "Windows Server"];

const extras = [
  { title: "Remote Management", text: "IPMI, KVM and remote reboot access.", icon: Terminal },
  { title: "NVMe Storage", text: "Ultra-fast storage for demanding workloads.", icon: HardDrive },
  { title: "Private Networking", text: "Connect multiple servers securely.", icon: Network },
  { title: "DDoS Protection", text: "Enterprise-grade attack mitigation.", icon: Shield },
  { title: "Multiple Datacenters", text: "Deploy closer to your customers.", icon: Globe },
  { title: "Managed Services", text: "Optional management and monitoring.", icon: Settings },
];

export default function DedicatedBenefits() {
  return (
    <>
      <section className="section bg-card border-y">
        <div className="wrap detail-layout">
          <div>
            <Eyebrow>INCLUDED WITH EVERY SERVER</Eyebrow>
            <h2>Your own physical hardware.</h2>
            <p>
              Perfect for high-traffic websites, databases, virtualization, SaaS platforms and enterprise
              workloads.
            </p>
            <ul className="feature-list">
              {included.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <p className="os-band-label">Supported operating systems</p>
            <div className="os-band">
              {operatingSystems.map((os) => (
                <span key={os}>{os}</span>
              ))}
            </div>
            <div className="actions mt-7">
              <CtaLink href="#plans">Configure Server</CtaLink>
            </div>
          </div>
          <div className="dedicated-art">
            <RackVisual />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeading
            eyebrow="ENTERPRISE INFRASTRUCTURE"
            title="Dedicated hardware with complete control and predictable performance."
          />
          <FeatureGrid items={extras} columns={3} />
        </div>
      </section>
    </>
  );
}
