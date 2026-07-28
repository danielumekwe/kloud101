import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CurrencyProvider } from "@/context/CurrencyContext";
import CookieBanner from "@/components/legal/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kloud101 Hosting - Fast, Reliable & Secure Cloud Solutions",
  description:
    "Experience high-performance cloud hosting with Kloud101. Our scalable, secure, and reliable solutions are designed to meet the needs of modern businesses.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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