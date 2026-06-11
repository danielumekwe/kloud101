"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencySwitcher() {
const { currency, setCurrency } = useCurrency();

return (
<select
value={currency}
onChange={(e) =>
setCurrency(
e.target.value as "NGN" | "USD" | "GBP" | "EUR"
)
}
className="
bg-slate-900
border
border-slate-700
text-white
rounded-lg
px-3
py-2
text-sm
outline-none
hover:border-blue-500
focus:border-blue-500
transition
"
> <option value="NGN">🇳🇬 NGN</option> <option value="USD">🇺🇸 USD</option> <option value="GBP">🇬🇧 GBP</option> <option value="EUR">🇪🇺 EUR</option> </select>
);
}
