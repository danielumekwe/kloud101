import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Star } from "lucide-react";

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
    <main className="min-h-screen bg-blue-50 text-slate-900">

      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-blue-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Customer Reviews
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6 leading-tight">
            What Our Customers Say
          </h1>

          <p className="text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto">
            A few words from the businesses running on Kloud101 infrastructure.
          </p>

        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-5 text-blue-600">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 flex-1">
                  &ldquo;{review.quote}&rdquo;
                </p>

                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-slate-500 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready To Get Started?</h2>
          <p className="text-slate-600 mb-8">
            Join businesses running on managed infrastructure they can rely on.
          </p>
          <Link
            href="/vps"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
          >
            View Plans
          </Link>
        </div>
      </section>

      <Footer />

    </main>
  );
}
