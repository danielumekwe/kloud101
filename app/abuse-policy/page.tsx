import type { Metadata } from "next"
import LegalDocumentViewer from "@/components/legal/LegalDocumentViewer"

export const metadata: Metadata = {
  title: "Abuse Policy | Kloud101",
  description:
    "Kloud101's Abuse Policy describes how to report misuse of our infrastructure and how we investigate and respond to abuse complaints.",
  alternates: { canonical: "https://kloud101.com/abuse-policy" },
  openGraph: {
    title: "Abuse Policy | Kloud101",
    description:
      "How to report and how we handle abuse of Kloud101 infrastructure.",
    url: "https://kloud101.com/abuse-policy",
    siteName: "Kloud101",
    type: "website",
  },
}

export default function AbusePolicyPage() {
  return (
    <LegalDocumentViewer
      slug="abuse-policy"
      fallbackTitle="Abuse Policy"
      category="Legal"
    />
  )
}
