import { Check } from "lucide-react";
import Eyebrow from "@/components/site/Eyebrow";

interface DetailSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  text: React.ReactNode;
  features?: string[];
  tags?: string[];
  specs?: [label: string, value: string][];
  rows?: { title: string; text: string }[];
  actions?: React.ReactNode;
}

export default function DetailSection({
  eyebrow,
  title,
  text,
  features,
  tags,
  specs,
  rows,
  actions,
}: DetailSectionProps) {
  return (
    <section className="section bg-card border-y">
      <div className="wrap detail-layout">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          <p>{text}</p>
          {features && (
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {tags && (
            <div className="os-band">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          {actions && <div className="actions mt-7">{actions}</div>}
        </div>
        {specs && (
          <div className="detail-specs">
            {specs.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        )}
        {rows && (
          <div className="detail-rows">
            {rows.map(({ title, text }) => (
              <div key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
