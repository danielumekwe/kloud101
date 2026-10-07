import { SiAlmalinux, SiDebian, SiFedora, SiRockylinux, SiUbuntu } from "react-icons/si";
import { Monitor } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const systems = [
  { name: "Ubuntu", icon: SiUbuntu },
  { name: "Debian", icon: SiDebian },
  { name: "Rocky Linux", icon: SiRockylinux },
  { name: "AlmaLinux", icon: SiAlmalinux },
  { name: "Fedora", icon: SiFedora },
  { name: "Windows Server", icon: Monitor },
];

export default function OperatingSystems() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="OPERATING SYSTEMS"
          title="Supported Operating Systems"
          text="Deploy your preferred operating system with instant provisioning."
        />
        <div className="os-band os-band-icons">
          {systems.map(({ name, icon: Icon }) => (
            <span key={name}>
              <Icon aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
