import Link from "next/link";
import { ArrowRight, Gauge, Globe2, LifeBuoy, Star } from "lucide-react";
import Eyebrow from "@/components/site/Eyebrow";
import CtaLink from "@/components/site/CtaLink";

const links = [
  { label: "Contact Support", text: "Reach the support team, 24/7.", href: "/contact", icon: LifeBuoy },
  { label: "Speed Test", text: "Check network performance before you commit.", href: "/speed-test", icon: Gauge },
  { label: "Data Centers", text: "See where our infrastructure lives.", href: "/data-centers", icon: Globe2 },
  { label: "Reviews", text: "Read what customers say about Kloud101.", href: "/reviews", icon: Star },
];

export default function SupportResources() {
  return (
    <section className="section">
      <div className="wrap detail-layout">
        <div>
          <Eyebrow>GET THE MOST FROM KLOUD101</Eyebrow>
          <h2>Useful Resources After You Choose A Plan</h2>
          <p>
            Reach the support team, check where our infrastructure lives, or see what&apos;s guaranteed before you
            commit to a plan.
          </p>
          <div className="support-note">
            <h3>Support That Scales With You.</h3>
            <p>
              Kloud101 pairs managed VPS, dedicated servers and business email in one account, backed by engineers
              who step in the moment your workload outgrows the plan it started on.
            </p>
            <CtaLink href="/contact">Contact Sales</CtaLink>
          </div>
        </div>
        <div className="resources-list">
          {links.map(({ label, text, href, icon: Icon }) => (
            <Link key={label} href={href}>
              <Icon />
              <span>
                <strong>{label}</strong>
                <p>{text}</p>
              </span>
              <ArrowRight className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
