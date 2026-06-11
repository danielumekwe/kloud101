"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
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

const isCurrency = (value: string | null): value is Currency => {
  return (
    value === "NGN" ||
    value === "USD" ||
    value === "GBP" ||
    value === "EUR"
  );
};

const EUROPEAN_COUNTRY_CODES = new Set([
  "AL",
  "AD",
  "AT",
  "BY",
  "BE",
  "BA",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "MD",
  "MC",
  "ME",
  "NL",
  "MK",
  "NO",
  "PL",
  "PT",
  "RO",
  "RU",
  "SM",
  "RS",
  "SK",
  "SI",
  "ES",
  "SE",
  "CH",
  "UA",
  "VA",
  "GB",
]);

function resolveCurrencyFromCountry(countryCode?: string | null): Currency {
  if (!countryCode) {
    return "USD";
  }

  const normalizedCountry = countryCode.toUpperCase();

  if (normalizedCountry === "NG") {
    return "NGN";
  }

  if (normalizedCountry === "GB") {
    return "GBP";
  }

  if (EUROPEAN_COUNTRY_CODES.has(normalizedCountry)) {
    return "EUR";
  }

  return "USD";
}

export function CurrencyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currency, setCurrency] = useState<Currency>("NGN");
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const saved = window.localStorage.getItem("currency");

    if (isCurrency(saved)) {
      setCurrency(saved);
      hasInitialized.current = true;
      return;
    }

    const detectCurrency = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");

        if (!response.ok) {
          throw new Error("Location lookup failed");
        }

        const data = await response.json();
        const detectedCurrency = resolveCurrencyFromCountry(data?.country_code);

        setCurrency(detectedCurrency);
      } catch {
        setCurrency("USD");
      } finally {
        hasInitialized.current = true;
      }
    };

    detectCurrency();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !hasInitialized.current) {
      return;
    }

    window.localStorage.setItem("currency", currency);
  }, [currency]);

  const formatPrice = useMemo(() => {
    return (usdPrice: number) => {
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
  }, [currency]);

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