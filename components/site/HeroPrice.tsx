"use client";

import { useCurrency } from "@/context/CurrencyContext";

/** "Starts at ₦17,825 /month" line for dark page heroes. Price is in USD. */
export default function HeroPrice({ usd, period = "/month" }: { usd: number; period?: string }) {
  const { formatPrice } = useCurrency();

  return (
    <div className="hero-price">
      Starts at <strong>{formatPrice(usd)}</strong> {period}
    </div>
  );
}
