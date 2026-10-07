import Eyebrow from "@/components/site/Eyebrow";
import HeroDetails from "@/components/site/HeroDetails";

interface ClosingCtaProps {
  eyebrow?: string;
  title: React.ReactNode;
  text: React.ReactNode;
  actions: React.ReactNode;
  points?: string[];
}

export default function ClosingCta({
  eyebrow = "BUILD WITH KLOUD101",
  title,
  text,
  actions,
  points,
}: ClosingCtaProps) {
  return (
    <section className="closing">
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <div className="closing-row">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="actions">{actions}</div>
        </div>
        {points && <HeroDetails items={points} />}
      </div>
    </section>
  );
}
