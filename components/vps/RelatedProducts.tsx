import Link from "next/link";
import {
  Server,
  HardDrive,
  Monitor,
  Globe,
  Mail,
  Shield,
} from "lucide-react";

const products = [
  {
    title: "Storage VPS",
    href: "/vps/storage",
    icon: HardDrive,
  },
  {
    title: "Windows VPS",
    href: "/vps/windows",
    icon: Monitor,
  },
  {
    title: "Dedicated Servers",
    href: "/dedicated",
    icon: Server,
  },
  {
    title: "Web Hosting",
    href: "/web-hosting",
    icon: Globe,
  },
  {
    title: "Email Hosting",
    href: "/email-hosting",
    icon: Mail,
  },
  {
    title: "DDoS Protection",
    href: "/ddos-protection",
    icon: Shield,
  },
];

export default function RelatedProducts() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Related Products
          </h2>

          <p className="text-slate-600">
            Explore other infrastructure and hosting solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="border border-slate-200 rounded-2xl p-8 bg-blue-50 hover:border-blue-500 transition"
            >
              <product.icon
                size={42}
                className="text-blue-500 mb-6"
              />

              <h3 className="text-2xl font-semibold">
                {product.title}
              </h3>
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}