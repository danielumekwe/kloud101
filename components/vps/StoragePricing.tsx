import PricingSection, { type Plan } from "@/components/site/PricingSection";

const orderUrl = "https://my.kloud101.com/vps/order/storage-vps";

const plans: Plan[] = [
  { name: "1 TB", price: 4.5, ram: "2 GB RAM", transfer: "2 TB Transfer" },
  { name: "4 TB", price: 18, ram: "8 GB RAM", transfer: "8 TB Transfer" },
  { name: "8 TB", price: 36, ram: "16 GB RAM", transfer: "16 TB Transfer" },
  { name: "12 TB", price: 54, ram: "24 GB RAM", transfer: "24 TB Transfer" },
].map(({ name, ram, transfer, ...plan }) => ({
  ...plan,
  name,
  icon: "storage",
  specs: [
    { icon: "storage", label: `${name} storage` },
    { icon: "ram", label: ram },
    { icon: "network", label: transfer },
  ],
  href: orderUrl,
  cta: "Deploy",
}));

export default function StoragePricing() {
  return (
    <PricingSection
      title="Storage VPS Plans"
      text="Scale storage as your data grows."
      plans={plans}
    />
  );
}
