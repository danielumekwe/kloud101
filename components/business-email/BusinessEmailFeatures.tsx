import {
  Mail,
  Smartphone,
  Shield,
  Calendar,
  Users,
  Send,
  Globe,
  Lock,
} from "lucide-react";

const features = [
  {
    title: "Professional Email Addresses",
    description:
      "Use your own domain name to create trusted business email addresses.",
    icon: Mail,
  },
  {
    title: "Webmail Access",
    description:
      "Access your email securely from any browser anywhere in the world.",
    icon: Globe,
  },
  {
    title: "Mobile Synchronization",
    description:
      "Stay connected on Android and iPhone with seamless email syncing.",
    icon: Smartphone,
  },
  {
    title: "Advanced Spam Protection",
    description:
      "Keep your inbox clean with intelligent spam and malware filtering.",
    icon: Shield,
  },
  {
    title: "Email Forwarding",
    description:
      "Route incoming messages to multiple destinations effortlessly.",
    icon: Send,
  },
  {
    title: "Shared Calendars",
    description:
      "Coordinate schedules and meetings across your entire organization.",
    icon: Calendar,
  },
  {
    title: "Contact Management",
    description:
      "Store and manage company contacts in one centralized location.",
    icon: Users,
  },
  {
    title: "Enterprise Security",
    description:
      "Protect sensitive communication with encryption and security controls.",
    icon: Lock,
  },
];

export default function BusinessEmailFeatures() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Email Features
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-4">
            Everything You Need
            For Professional Communication
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Powerful business email tools designed to help your team
            communicate, collaborate and grow efficiently.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black border border-slate-800 rounded-2xl p-6"
            >
              <feature.icon
                size={42}
                className="text-blue-500 mb-4"
              />

              <h3 className="text-lg font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}