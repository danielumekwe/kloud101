import { Globe, Headphones, Users, Zap } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const stats = [
  { icon: Zap, value: "99.99%", label: "Network Uptime" },
  { icon: Headphones, value: "24/7", label: "Technical Support" },
  { icon: Users, value: "1000+", label: "Active Customers" },
  { icon: Globe, value: "15+", label: "Countries Served" },
];

export default function AboutStats() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="KLOUD101 BY THE NUMBERS"
          title="Trusted Infrastructure"
          text="We continuously invest in our infrastructure, support systems and cloud technologies to deliver dependable services worldwide."
        />
        <div className="stats-grid stats-grid-bordered">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="stat">
              <Icon />
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
