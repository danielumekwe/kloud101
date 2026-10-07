import { Layers } from "lucide-react";
import PageHero from "@/components/site/PageHero";

export default function PricingHero() {
  return (
    <PageHero
      breadcrumb="Pricing"
      eyebrow="PRICING"
      title={"Transparent Pricing For\nCloud Infrastructure"}
      description="Choose the infrastructure solution that fits your needs. Explore our flexible plans and scale as your business grows."
      icon={Layers}
    />
  );
}
