import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  text?: string;
}

export default function FeatureGrid({
  items,
  columns = 4,
}: {
  items: Feature[];
  columns?: 3 | 4;
}) {
  return (
    <div className={`technical-grid${columns === 3 ? " three" : ""}`}>
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title}>
          <Icon />
          <h3>{title}</h3>
          {text && <p>{text}</p>}
        </div>
      ))}
    </div>
  );
}
