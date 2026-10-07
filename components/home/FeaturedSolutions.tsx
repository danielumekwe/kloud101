import PricingSection, { type Plan } from "@/components/site/PricingSection";
import CtaLink from "@/components/site/CtaLink";

const BASE_PRICE_PER_SLICE = 4.5;
const LINK = "https://my.kloud101.com/vps/order/linux-vps";

const tiers = [
  { slices: 1, cores: "1 core", memory: "2GB memory", storage: "40GB SSD", transfer: "2TB transfer" },
  { slices: 4, cores: "2 cores", memory: "8GB memory", storage: "160GB SSD", transfer: "8TB transfer" },
  { slices: 8, cores: "4 cores", memory: "16GB memory", storage: "320GB SSD", transfer: "16TB transfer", featured: true },
  { slices: 12, cores: "6 cores", memory: "24GB memory", storage: "480GB SSD", transfer: "24TB transfer" },
];

const plans: Plan[] = tiers.map((tier) => ({
  name: `${tier.slices} ${tier.slices === 1 ? "Slice" : "Slices"}`,
  price: tier.slices * BASE_PRICE_PER_SLICE,
  icon: "terminal",
  specs: [
    { icon: "cpu", label: tier.cores },
    { icon: "ram", label: tier.memory },
    { icon: "storage", label: tier.storage },
    { icon: "network", label: `${tier.transfer} · 10Gbps shared port` },
  ],
  included: "Root access · Full server control",
  badge: tier.featured ? "MOST POPULAR" : undefined,
  featured: tier.featured,
  href: LINK,
  cta: "Deploy VPS",
}));

export default function FeaturedSolutions() {
  return (
    <>
      <PricingSection
        eyebrow="FEATURED SOLUTIONS"
        title="VPS Hosting For Modern Businesses"
        text="Launch and scale your business with fully managed VPS infrastructure, full root access and enterprise-grade support."
        plans={plans}
        className="section homepage-pricing"
      />
      <div className="center-link-row">
        <CtaLink href="/pricing" variant="outline">Compare All Plans</CtaLink>
      </div>
    </>
  );
}
