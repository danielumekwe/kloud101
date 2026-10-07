import { Check, ShieldCheck, ShieldOff, X } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const traditional = [
  "Detect threats after infection",
  "Limited visibility into files and changes",
  "Manual cleanup and recovery",
];

const sentinel = [
  "Continuous monitoring around the clock",
  "Early threat detection before damage occurs",
  "Automated response to suspicious activity",
  "Central security intelligence across every asset",
];

export default function SentinelComparison() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="WHY KLOUDSENTINEL"
          title="Security That Gets Ahead Of Threats"
          text="Traditional security tools react after the damage is done. KloudSentinel is built to catch threats before they spread."
        />
        <div className="compare-cards">
          <article className="sentinel-edition muted">
            <ShieldOff />
            <h3>Traditional Security Tools</h3>
            <ul className="feature-list">
              {traditional.map((item) => (
                <li key={item}>
                  <X className="is-no" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="sentinel-edition featured">
            <ShieldCheck />
            <h3>KloudSentinel</h3>
            <ul className="feature-list">
              {sentinel.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
