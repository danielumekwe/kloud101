import { ChevronDown } from "lucide-react";
import Eyebrow from "@/components/site/Eyebrow";

interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  text?: string;
  items: { question: string; answer: React.ReactNode }[];
}

export default function FaqSection({
  eyebrow = "THE DETAILS THAT MATTER",
  title = "Frequently asked questions.",
  text,
  items,
}: FaqSectionProps) {
  return (
    <section className="section">
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {text && <p className="mt-3.5">{text}</p>}
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <ChevronDown />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
