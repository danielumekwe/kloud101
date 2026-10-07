import SectionHeading from "@/components/site/SectionHeading";
import ComparisonTable from "@/components/site/ComparisonTable";

const rows = [
  { feature: "cPanel Included", values: [false, true] },
  { feature: "Server Monitoring", values: [false, true] },
  { feature: "Security Hardening", values: [false, true] },
  { feature: "Operating System Updates", values: [false, true] },
  { feature: "Automated Backups", values: [false, true] },
  { feature: "Performance Optimization", values: [false, true] },
  { feature: "Expert Technical Support", values: [false, true] },
  { feature: "Root Access", values: [true, true] },
];

export default function ManagedVpsComparison() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="COMPARE SERVICES"
          title="Linux VPS vs Managed VPS"
          text="See why businesses choose Managed VPS hosting for convenience, security and peace of mind."
        />
        <ComparisonTable columns={["Linux VPS (Self Managed)", "Managed VPS (Fully Managed)"]} rows={rows} />
      </div>
    </section>
  );
}
