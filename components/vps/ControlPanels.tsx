import Image from "next/image";
import { SiWebmin } from "react-icons/si";
import SectionHeading from "@/components/site/SectionHeading";

const panels = [
  {
    title: "cPanel",
    description: "Industry-leading hosting control panel for managing websites, email and databases.",
    logo: <Image src="/logos/cpanel.png" alt="" width={555} height={200} className="is-wordmark h-[40px]!" />,
  },
  {
    title: "DirectAdmin",
    description: "Lightweight and affordable control panel with powerful hosting features.",
    logo: <Image src="/logos/panels/directadmin.svg" alt="" width={36} height={36} />,
  },
  {
    title: "Plesk",
    description: "Perfect for Windows and Linux server management with a modern interface.",
    logo: <Image src="/logos/panels/plesk.svg" alt="" width={24} height={10} className="is-wordmark" />,
  },
  {
    title: "CyberPanel",
    description: "High-performance OpenLiteSpeed panel with WordPress optimization.",
    logo: <Image src="/logos/panels/cyberpanel.svg" alt="" width={36} height={36} />,
  },
  {
    title: "Webmin",
    description: "Advanced Linux server administration through a web-based interface.",
    logo: <SiWebmin color="#7DA0D0" aria-hidden="true" />,
  },
];

export default function ControlPanels() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="CONTROL PANELS"
          title="Control Panel Options"
          text="Manage websites, databases, email accounts and server resources using your preferred control panel."
        />
        <div className="technical-grid three">
          {panels.map((panel) => (
            <div key={panel.title}>
              <span className="panel-logo">{panel.logo}</span>
              <h3>{panel.title}</h3>
              <p>{panel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
