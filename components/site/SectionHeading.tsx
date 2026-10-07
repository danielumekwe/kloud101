import Eyebrow from "@/components/site/Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  aside?: React.ReactNode;
}

export default function SectionHeading({ eyebrow, title, text, aside }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {aside}
    </div>
  );
}
