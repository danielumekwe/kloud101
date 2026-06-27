import type { Metadata } from "next"
import LegalDocumentViewer from "@/components/legal/LegalDocumentViewer"

export const metadata: Metadata = {
  title: "Cookie Policy | Kloud101",
  description:
    "Learn about the cookies Kloud101 uses on our website, why we use them, and how you can control your cookie preferences.",
  alternates: { canonical: "https://kloud101.com/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Kloud101",
    description: "How Kloud101 uses cookies and how you can manage them.",
    url: "https://kloud101.com/cookie-policy",
    siteName: "Kloud101",
    type: "website",
  },
}

export default function CookiePolicyPage() {
  return (
    <LegalDocumentViewer
      slug="cookie-policy"
      fallbackTitle="Cookie Policy"
      category="Legal"
    />
  )
}
