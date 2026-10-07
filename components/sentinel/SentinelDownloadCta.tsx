import { Check } from "lucide-react";
import Eyebrow from "@/components/site/Eyebrow";
import CtaLink from "@/components/site/CtaLink";
import SentinelPreview from "@/components/site/SentinelPreview";

const highlights = [
  "WordPress Ready — works with any WordPress site out of the box.",
  "Malware Scanning — scan files, plugins and themes for threats.",
  "Integrity Monitoring — get notified of unauthorized file changes.",
  "Security Reports — clear reports on your site's security status.",
];


export default function SentinelDownloadCta() {
  return (
    <section id="download" className="section sentinel-section scroll-mt-16">
      <div className="wrap sentinel-layout">
        <div>
          <Eyebrow>FREE WORDPRESS PLUGIN</Eyebrow>
          <h2>
            Start Protecting Your
            <br />
            <span>WordPress Website Today</span>
          </h2>
          <p>
            Download KloudSentinel WordPress Plugin and get malware scanning, file integrity monitoring and
            security reports running on your site in minutes.
          </p>
          <ul className="feature-list">
            {highlights.map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <div className="actions">
            <a
              href="/kloud101-sentinel.zip"
              download
              className="cta-button inline-flex items-center justify-center gap-2 whitespace-nowrap bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Download Free Version
            </a>
            <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
          </div>
          <p className="sentinel-note">Free forever for personal and small business websites.</p>
        </div>

        <SentinelPreview />
      </div>
    </section>
  );
}
