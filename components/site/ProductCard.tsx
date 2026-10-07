import { ArrowRight, type LucideIcon } from "lucide-react";
import CtaLink from "@/components/site/CtaLink";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  label?: string;
  cta?: string;
}

export default function ProductCard({ title, description, href, icon: Icon, label, cta = "Learn more" }: ProductCardProps) {
  return (
    <article className="product-small flex flex-col">
      <div className="product-small-top">
        <Icon />
        {label && <span>{label}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <CtaLink href={href} variant="outline" arrow={false} className="mt-auto h-9 w-full rounded-md px-4 text-sm">
        {cta}
        <ArrowRight className="size-4" />
      </CtaLink>
    </article>
  );
}
