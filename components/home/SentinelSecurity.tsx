import { Check } from "lucide-react";
import Link from "next/link";
import Eyebrow from "@/components/site/Eyebrow";
import CtaLink from "@/components/site/CtaLink";
import Image from "next/image";

const highlights = ["Malware & vulnerability scanning", "File integrity monitoring", "Real-time threat alerts"];

export default function SentinelSecurity() {
  return (
    <section className="section sentinel-section">
      <div className="wrap sentinel-layout">
        <div>
          <Eyebrow>KLOUDSENTINEL SECURITY</Eyebrow>
          <h2>
            Protect Your Website
            <br />
            <span>Before Threats Strike</span>
          </h2>
          <p>
            KloudSentinel is our AI-powered security platform that detects malware, vulnerabilities and
            unauthorized changes across WordPress, hosting servers and cloud infrastructure.
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
            <CtaLink href="/sentinel">Explore KloudSentinel</CtaLink>
            <Link href="/sentinel#download" className="font-semibold text-primary underline-offset-4 hover:underline">
              Download Free Plugin
            </Link>
          </div>
        </div>
        <div className="sentinel-shot">
          <Image
            src="/images/sentinel-dashboard.png"
            alt="KloudSentinel security dashboard showing protected websites, threats detected and recent security events"
            width={1536}
            height={1024}
            sizes="(max-width: 980px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
