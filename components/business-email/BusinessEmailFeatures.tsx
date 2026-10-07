import { Calendar, Globe, Lock, Mail, Send, Shield, Smartphone, Users } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import FeatureGrid from "@/components/site/FeatureGrid";

const features = [
  {
    title: "Professional Email Addresses",
    text: "Use your own domain name to create trusted business email addresses.",
    icon: Mail,
  },
  { title: "Webmail Access", text: "Access your email securely from any browser anywhere in the world.", icon: Globe },
  {
    title: "Mobile Synchronization",
    text: "Stay connected on Android and iPhone with seamless email syncing.",
    icon: Smartphone,
  },
  {
    title: "Advanced Spam Protection",
    text: "Keep your inbox clean with intelligent spam and malware filtering.",
    icon: Shield,
  },
  { title: "Email Forwarding", text: "Route incoming messages to multiple destinations effortlessly.", icon: Send },
  { title: "Shared Calendars", text: "Coordinate schedules and meetings across your entire organization.", icon: Calendar },
  { title: "Contact Management", text: "Store and manage company contacts in one centralized location.", icon: Users },
  {
    title: "Enterprise Security",
    text: "Protect sensitive communication with encryption and security controls.",
    icon: Lock,
  },
];

export default function BusinessEmailFeatures() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="EMAIL FEATURES"
          title="Everything You Need For Professional Communication"
          text="Powerful business email tools designed to help your team communicate, collaborate and grow efficiently."
        />
        <FeatureGrid items={features} />
      </div>
    </section>
  );
}
