import {
  BadgeCheck,
  Shield,
  Globe,
  Users,
  TrendingUp,
  Mail,
} from "lucide-react";

const benefits = [
  {
    title: "Build Credibility",
    description:
      "Professional email addresses strengthen your brand and create a more trustworthy image.",
    icon: BadgeCheck,
  },
  {
    title: "Increase Customer Trust",
    description:
      "Customers are more likely to engage with businesses using branded email addresses.",
    icon: Mail,
  },
  {
    title: "Secure Communication",
    description:
      "Protect business conversations with enterprise-grade email security.",
    icon: Shield,
  },
  {
    title: "Access Anywhere",
    description:
      "Manage your emails from desktop, tablet or mobile devices anytime.",
    icon: Globe,
  },
  {
    title: "Improve Team Collaboration",
    description:
      "Shared communication tools help teams work together efficiently.",
    icon: Users,
  },
  {
    title: "Scale As You Grow",
    description:
      "Add new mailboxes and users as your business expands.",
    icon: TrendingUp,
  },
];

export default function BusinessEmailBenefits() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Benefits
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Why Businesses Choose
            Professional Email
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            Stand out from competitors and build stronger relationships
            with customers using a professional business email solution.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-blue-50 border border-slate-200 rounded-2xl p-8"
            >
              <benefit.icon
                size={42}
                className="text-blue-500 mb-5"
              />

              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}