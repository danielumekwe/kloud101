import { Cpu, ShieldCheck } from "lucide-react";

export default function RackVisual({
  heading = "DEDICATED COMPUTE",
  label = "BARE METAL",
  units = 5,
}: {
  heading?: string;
  label?: string;
  units?: number;
}) {
  return (
    <div className="rack-visual" aria-label="Dedicated server hardware illustration">
      <div className="rack-heading">
        <Cpu size={16} aria-hidden="true" />
        <span>{heading}</span>
        <span className="rack-label">{label}</span>
      </div>
      {Array.from({ length: units }, (_, index) => (
        <div key={index} className="rack-unit">
          <div className="rack-vent" />
          <div className="rack-vent" />
          <span className="rack-port" />
          <span className="rack-port" />
          <span className="status-dot" />
          <small>{String(index + 1).padStart(2, "0")}</small>
        </div>
      ))}
      <div className="rack-base">
        <span>ISOLATED HARDWARE</span>
        <ShieldCheck size={14} aria-hidden="true" />
        <span>FULL CONTROL</span>
      </div>
    </div>
  );
}
