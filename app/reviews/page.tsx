import { Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/site/PageHero";
import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";

const reviews = [
  {
    quote:
      "Migrating our stack over was painless and support answered every question within minutes. Uptime has been rock solid since.",
    name: "Ada O.",
    role: "Backend Engineer",
  },
  {
    quote:
      "We run a busy e-commerce store and the VPS performance during peak traffic has been consistently fast without any manual tuning.",
    name: "Marcus T.",
    role: "Store Owner",
  },
  {
    quote:
      "Support actually knows what they're talking about. Every ticket we've opened has been resolved by someone who understood the issue immediately.",
    name: "Priya S.",
    role: "DevOps Lead",
  },
  {
    quote:
      "Straightforward pricing, no surprise fees, and scaling up to a bigger plan took less than five minutes.",
    name: "Daniel K.",
    role: "Founder",
  },
  {
    quote:
      "Business email hosting just works. Deliverability has been better than our previous provider and setup took one afternoon.",
    name: "Grace N.",
    role: "Operations Manager",
  },
  {
    quote:
      "Dedicated server onboarding was handled end to end by their team. Would recommend to anyone tired of managing bare metal themselves.",
    name: "Femi A.",
    role: "CTO",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        breadcrumb="Reviews"
        eyebrow="CUSTOMER REVIEWS"
        title="What Our Customers Say"
        description="A few words from the businesses running on Kloud101 infrastructure."
        icon={Star}
      />

      <section className="section">
        <div className="wrap review-grid">
          {reviews.map((review) => (
            <figure key={review.name} className="review-card">
              <div className="review-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ClosingCta
        title="Ready To Get Started?"
        text="Join businesses running on managed infrastructure they can rely on."
        actions={<CtaLink href="/vps">View Plans</CtaLink>}
      />

      <Footer />
    </main>
  );
}
