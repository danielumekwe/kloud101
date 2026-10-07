import { MapPin } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const locations = ["New York", "Dallas", "Los Angeles", "London", "Amsterdam", "Singapore"];

export default function DedicatedLocations() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading
          eyebrow="LOCATIONS"
          title="Global Data Centers"
          text="Deploy dedicated servers closer to your customers."
        />
        <div className="os-band os-band-icons">
          {locations.map((location) => (
            <span key={location}>
              <MapPin aria-hidden="true" />
              {location}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
