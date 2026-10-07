import { Check } from "lucide-react";

export default function HeroDetails({ items }: { items: string[] }) {
  return (
    <div className="hero-details">
      {items.map((item) => (
        <span key={item}>
          <Check />
          {item}
        </span>
      ))}
    </div>
  );
}
