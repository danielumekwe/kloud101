import type { LucideIcon } from "lucide-react";

export default function StatsStrip({
  stats,
}: {
  stats: { icon: LucideIcon; value: string; label: string }[];
}) {
  return (
    <section className="stats-strip">
      <div className="wrap stats-grid">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="stat">
            <Icon />
            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
