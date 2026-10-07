import PricingSection, { type Plan } from "@/components/site/PricingSection";

const plans: Plan[] = [
  { name: "Starter", price: 4.99, retention: "30 Days Retention", websites: "1 Website", backup: "Daily Backups" },
  {
    name: "Business",
    price: 9.99,
    retention: "90 Days Retention",
    websites: "5 Websites",
    backup: "Hourly Backups",
    featured: true,
  },
  {
    name: "Enterprise",
    price: 19.99,
    retention: "365 Days Retention",
    websites: "Unlimited Websites",
    backup: "Real-Time Backups",
  },
].map(({ retention, websites, backup, featured, ...plan }) => ({
  ...plan,
  period: "/month",
  icon: "shield",
  specs: [
    { icon: "database", label: backup },
    { icon: "storage", label: retention },
    { icon: "globe", label: websites },
  ],
  extras: ["Malware Protection", "Ransomware Recovery", "Automated Monitoring", "Disaster Recovery", "24/7 Support"],
  badge: featured ? "MOST POPULAR" : undefined,
  featured,
  href: "https://my.kloud101.com/register",
  cta: "Get Protected",
}));

export default function BackupSecurityPlans() {
  return (
    <PricingSection
      eyebrow="BACKUP & SECURITY PLANS"
      title="Protect What Matters Most"
      text="Flexible backup and security plans designed to protect your websites, applications and business data."
      plans={plans}
    />
  );
}
