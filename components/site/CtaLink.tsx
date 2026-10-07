import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  arrow?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors [&_svg]:pointer-events-none [&_svg]:shrink-0";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
};

export function ctaClassName(variant: CtaLinkProps["variant"] = "primary", className = "cta-button") {
  return `${base} ${variants[variant]} ${className}`;
}

export default function CtaLink({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "cta-button",
}: CtaLinkProps) {
  const content = (
    <>
      {children}
      {arrow && <ArrowRight />}
    </>
  );
  const classes = ctaClassName(variant, className);

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
