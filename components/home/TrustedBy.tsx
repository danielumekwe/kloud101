import Image from "next/image";

const logos = [
  {
    name: "InterServer",
    src: "/logos/interserver.png",
  },
  {
    name: "cPanel",
    src: "/logos/cpanel.png",
  },
  {
    name: "CloudLinux",
    src: "/logos/cloudlinux.png",
  },
  {
    name: "LiteSpeed",
    src: "/logos/litespeed.png",
  },
  {
    name: "Softaculous",
    src: "/logos/softaculous.png",
  },
  {
    name: "WHMCS",
    src: "/logos/whmcs.png",
  },
];

export default function TrustedBy() {
  return (
    <section className="py-24 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-sm uppercase tracking-[0.3em] text-gray-500 mb-14">
          Powered By Industry Leading Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">

          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex justify-center items-center opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}