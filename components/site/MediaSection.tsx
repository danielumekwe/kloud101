import Image from "next/image";
import { Check, type LucideIcon } from "lucide-react";
import Eyebrow from "@/components/site/Eyebrow";

interface MediaSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  text: React.ReactNode;
  checks?: string[];
  items?: { title: string; icon: LucideIcon }[];
  image: { src: string; alt: string; width: number; height: number };
  className?: string;
}

/** Text on the left, framed screenshot on the right. */
export default function MediaSection({
  eyebrow,
  title,
  text,
  checks,
  items,
  image,
  className = "section",
}: MediaSectionProps) {
  return (
    <section className={className}>
      <div className="wrap detail-layout media-layout">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2>{title}</h2>
          <p>{text}</p>
          {checks && (
            <ul className="feature-list">
              {checks.map((check) => (
                <li key={check}>
                  <Check />
                  {check}
                </li>
              ))}
            </ul>
          )}
          {items && (
            <div className="icon-list">
              {items.map(({ title: label, icon: Icon }) => (
                <div key={label}>
                  <Icon />
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="media-frame">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </div>
      </div>
    </section>
  );
}
