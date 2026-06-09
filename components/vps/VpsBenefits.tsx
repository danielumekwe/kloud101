import { Check } from "lucide-react";

export default function VpsBenefits() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Platform Details
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6 max-w-5xl mx-auto">
            A cloud VPS for projects that need
            isolation, root access, and room
            to tune the stack.
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Kloud101 Cloud VPS gives you dedicated resources,
            predictable pricing, flexible deployment options
            and enterprise-grade infrastructure.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Large Card */}

          <div className="lg:col-span-1 border border-blue-500 rounded-2xl p-8 bg-black">

            <span className="text-blue-500 text-sm uppercase font-semibold">
              Included With Every VPS
            </span>

            <h3 className="text-3xl font-bold mt-4 mb-8">
              Control the server from the operating system up.
            </h3>

            <div className="space-y-5 mb-10">

              <div className="flex gap-3">
                <Check className="text-green-500 mt-1" size={20} />
                <span>
                  Full root access for Linux VPS and administrator
                  access for Windows VPS.
                </span>
              </div>

              <div className="flex gap-3">
                <Check className="text-green-500 mt-1" size={20} />
                <span>
                  KVM virtualization for secure workload isolation.
                </span>
              </div>

              <div className="flex gap-3">
                <Check className="text-green-500 mt-1" size={20} />
                <span>
                  Static public IP addresses for predictable networking.
                </span>
              </div>

              <div className="flex gap-3">
                <Check className="text-green-500 mt-1" size={20} />
                <span>
                  NVMe SSD storage and high-speed network connectivity.
                </span>
              </div>

            </div>

            <div className="flex gap-4">

              <button className="bg-blue-600 px-6 py-3 rounded-xl">
                Configure VPS
              </button>

              <button className="border border-slate-700 px-6 py-3 rounded-xl">
                Windows VPS
              </button>

            </div>

          </div>

          {/* Right Grid */}

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Managed Support",
                text: "Our engineers can assist with server administration and troubleshooting.",
              },
              {
                title: "Control Panels",
                text: "Deploy cPanel, DirectAdmin, Plesk, CyberPanel or Webmin.",
              },
              {
                title: "Backup Options",
                text: "Protect your applications and databases with backup services.",
              },
              {
                title: "Deployment Choices",
                text: "Choose Linux, Windows, WordPress, Docker and more.",
              },
              {
                title: "Global Locations",
                text: "Deploy infrastructure close to your users and applications.",
              },
              {
                title: "Security Isolation",
                text: "Dedicated virtual resources separated from other customers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-slate-800 rounded-2xl p-6 bg-black"
              >
                <h4 className="text-xl font-semibold mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}