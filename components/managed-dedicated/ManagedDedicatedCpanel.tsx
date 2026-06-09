import Image from "next/image";
import {
  Globe,
  Mail,
  Database,
  Shield,
  HardDrive,
  Settings,
  CheckCircle,
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
    title: "Automated Backups",
    icon: HardDrive,
  },
  {
    title: "WHM Administration",
    icon: Settings,
  },
];

export default function ManagedDedicatedCpanel() {
  return (
    <section className="py-24 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              cPanel & WHM Included
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Enterprise Server
              Management Made Easy
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every Managed Dedicated Server includes
              cPanel & WHM, providing a powerful interface
              for managing websites, hosting accounts,
              email services, databases and server resources.
            </p>

            <div className="space-y-4 mb-10">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span>Unlimited Hosting Accounts</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span>Centralized Server Management</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span>Advanced Security Controls</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <span>Backup & Restore Tools</span>
              </div>

            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3"
                >
                  <feature.icon
                    size={18}
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
              alt="cPanel WHM"
              width={700}
              height={500}
              className="rounded-3xl border border-slate-800"
            />

          </div>

        </div>

      </div>

    </section>
  );
}