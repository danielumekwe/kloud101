import PricingSection, { type Plan } from "@/components/site/PricingSection";

const servers = [
  { cpu: "Intel Xeon E3", ram: "32GB DDR4", storage: "2 x 480GB SSD", bandwidth: "10TB", price: 79 },
  { cpu: "Intel Xeon E5", ram: "64GB DDR4", storage: "2 x 960GB SSD", bandwidth: "20TB", price: 129, featured: true },
  { cpu: "Dual Xeon Gold", ram: "128GB DDR4", storage: "2 x 1.92TB NVMe", bandwidth: "30TB", price: 249 },
];

const plans: Plan[] = servers.map(({ cpu, ram, storage, bandwidth, price, featured }) => ({
  name: cpu,
  price,
  icon: "server",
  specs: [
    { icon: "ram", label: ram },
    { icon: "storage", label: storage },
    { icon: "network", label: `${bandwidth} bandwidth` },
  ],
  included: "Full root or administrator access",
  badge: featured ? "POPULAR CHOICE" : undefined,
  featured,
  href: "https://my.kloud101.com/",
  cta: "Deploy",
}));

export default function DedicatedPricing() {
  return (
    <PricingSection
      title="Dedicated Server Plans"
      text="Powerful bare metal servers for enterprise workloads."
      plans={plans}
    />
  );
}
