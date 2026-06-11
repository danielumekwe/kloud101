"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Currency = "NGN" | "USD" | "GBP" | "EUR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (usdPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export function CurrencyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currency, setCurrency] = useState<Currency>("NGN");

  useEffect(() => {
    const saved = localStorage.getItem("currency");

    if (
      saved === "NGN" ||
      saved === "USD" ||
      saved === "GBP" ||
      saved === "EUR"
    ) {
      setCurrency(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  const formatPrice = (usdPrice: number) => {
    const rates = {
      USD: 1,
      NGN: 1550,
      GBP: 0.78,
      EUR: 0.92,
    };

    const symbols = {
      USD: "$",
      NGN: "₦",
      GBP: "£",
      EUR: "€",
    };

    const value = usdPrice * rates[currency];

    return `${symbols[currency]}${value.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error(
      "useCurrency must be used inside CurrencyProvider"
    );
  }

  return context;
}