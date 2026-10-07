import PricingSection, { type Plan } from "@/components/site/PricingSection";

const orderUrl = "https://my.kloud101.com/vps/order/managed-vps";

const plans: Plan[] = [
  { name: "Starter", cpu: "2 vCPU", ram: "4GB RAM", storage: "80GB NVMe", price: 13.5 },
  { name: "Business", cpu: "4 vCPU", ram: "8GB RAM", storage: "160GB NVMe", price: 25.5, featured: true },
  { name: "Enterprise", cpu: "8 vCPU", ram: "16GB RAM", storage: "320GB NVMe", price: 50.5 },
].map(({ cpu, ram, storage, featured, ...plan }) => ({
  ...plan,
  icon: "server",
  specs: [
    { icon: "cpu", label: cpu },
    { icon: "ram", label: ram },
    { icon: "storage", label: storage },
  ],
  extras: ["cPanel Included", "Server Monitoring", "Daily Backups", "Security Updates", "24/7 Support"],
  badge: featured ? "MOST POPULAR" : undefined,
  featured,
  href: orderUrl,
  cta: "Order Now",
}));

export default function ManagedVpsPricing() {
  return (
    <PricingSection
      eyebrow="MANAGED VPS PLANS"
      title="Managed VPS Hosting Plans"
      text="Fully managed VPS hosting with cPanel and expert support."
      plans={plans}
    />
  );
}
