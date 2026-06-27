import type { Metadata } from "next"
import LegalDocumentViewer from "@/components/legal/LegalDocumentViewer"

export const metadata: Metadata = {
  title: "Refund Policy | Kloud101",
  description:
    "Kloud101's Refund Policy outlines the conditions under which refunds are issued, how to request one, and our billing dispute resolution process.",
  alternates: { canonical: "https://kloud101.com/refund-policy" },
  openGraph: {
    title: "Refund Policy | Kloud101",
    description:
      "Understand Kloud101's refund eligibility, process, and timelines.",
    url: "https://kloud101.com/refund-policy",
    siteName: "Kloud101",
    type: "website",
  },
}

export default function RefundPolicyPage() {
  return (
    <LegalDocumentViewer
      slug="refund-policy"
      fallbackTitle="Refund Policy"
      category="Legal"
    />
  )
}
