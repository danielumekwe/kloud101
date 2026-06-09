import Image from "next/image";
import {
  Mail,
  Globe,
  Database,
  Shield,
  HardDrive,
  Settings,
} from "lucide-react";

const features = [
  {
    title: "Website Management",
    icon: Globe,
  },
  {
    title: "Email Hosting",
    icon: Mail,
  },
  {
    title: "Database Management",
    icon: Database,
  },
  {
    title: "Security Tools",
    icon: Shield,
  },
  {
    title: "Backups",
    icon: HardDrive,
  },
  {
    title: "Server Configuration",
    icon: Settings,
  },
];

export default function ManagedVpsCpanel() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              cPanel Included
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Powerful cPanel &
              WHM Management
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Every Managed VPS includes cPanel & WHM,
              giving you complete control over websites,
              email accounts, databases, backups and
              server administration through an intuitive interface.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3"
                >
                  <feature.icon
                    size={20}
                    className="text-blue-500"
                  />

                  <span>{feature.title}</span>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <Image
              src="/services/cpanel-dashboard.png"
              alt="cPanel Dashboard"
              width={700}
              height={500}
              className="rounded-2xl border border-slate-800"
            />

          </div>

        </div>

      </div>

    </section>
  );
}