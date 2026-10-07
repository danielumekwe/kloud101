import PricingSection, { type Plan } from "@/components/site/PricingSection";

const orderUrl = "https://my.kloud101.com/vps/order/linux-vps";

const plans: Plan[] = [
  { name: "1 Slice", price: 4.5, cpu: "1 vCPU", ram: "2 GB RAM", storage: "40 GB NVMe", bandwidth: "2 TB Transfer" },
  { name: "2 Slices", price: 7.5, cpu: "2 vCPU", ram: "4 GB RAM", storage: "80 GB NVMe", bandwidth: "4 TB Transfer", featured: true },
  { name: "4 Slices", price: 13.5, cpu: "4 vCPU", ram: "8 GB RAM", storage: "160 GB NVMe", bandwidth: "8 TB Transfer" },
  { name: "8 Slices", price: 25.5, cpu: "8 vCPU", ram: "16 GB RAM", storage: "320 GB NVMe", bandwidth: "16 TB Transfer" },
].map(({ cpu, ram, storage, bandwidth, featured, ...plan }) => ({
  ...plan,
  icon: "terminal",
  specs: [
    { icon: "cpu", label: cpu },
    { icon: "ram", label: ram },
    { icon: "storage", label: storage },
    { icon: "network", label: bandwidth },
  ],
  included: "Full root access",
  badge: featured ? "MOST POPULAR" : undefined,
  featured,
  href: orderUrl,
  cta: "Deploy VPS",
}));

export default function VpsPlans() {
  return (
    <PricingSection
      title="Linux VPS Plans"
      text="Start small and scale your infrastructure as your business grows."
      plans={plans}
    />
  );
}
