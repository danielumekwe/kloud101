import { BadgeCheck, Globe, Mail, Shield, TrendingUp, Users } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const benefits = [
  {
    title: "Build Credibility",
    text: "Professional email addresses strengthen your brand and create a more trustworthy image.",
    icon: BadgeCheck,
  },
  {
    title: "Increase Customer Trust",
    text: "Customers are more likely to engage with businesses using branded email addresses.",
    icon: Mail,
  },
  { title: "Secure Communication", text: "Protect business conversations with enterprise-grade email security.", icon: Shield },
  { title: "Access Anywhere", text: "Manage your emails from desktop, tablet or mobile devices anytime.", icon: Globe },
  {
    title: "Improve Team Collaboration",
    text: "Shared communication tools help teams work together efficiently.",
    icon: Users,
  },
  { title: "Scale As You Grow", text: "Add new mailboxes and users as your business expands.", icon: TrendingUp },
];

export default function BusinessEmailBenefits() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="BENEFITS"
          title="Why Businesses Choose Professional Email"
          text="Stand out from competitors and build stronger relationships with customers using a professional business email solution."
        />
        <FeatureGrid items={benefits} columns={3} />
      </div>
    </section>
  );
}
