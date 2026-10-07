"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function PriceBadge({ usd, period = "MO" }: { usd: number; period?: string }) {
  const { formatPrice } = useCurrency();
  return (
    <span className="mini-badge">
      FROM {formatPrice(usd)} / {period}
    </span>
  );
}
