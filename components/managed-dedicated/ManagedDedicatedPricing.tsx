import PricingSection, { type Plan } from "@/components/site/PricingSection";

const plans: Plan[] = [
  { name: "Essential", cpu: "Intel Xeon E3", ram: "32GB RAM", storage: "2 x 1TB SSD", price: 149 },
  { name: "Business", cpu: "Intel Xeon Silver", ram: "64GB RAM", storage: "2 x 2TB SSD", price: 249, featured: true },
  { name: "Enterprise", cpu: "Dual Xeon Gold", ram: "128GB RAM", storage: "4 x 2TB SSD", price: 399 },
].map(({ cpu, ram, storage, featured, ...plan }) => ({
  ...plan,
  icon: "server",
  specs: [
    { icon: "cpu", label: cpu },
    { icon: "ram", label: ram },
    { icon: "storage", label: storage },
  ],
  extras: ["cPanel Included", "24/7 Monitoring", "Security Hardening", "Daily Backups", "Expert Support"],
  badge: featured ? "MOST POPULAR" : undefined,
  featured,
  href: "https://my.kloud101.com/",
  cta: "Order Now",
}));

export default function ManagedDedicatedPricing() {
  return (
    <PricingSection
      eyebrow="MANAGED DEDICATED PLANS"
      title="Dedicated Servers Managed For You"
      plans={plans}
    />
  );
}
