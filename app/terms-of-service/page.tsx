import type { Metadata } from "next"
import LegalDocumentViewer from "@/components/legal/LegalDocumentViewer"

export const metadata: Metadata = {
  title: "Terms of Service | Kloud101",
  description:
    "Read Kloud101's Terms of Service to understand the rules, obligations, and agreements that govern your use of our cloud hosting platform and services.",
  alternates: { canonical: "https://kloud101.com/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Kloud101",
    description:
      "The agreement governing your use of Kloud101's cloud hosting services.",
    url: "https://kloud101.com/terms-of-service",
    siteName: "Kloud101",
    type: "website",
  },
}

export default function TermsOfServicePage() {
  return (
    <LegalDocumentViewer
      slug="terms-of-service"
      fallbackTitle="Terms of Service"
      category="Legal"
    />
  )
}
