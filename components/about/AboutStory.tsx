import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="text-blue-500 uppercase tracking-wider font-semibold">
              Our Journey
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              What's Our Story?
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">

              <p>
              Founded with a vision to simplify cloud infrastructure, Kloud101 was created to bridge the gap between 
              enterprise-grade technology and affordable hosting solutions. We recognized that many businesses, startups, 
              developers, and agencies needed reliable cloud services without 
              the complexity and high costs often associated with large-scale infrastructure providers.
              </p>

              <p>
                What began as a commitment to delivering dependable web hosting has evolved 
                into a comprehensive cloud platform offering VPS hosting, dedicated servers, 
                business email solutions, and scalable infrastructure services. Our focus has always 
                remained the same: providing powerful technology backed by 
                exceptional customer support and transparent pricing.
              </p>

              <p>
                At Kloud101, we believe that technology should empower growth, not create barriers. 
                Every service we offer is designed to help businesses launch faster, scale confidently, 
                and operate securely in an increasingly digital world. 
                Whether you're building your first website, managing mission-critical applications, 
                or deploying enterprise workloads, our infrastructure is engineered to deliver performance, reliability, and peace of mind.
              </p>

              <p>
                Today, Kloud101 serves customers across multiple industries and regions, 
                helping organizations of all sizes leverage modern cloud technology to achieve 
                their goals. As we continue to grow, we remain dedicated to innovation, 
                customer success, and delivering infrastructure solutions that businesses can trust.

              </p>
              <p>
                Our journey is only beginning. With a strong foundation, a passionate team, and a commitment 
                to excellence, Kloud101 is building the future of cloud hosting—one customer success story at a time.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <Image
              src="/about/story-illustration.png"
              alt="Our Story"
              width={600}
              height={1000}
              className="object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}