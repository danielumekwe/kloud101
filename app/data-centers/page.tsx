import { Clock, Cloud, MapPin, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/site/PageHero";
import StatsStrip from "@/components/site/StatsStrip";
import SectionHeading from "@/components/site/SectionHeading";
import LocationExplorer from "@/components/site/LocationExplorer";
import ClosingCta from "@/components/site/ClosingCta";
import CtaLink from "@/components/site/CtaLink";
import { dataCenters } from "@/components/site/locations";

const stats = [
  { icon: Zap, value: "99.9%", label: "Network Uptime" },
  { icon: Clock, value: "24/7", label: "On-Site Monitoring" },
  { icon: Cloud, value: "8+", label: "Global Locations" },
  { icon: MapPin, value: "N+1", label: "Power & Cooling Redundancy" },
];

export default function DataCentersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        breadcrumb="Data Centers"
        eyebrow="GLOBAL INFRASTRUCTURE"
        title="Data Centers Built For Performance"
        description="Deploy closer to your customers across our network of strategically located facilities, each built for low latency, redundancy and maximum uptime."
        icon={MapPin}
      />

      <StatsStrip stats={stats} />

      <section className="section global-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="OUR LOCATIONS"
            title="Our Locations"
            text="Every facility is monitored around the clock and connected through carrier-grade network links."
          />
          <LocationExplorer />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="comparison-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Location</th>
                  <th scope="col">Country</th>
                  <th scope="col">Facility</th>
                  <th scope="col">Network</th>
                </tr>
              </thead>
              <tbody>
                {dataCenters.map((dc) => (
                  <tr key={dc.code}>
                    <th scope="row">{dc.city}</th>
                    <td>{dc.country}</td>
                    <td>{dc.tier} Facility</td>
                    <td>{dc.network}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ClosingCta
        title="Ready To Deploy?"
        text="Spin up a VPS or dedicated server in the region closest to your customers."
        actions={
          <>
            <CtaLink href="/vps">View VPS Plans</CtaLink>
            <CtaLink href="/contact" variant="outline">Talk To Sales</CtaLink>
          </>
        }
      />

      <Footer />
    </main>
  );
}
