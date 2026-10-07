import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./site.css";

import { CurrencyProvider } from "@/context/CurrencyContext";
import CookieBanner from "@/components/legal/CookieBanner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kloud101 Hosting - Fast, Reliable & Secure Cloud Solutions",
  description:
    "Experience high-performance cloud hosting with Kloud101. Our scalable, secure, and reliable solutions are designed to meet the needs of modern businesses.",
  other: {
    "p:domain_verify": "0db93bf1be648b4befc18be521b78ff4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col"
      >
        <CurrencyProvider>
          {children}
          <CookieBanner />
        </CurrencyProvider>
      </body>
    </html>
  );
}