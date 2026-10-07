"use client";

import { useCurrency } from "@/context/CurrencyContext";

/** "Label {price}/period" with the visitor's currency. Price is in USD. */
export default function PriceFrom({ label, usd, period = "/mo" }: { label: string; usd: number; period?: string }) {
  const { formatPrice } = useCurrency();
  return (
    <>
      {label} {formatPrice(usd)}
      {period}
    </>
  );
}
