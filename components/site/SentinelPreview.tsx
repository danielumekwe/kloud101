import { Check, LockKeyhole, ShieldCheck } from "lucide-react";

const scans = [
  ["Malware scan", "No threats found"],
  ["File integrity", "No changes detected"],
  ["Vulnerability scan", "Checks complete"],
];

/** Illustrative security report card used on dark Sentinel sections. */
export default function SentinelPreview() {
  return (
    <div className="sentinel-preview" aria-label="Illustrative Sentinel security report">
      <div className="sentinel-preview-header">
        <ShieldCheck />
        <strong>sentinel</strong>
        <span>SECURITY OVERVIEW</span>
      </div>
      <div className="security-status">
        <div className="security-emblem">
          <ShieldCheck />
        </div>
        <span className="eyebrow">EXAMPLE SECURITY REPORT</span>
        <h3>
          Your infrastructure.
          <br />
          A clearer picture.
        </h3>
      </div>
      <div className="scan-list">
        {scans.map(([label, status]) => (
          <div key={label}>
            <Check />
            <span>{label}</span>
            <small>{status}</small>
          </div>
        ))}
      </div>
      <div className="preview-bottom">
        <span className="status-dot" />
        ILLUSTRATIVE PRODUCT PREVIEW
        <LockKeyhole />
      </div>
    </div>
  );
}
