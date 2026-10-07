"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Cloud,
  Cpu,
  HardDrive,
  Mail,
  Menu,
  Monitor,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Terminal,
  X,
  type LucideIcon,
} from "lucide-react";
import Brand from "@/components/layout/Brand";
import CurrencySwitcher from "@/components/CurrencySwitcher";

// ─── Data ─────────────────────────────────────────────────────────────────────

type ActiveMenu = "products" | "services" | "company" | null;

interface NavProduct {
  href: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

const products: NavProduct[] = [
  { href: "/vps", icon: Terminal, label: "Linux VPS", description: "Fast KVM virtual servers with full root access." },
  { href: "/vps/windows", icon: Monitor, label: "Windows VPS", description: "Windows Server with Remote Desktop access." },
  { href: "/vps/storage", icon: HardDrive, label: "Storage VPS", description: "Massive storage for backups and file hosting." },
  { href: "/managed-vps", icon: Settings, label: "Managed VPS", description: "Fully managed VPS with cPanel included." },
  { href: "/dedicated", icon: Server, label: "Dedicated Servers", description: "Bare metal servers with full root control." },
  { href: "/managed-dedicated", icon: Cpu, label: "Managed Dedicated", description: "Dedicated servers with 24/7 managed support." },
];

const services: NavProduct[] = [
  { href: "/cloud-hosting", icon: Cloud, label: "Cloud Hosting", description: "Scalable cloud hosting with 99.99% uptime SLA." },
  { href: "/business-email", icon: Mail, label: "Business Email", description: "Professional email on your own domain." },
  { href: "/backup-security", icon: Shield, label: "Backup & Security", description: "Automated backups, DDoS protection and SSL." },
  { href: "/sentinel", icon: ShieldCheck, label: "KloudSentinel", description: "AI-powered malware detection for your sites." },
];

const company = [
  { href: "/about", label: "About Kloud101" },
  { href: "/reviews", label: "Customer reviews" },
  { href: "/contact", label: "Contact & support" },
];

const mobileGroups = [
  { label: "Products", items: products },
  { label: "Services", items: services },
  { label: "Company", items: company },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProductsDropdown({ items, onNavigate }: { items: NavProduct[]; onNavigate: () => void }) {
  return (
    <div className="products-dropdown">
      {items.map(({ href, icon: Icon, label, description }) => (
        <Link key={href} href={href} onClick={onNavigate}>
          <Icon />
          <span>
            <strong>{label}</strong>
            <small>{description}</small>
          </span>
          <ArrowUpRight />
        </Link>
      ))}
    </div>
  );
}

function MenuButton({
  label,
  open,
  onClick,
}: {
  label: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center"
      aria-expanded={open}
      onClick={onClick}
    >
      {label}
      <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const close = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  const toggle = (menu: Exclude<ActiveMenu, null>) =>
    setActiveMenu((current) => (current === menu ? null : menu));

  // Close menus on outside click or Escape
  useEffect(() => {
    if (!activeMenu && !mobileOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeMenu, mobileOpen]);

  return (
    <header ref={headerRef} className="site-header print:hidden">
      <div className="wrap nav-row">
        <Brand onClick={close} />

        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-menu">
            <MenuButton label="Products" open={activeMenu === "products"} onClick={() => toggle("products")} />
            {activeMenu === "products" && <ProductsDropdown items={products} onNavigate={close} />}
          </div>

          <div className="nav-menu">
            <MenuButton label="Services" open={activeMenu === "services"} onClick={() => toggle("services")} />
            {activeMenu === "services" && <ProductsDropdown items={services} onNavigate={close} />}
          </div>

          <Link href="/data-centers" onClick={close}>Data Centers</Link>
          <Link href="/ai-hosting-advisor" onClick={close}>AI Advisor</Link>

          <div className="nav-menu">
            <MenuButton label="Company" open={activeMenu === "company"} onClick={() => toggle("company")} />
            {activeMenu === "company" && (
              <div className="company-dropdown">
                {company.map(({ href, label }) => (
                  <Link key={href} href={href} onClick={close}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" onClick={close}>Pricing</Link>
        </nav>

        <div className="nav-actions">
          <div className="nav-currency">
            <CurrencySwitcher />
          </div>
          <a className="login-link" href="https://my.kloud101.com/login">
            Log in
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://my.kloud101.com/register"
            className="nav-cta inline-flex items-center justify-center gap-2 whitespace-nowrap bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started
            <ArrowRight className="size-4" />
          </a>
          <button
            type="button"
            className="mobile-toggle items-center justify-center rounded-md hover:bg-accent"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mobile-drawer" aria-label="Mobile navigation">
          {mobileGroups.map((group) => {
            const open = mobileSection === group.label;
            return (
              <div key={group.label} className="mobile-group">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setMobileSection(open ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <div className="mobile-group-links">
                    {group.items.map(({ href, label }) => (
                      <Link key={href} href={href} onClick={close}>
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {[
            ["Data Centers", "/data-centers"],
            ["AI Hosting Advisor", "/ai-hosting-advisor"],
            ["Pricing", "/pricing"],
          ].map(([label, href]) => (
            <Link key={href} href={href} onClick={close}>
              {label}
              <ArrowRight size={16} />
            </Link>
          ))}
          <div className="mobile-footer">
            <a href="https://my.kloud101.com/login">
              Log in
              <ArrowUpRight size={14} />
            </a>
            <CurrencySwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
