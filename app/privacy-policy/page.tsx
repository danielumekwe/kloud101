import type { Metadata } from "next"
import LegalDocumentViewer from "@/components/legal/LegalDocumentViewer"

export const metadata: Metadata = {
  title: "Privacy Policy | Kloud101",
  description:
    "Learn how Kloud101 collects, uses, and protects your personal information. Our Privacy Policy explains your rights and our obligations under applicable data protection laws.",
  alternates: { canonical: "https://kloud101.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Kloud101",
    description:
      "How Kloud101 handles your personal data — collection, use, retention and your rights.",
    url: "https://kloud101.com/privacy-policy",
    siteName: "Kloud101",
    type: "website",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentViewer
      slug="privacy-policy"
      fallbackTitle="Privacy Policy"
      category="Legal"
    />
  )
}
