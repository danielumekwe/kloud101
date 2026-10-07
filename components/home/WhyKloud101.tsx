import Eyebrow from "@/components/site/Eyebrow";
import CtaLink from "@/components/site/CtaLink";

export default function WhyKloud101() {
  return (
    <section className="section why-section">
      <div className="wrap detail-layout">
        <div>
          <Eyebrow>WHY KLOUD101</Eyebrow>
          <h2>
            Built For Businesses.
            <br />
            Powered By Reliable Infrastructure.
          </h2>
          <p>Helping businesses launch, grow and scale with confidence.</p>
          <div className="actions mt-7">
            <CtaLink href="/about">Learn More About Us</CtaLink>
            <CtaLink href="/contact" variant="outline">Contact Sales</CtaLink>
          </div>
        </div>
        <div className="story-block">
          <p>
            At Kloud101, we believe technology should empower businesses, not complicate them. That&apos;s why
            we&apos;ve built a cloud platform focused on reliability, security and simplicity.
          </p>
          <p>
            From managed VPS hosting and dedicated servers to business email and backup solutions, our services
            are designed to remove the complexity of managing infrastructure while giving you the performance and
            flexibility your business deserves.
          </p>
          <p>
            Whether you&apos;re launching a startup, running an agency, managing an eCommerce platform or scaling an
            enterprise, Kloud101 provides the tools, support and infrastructure needed to help you succeed online.
          </p>
        </div>
      </div>
    </section>
  );
}
