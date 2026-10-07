export interface DataCenter {
  code: string;
  city: string;
  country: string;
  /** ISO 3166-1 alpha-2, lowercase — matches /public/flags/{flag}.svg */
  flag: string;
  region: "North America" | "Europe" | "Asia";
  tier: string;
  network: string;
}

export const dataCenters: DataCenter[] = [
  { code: "NYC", city: "New York", country: "United States", flag: "us", region: "North America", tier: "Tier III", network: "10Gbps Network" },
  { code: "DAL", city: "Dallas", country: "United States", flag: "us", region: "North America", tier: "Tier III", network: "10Gbps Network" },
  { code: "LAX", city: "Los Angeles", country: "United States", flag: "us", region: "North America", tier: "Tier III", network: "10Gbps Network" },
  { code: "TOR", city: "Toronto", country: "Canada", flag: "ca", region: "North America", tier: "Tier III", network: "10Gbps Network" },
  { code: "LON", city: "London", country: "United Kingdom", flag: "gb", region: "Europe", tier: "Tier III", network: "10Gbps Network" },
  { code: "AMS", city: "Amsterdam", country: "Netherlands", flag: "nl", region: "Europe", tier: "Tier III", network: "10Gbps Network" },
  { code: "FRA", city: "Frankfurt", country: "Germany", flag: "de", region: "Europe", tier: "Tier III", network: "10Gbps Network" },
  { code: "SIN", city: "Singapore", country: "Singapore", flag: "sg", region: "Asia", tier: "Tier III", network: "10Gbps Network" },
];

export const regions = ["North America", "Europe", "Asia"] as const;
