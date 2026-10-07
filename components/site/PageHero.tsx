import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import Eyebrow from "@/components/site/Eyebrow";

interface PageHeroProps {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  icon?: LucideIcon;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  icon: Icon,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-inner">
        <div className="breadcrumb">
          <Link href="/">Kloud101</Link>
          <ChevronRight />
          {breadcrumb}
        </div>
        {Icon && <Icon className="page-hero-icon" aria-hidden="true" />}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions && <div className="actions">{actions}</div>}
        {children}
      </div>
    </section>
  );
}
