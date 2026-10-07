import SectionHeading from "@/components/site/SectionHeading";
import LocationExplorer from "@/components/site/LocationExplorer";

export default function GlobalInfrastructure() {
  return (
    <section id="infrastructure" className="section global-section">
      <div className="wrap">
        <SectionHeading
          eyebrow="GLOBAL INFRASTRUCTURE"
          title={
            <>
              Global Infrastructure.
              <br />
              Local Performance.
            </>
          }
          aside={
            <p className="heading-aside">
              Deploy your websites, applications and business workloads closer to your customers through our
              global cloud infrastructure network.
            </p>
          }
        />
        <LocationExplorer note="Strategically located datacenters designed to deliver low latency, maximum uptime and reliable performance for businesses around the world." />
      </div>
    </section>
  );
}
