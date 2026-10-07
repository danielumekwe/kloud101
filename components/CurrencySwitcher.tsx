"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <select
      aria-label="Currency"
      value={currency}
      onChange={(e) => setCurrency(e.target.value as "NGN" | "USD" | "GBP" | "EUR")}
      className="currency-select"
    >
      <option value="NGN">₦ NGN</option>
      <option value="USD">$ USD</option>
      <option value="GBP">£ GBP</option>
      <option value="EUR">€ EUR</option>
    </select>
  );
}
