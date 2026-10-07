import PricingSection, { type Plan } from "@/components/site/PricingSection";

const orderUrl = "https://my.kloud101.com/vps/order/windows-vps";

const plans: Plan[] = [
  { name: "Starter", price: 11.5, cpu: "2 vCPU", ram: "4 GB RAM", storage: "60 GB SSD" },
  { name: "Business", price: 21.5, cpu: "4 vCPU", ram: "8 GB RAM", storage: "120 GB SSD", featured: true },
  { name: "Professional", price: 41.5, cpu: "8 vCPU", ram: "16 GB RAM", storage: "240 GB SSD" },
  { name: "Enterprise", price: 81.5, cpu: "16 vCPU", ram: "32 GB RAM", storage: "480 GB SSD" },
].map(({ cpu, ram, storage, featured, ...plan }) => ({
  ...plan,
  icon: "terminal",
  specs: [
    { icon: "cpu", label: cpu },
    { icon: "ram", label: ram },
    { icon: "storage", label: storage },
  ],
  included: "Administrator access",
  badge: featured ? "POPULAR CHOICE" : undefined,
  featured,
  href: orderUrl,
  cta: "Deploy",
}));

export default function WindowsPricing() {
  return (
    <PricingSection
      title="Windows VPS plans"
      text="Deploy Windows Server environments with instant provisioning."
      plans={plans}
    />
  );
}
