"use client";

import {
  Check,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Mail,
  MemoryStick,
  Network,
  Server,
  Shield,
  Terminal,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import SectionHeading from "@/components/site/SectionHeading";
import CtaLink from "@/components/site/CtaLink";

const icons = {
  terminal: Terminal,
  server: Server,
  cpu: Cpu,
  ram: MemoryStick,
  storage: HardDrive,
  network: Network,
  database: Database,
  mail: Mail,
  users: Users,
  globe: Globe,
  shield: Shield,
  check: Check,
} satisfies Record<string, LucideIcon>;

export type PlanIcon = keyof typeof icons;

export interface Plan {
  name: string;
  /** USD amount, converted with the visitor's currency; a string is shown as-is. */
  price: number | string;
  period?: string;
  icon?: PlanIcon;
  specs?: { icon: PlanIcon; label: string }[];
  description?: string;
  included?: string;
  /** Extra inclusions listed under the specs (managed plans). */
  extras?: string[];
  badge?: string;
  featured?: boolean;
  href: string;
  cta?: string;
}

const currencies = [
  ["NGN", "₦ NGN"],
  ["USD", "$ USD"],
  ["GBP", "£ GBP"],
  ["EUR", "€ EUR"],
] as const;

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="segmented currency-toggle" aria-label="Currency">
      {currencies.map(([code, label]) => (
        <button
          key={code}
          type="button"
          className="inline-flex items-center justify-center font-medium"
          aria-pressed={currency === code}
          onClick={() => setCurrency(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function PlanCard({ plan }: { plan: Plan }) {
  const { formatPrice } = useCurrency();
  const PlanIconComponent = icons[plan.icon ?? "terminal"];

  return (
    <article className={`price-card${plan.featured ? " featured" : ""}`}>
      {plan.badge && <span className="plan-badge">{plan.badge}</span>}
      <div className="plan-top">
        <PlanIconComponent />
        <h3>{plan.name}</h3>
      </div>
      <div className={`plan-price${typeof plan.price === "string" ? " is-text" : ""}`}>
        {typeof plan.price === "number" ? formatPrice(plan.price) : plan.price}
        {plan.period !== "" && <small>{plan.period ?? "/mo"}</small>}
      </div>
      {plan.description && <p className="plan-description">{plan.description}</p>}
      {plan.specs && (
        <div className="plan-specs">
          {plan.specs.map(({ icon, label }) => {
            const SpecIcon = icons[icon];
            return (
              <div key={label}>
                <SpecIcon />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      )}
      {plan.extras && (
        <div className="plan-extras">
          {plan.extras.map((extra) => (
            <div key={extra}>
              <Check />
              {extra}
            </div>
          ))}
        </div>
      )}
      {plan.included ? (
        <div className="plan-included">
          <Check />
          {plan.included}
        </div>
      ) : (
        <div className="pt-[18px]" />
      )}
      <CtaLink
        href={plan.href}
        variant={plan.featured ? "primary" : "outline"}
        className="w-full rounded-md text-sm"
      >
        {plan.cta ?? "Configure Server"}
      </CtaLink>
    </article>
  );
}

interface PricingSectionProps {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  plans: Plan[];
  className?: string;
}

export default function PricingSection({
  id = "plans",
  eyebrow = "STRAIGHTFORWARD PRICING",
  title,
  text,
  plans,
  className = "section",
}: PricingSectionProps) {
  return (
    <section id={id} className={`${className} scroll-mt-20`}>
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} text={text} aside={<CurrencyToggle />} />
        <div className={`pricing-grid${plans.length === 3 ? " three" : ""}`}>
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
