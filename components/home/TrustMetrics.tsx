import { Cloud, Headphones, Settings, Zap } from "lucide-react";
import StatsStrip from "@/components/site/StatsStrip";

const metrics = [
  { icon: Zap, value: "99.9%", label: "Network Uptime" },
  { icon: Headphones, value: "24/7", label: "Expert Support" },
  { icon: Settings, value: "100%", label: "Managed Services" },
  { icon: Cloud, value: "8+", label: "Global Locations" },
];

export default function TrustMetrics() {
  return <StatsStrip stats={metrics} />;
}
