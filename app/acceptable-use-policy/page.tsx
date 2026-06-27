import type { Metadata } from "next"
import LegalDocumentViewer from "@/components/legal/LegalDocumentViewer"

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Kloud101",
  description:
    "Kloud101's Acceptable Use Policy defines permitted and prohibited activities on our infrastructure to ensure a safe, reliable environment for all customers.",
  alternates: { canonical: "https://kloud101.com/acceptable-use-policy" },
  openGraph: {
    title: "Acceptable Use Policy | Kloud101",
    description:
      "What you can and cannot do on Kloud101's cloud infrastructure.",
    url: "https://kloud101.com/acceptable-use-policy",
    siteName: "Kloud101",
    type: "website",
  },
}

export default function AcceptableUsePolicyPage() {
  return (
    <LegalDocumentViewer
      slug="acceptable-use-policy"
      fallbackTitle="Acceptable Use Policy"
      category="Legal"
    />
  )
}
