import PricingSection, { type Plan } from "@/components/site/PricingSection";

const plans: Plan[] = [
  { name: "Starter", price: 9.99, cpu: "2 vCPU", ram: "4GB RAM", storage: "50GB NVMe SSD", websites: "1 Website" },
  {
    name: "Business",
    price: 19.99,
    cpu: "4 vCPU",
    ram: "8GB RAM",
    storage: "100GB NVMe SSD",
    websites: "Unlimited Websites",
    featured: true,
  },
  {
    name: "Enterprise",
    price: 39.99,
    cpu: "8 vCPU",
    ram: "16GB RAM",
    storage: "250GB NVMe SSD",
    websites: "Unlimited Websites",
  },
].map(({ cpu, ram, storage, websites, featured, ...plan }) => ({
  ...plan,
  period: "/month",
  icon: "globe",
  specs: [
    { icon: "cpu", label: cpu },
    { icon: "ram", label: ram },
    { icon: "storage", label: storage },
    { icon: "globe", label: websites },
  ],
  extras: ["Daily Backups", "Free SSL Certificates", "99.9% Uptime SLA", "24/7 Support"],
  badge: featured ? "MOST POPULAR" : undefined,
  featured,
  href: "https://my.kloud101.com/register",
  cta: "Get Started",
}));

export default function CloudHostingPricing() {
  return (
    <PricingSection
      eyebrow="CLOUD HOSTING PLANS"
      title="Choose The Perfect Cloud Plan"
      text="High-performance cloud hosting built for speed, scalability and reliability."
      plans={plans}
    />
  );
}
