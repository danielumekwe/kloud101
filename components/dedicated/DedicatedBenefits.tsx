// components/dedicated/DedicatedBenefits.tsx

import { Check } from "lucide-react";

export default function DedicatedBenefits() {
  return (
    <section className="py-24 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-wider font-semibold">
            Enterprise Infrastructure
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6 max-w-5xl mx-auto">
            Dedicated hardware with
            complete control and
            predictable performance.
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Perfect for high-traffic websites, databases,
            virtualization, SaaS platforms and enterprise workloads.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Main Card */}

          <div className="lg:col-span-1 border border-blue-500 rounded-2xl p-8 bg-white">

            <span className="text-blue-500 text-sm uppercase font-semibold">
              Included With Every Server
            </span>

            <h3 className="text-3xl font-bold mt-4 mb-8">
              Your own physical hardware.
            </h3>

            <div className="space-y-5 mb-10">

              <div className="flex gap-3">
                <Check className="text-green-500 mt-1" size={20} />
                <span>100% dedicated CPU resources.</span>
              </div>

              <div className="flex gap-3">
                <Check className="text-green-500 mt-1" size={20} />
                <span>Dedicated RAM and storage.</span>
              </div>

              <div className="flex gap-3">
                <Check className="text-green-500 mt-1" size={20} />
                <span>Full root or administrator access.</span>
              </div>

              <div className="flex gap-3">
                <Check className="text-green-500 mt-1" size={20} />
                <span>No noisy neighbors or shared resources.</span>
              </div>

            </div>

            <button className="bg-blue-600 px-6 py-3 rounded-xl">
              Configure Server
            </button>

          </div>

          {/* Side Blocks */}

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Remote Management",
                text: "IPMI, KVM and remote reboot access.",
              },
              {
                title: "NVMe Storage",
                text: "Ultra-fast storage for demanding workloads.",
              },
              {
                title: "Private Networking",
                text: "Connect multiple servers securely.",
              },
              {
                title: "DDoS Protection",
                text: "Enterprise-grade attack mitigation.",
              },
              {
                title: "Multiple Datacenters",
                text: "Deploy closer to your customers.",
              },
              {
                title: "Managed Services",
                text: "Optional management and monitoring.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-slate-200 rounded-2xl p-6 bg-white"
              >
                <h4 className="text-xl font-semibold mb-3">
                  {item.title}
                </h4>

                <p className="text-slate-600">
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