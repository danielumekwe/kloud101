import PricingSection, { type Plan } from "@/components/site/PricingSection";

const plans: Plan[] = [
  { name: "Starter", price: 1.99, storage: "5GB Mailbox", users: "1 Email Account" },
  { name: "Business", price: 4.99, storage: "25GB Mailbox", users: "10 Email Accounts", featured: true },
  { name: "Enterprise", price: 9.99, storage: "100GB Mailbox", users: "Unlimited Accounts" },
].map(({ storage, users, featured, ...plan }) => ({
  ...plan,
  period: "/month",
  icon: "mail",
  specs: [
    { icon: "storage", label: storage },
    { icon: "users", label: users },
  ],
  extras: [
    "Webmail Access",
    "Mobile Sync",
    "Spam Protection",
    "Custom Domain Email",
    "SMTP / IMAP / POP3",
    "24/7 Support",
  ],
  badge: featured ? "MOST POPULAR" : undefined,
  featured,
  href: "https://my.kloud101.com/register",
  cta: "Get Started",
}));

export default function BusinessEmailPricing() {
  return (
    <PricingSection
      eyebrow="BUSINESS EMAIL PLANS"
      title="Choose The Right Email Plan"
      text="Professional email hosting for startups, businesses and enterprises."
      plans={plans}
    />
  );
}
