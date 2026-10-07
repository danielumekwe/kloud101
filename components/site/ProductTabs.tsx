import Link from "next/link";

export const vpsFamily = [
  ["Linux VPS", "/vps"],
  ["Windows VPS", "/vps/windows"],
  ["Storage VPS", "/vps/storage"],
  ["Managed VPS", "/managed-vps"],
] as const;

export const dedicatedFamily = [
  ["Dedicated Servers", "/dedicated"],
  ["Managed Dedicated", "/managed-dedicated"],
] as const;

export default function ProductTabs({
  active,
  items = vpsFamily,
  label = "VPS products",
}: {
  active: string;
  items?: readonly (readonly [string, string])[];
  label?: string;
}) {
  return (
    <nav className="product-tabs" aria-label={label}>
      <div className="wrap">
        {items.map(([name, href]) => (
          <Link key={href} href={href} aria-current={href === active ? "page" : undefined}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
