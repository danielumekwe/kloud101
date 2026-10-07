import PricingSection, { type Plan } from "@/components/site/PricingSection";

const plans: Plan[] = [
  {
    name: "Free WordPress Edition",
    price: 0,
    period: "/month",
    icon: "globe",
    description: "Core malware and file integrity protection for one WordPress site.",
    extras: ["Malware scanning", "File integrity monitoring", "Suspicious PHP detection", "Security reports"],
    href: "https://my.kloud101.com/register",
    cta: "Get Started Free",
  },
  {
    name: "Professional Edition",
    price: "Coming Soon",
    period: "",
    icon: "server",
    description: "Advanced WordPress and WHM protection for growing businesses and hosts.",
    extras: [
      "Multi-site & WHM monitoring",
      "Automated threat alerts",
      "Priority security support",
      "Hosting security dashboard",
    ],
    href: "/contact",
    cta: "Join Waitlist",
    badge: "MOST ANTICIPATED",
    featured: true,
  },
  {
    name: "Cloud Security Platform",
    price: "Coming Soon",
    period: "",
    icon: "shield",
    description: "Enterprise-grade monitoring for VPS, dedicated servers and cloud infrastructure.",
    extras: ["Real-time threat monitoring", "AI security analysis", "Server health monitoring", "Centralized dashboard"],
    href: "/contact",
    cta: "Join Waitlist",
  },
];

export default function SentinelPricing() {
  return (
    <PricingSection
      id="pricing"
      eyebrow="PRICING"
      title="Simple Plans For Every Stage"
      text="Start free on WordPress today. Professional and Cloud Security plans are on the way."
      plans={plans}
      className="section bg-card border-y"
    />
  );
}
