import type { Metadata } from "next"
import LegalDocumentViewer from "@/components/legal/LegalDocumentViewer"

export const metadata: Metadata = {
  title: "DMCA Policy | Kloud101",
  description:
    "Kloud101's DMCA Policy explains our process for handling copyright infringement claims, how to file a valid takedown notice, and counter-notification procedures.",
  alternates: { canonical: "https://kloud101.com/dmca-policy" },
  openGraph: {
    title: "DMCA Policy | Kloud101",
    description:
      "Copyright infringement notices and our DMCA takedown procedure.",
    url: "https://kloud101.com/dmca-policy",
    siteName: "Kloud101",
    type: "website",
  },
}

export default function DmcaPolicyPage() {
  return (
    <LegalDocumentViewer
      slug="dmca-policy"
      fallbackTitle="DMCA Policy"
      category="Legal"
    />
  )
}
