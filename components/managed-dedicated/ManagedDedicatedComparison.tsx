import SectionHeading from "@/components/site/SectionHeading";
import ComparisonTable from "@/components/site/ComparisonTable";

const rows = [
  { feature: "cPanel & WHM Included", values: [false, true] },
  { feature: "24/7 Server Monitoring", values: [false, true] },
  { feature: "Security Hardening", values: [false, true] },
  { feature: "Operating System Updates", values: [false, true] },
  { feature: "Automated Backups", values: [false, true] },
  { feature: "Performance Optimization", values: [false, true] },
  { feature: "Database Management", values: [false, true] },
  { feature: "Expert Technical Support", values: [false, true] },
  { feature: "Root Access", values: [true, true] },
  { feature: "Dedicated Hardware", values: [true, true] },
];

export default function ManagedDedicatedComparison() {
  return (
    <section className="section bg-card border-y">
      <div className="wrap">
        <SectionHeading
          eyebrow="COMPARE SOLUTIONS"
          title="Dedicated vs Managed Dedicated"
          text="See why businesses choose Managed Dedicated Servers to eliminate server administration and focus on growth."
        />
        <ComparisonTable
          columns={["Dedicated Server (Self Managed)", "Managed Dedicated (Fully Managed)"]}
          rows={rows}
        />
      </div>
    </section>
  );
}
