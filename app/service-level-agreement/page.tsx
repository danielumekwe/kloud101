import type { Metadata } from "next"
import LegalDocumentViewer from "@/components/legal/LegalDocumentViewer"

export const metadata: Metadata = {
  title: "Service Level Agreement | Kloud101",
  description:
    "Kloud101's SLA details our uptime commitments, support response times, credit schedules, and how we measure and guarantee service availability.",
  alternates: { canonical: "https://kloud101.com/service-level-agreement" },
  openGraph: {
    title: "Service Level Agreement | Kloud101",
    description:
      "Our uptime guarantees, support SLAs, and service credit commitments.",
    url: "https://kloud101.com/service-level-agreement",
    siteName: "Kloud101",
    type: "website",
  },
}

export default function ServiceLevelAgreementPage() {
  return (
    <LegalDocumentViewer
      slug="service-level-agreement"
      fallbackTitle="Service Level Agreement"
      category="Legal"
    />
  )
}
