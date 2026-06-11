"use client";

import Image from "next/image";
import Link from "next/link";
import CurrencySwitcher from "@/components/CurrencySwitcher";
import { useState, useRef, useEffect } from "react";
import {
  Server,
  Settings,
  Shield,
  Mail,
  Cloud,
  ChevronDown,
  Menu,
  X,
  Cpu,
  HardDrive,
  ArrowRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ActiveMenu = "cloud" | "servers" | null;

interface NavProduct {
  href: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  badge?: string;
  colSpan?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const cloudProducts: NavProduct[] = [
  {
    href: "/managed-vps",
    icon: <Server className="h-5 w-5" />,
    label: "Managed VPS",
    description: "Fully managed VPS with cPanel included. Root access, SSD NVMe storage.",
    badge: "Popular",
  },
  {
    href: "/cloud-hosting",
    icon: <Cloud className="h-5 w-5" />,
    label: "Cloud Hosting",
    description: "Scalable cloud hosting with auto-scaling and 99.99% uptime SLA.",
  },
  {
    href: "/business-email",
    icon: <Mail className="h-5 w-5" />,
    label: "Business Email",
    description: "Professional email hosting with spam filtering and 50GB mailboxes.",
  },
  {
    href: "/backup-security",
    icon: <Shield className="h-5 w-5" />,
    label: "Backup & Security",
    description: "Automated backups, DDoS protection, SSL and disaster recovery.",
  },
];

const serverProducts: NavProduct[] = [
  {
    href: "/dedicated",
    icon: <HardDrive className="h-5 w-5" />,
    label: "Dedicated Servers",
    description: "Bare metal servers with full root control, IPMI access and RAID.",
  },
  {
    href: "/managed-dedicated",
    icon: <Cpu className="h-5 w-5" />,
    label: "Managed Dedicated",
    description: "Enterprise dedicated servers with 24/7 managed support and cPanel.",
    badge: "New",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: NavProduct }) {
  return (
    <Link
      href={product.href}
      className={`group relative flex gap-4 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-150 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-sm ${
        product.colSpan ? "col-span-2" : ""
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600">
        {product.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-slate-900 group-hover:text-blue-700">
            {product.label}
          </span>
          {product.badge && (
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
              {product.badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          {product.description}
        </p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 self-start text-slate-300 opacity-0 transition-opacity group-hover:opacity-100 mt-0.5" />
    </Link>
  );
}

function DropdownMenu({
  title,
  subtitle,
  products,
  footer,
}: {
  title: string;
  subtitle: string;
  products: NavProduct[];
  footer?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 ring-1 ring-black/5">
      {/* Header */}
      <div className="border-b border-slate-100 px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          {title}
        </p>
        <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 gap-2 p-4">
        {products.map((product) => (
          <ProductCard key={product.href} product={product} />
        ))}
      </div>

      {/* Footer */}
      {footer && (
        <div className="border-t border-slate-100 px-6 py-3">{footer}</div>
      )}
    </div>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<"cloud" | "servers" | null>(null);

  const toggleSection = (section: "cloud" | "servers") => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black lg:hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
        <Link href="/" onClick={onClose}>
          <Image src="/logo.svg" alt="Kloud101" width={140} height={38} priority />
        </Link>
        <button
          onClick={onClose}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        <Link
          href="/"
          onClick={onClose}
          className="block rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition"
        >
          Home
        </Link>

        {/* Cloud Services accordion */}
        <div>
          <button
            onClick={() => toggleSection("cloud")}
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition"
          >
            Cloud Services
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                openSection === "cloud" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === "cloud" && (
            <div className="mt-1 ml-3 space-y-1 border-l border-slate-800 pl-3">
              {cloudProducts.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2.5 text-base text-slate-400 hover:text-white transition"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Servers accordion */}
        <div>
          <button
            onClick={() => toggleSection("servers")}
            className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition"
          >
            Servers
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                openSection === "servers" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === "servers" && (
            <div className="mt-1 ml-3 space-y-1 border-l border-slate-800 pl-3">
              {serverProducts.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2.5 text-base text-slate-400 hover:text-white transition"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/about"
          onClick={onClose}
          className="block rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition"
        >
          About
        </Link>

        <Link
          href="/contact"
          onClick={onClose}
          className="block rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition"
        >
          Contact
        </Link>
      </div>

      {/* Auth */}
      <div className="border-t border-slate-800 px-6 py-5 space-y-3">
        <div className="mb-4">
  <p className="text-sm text-slate-500 mb-2">
    Currency
  </p>

  <CurrencySwitcher />
</div>
        <Link
          href="/login"
          onClick={onClose}
          className="block w-full rounded-lg border border-slate-700 px-4 py-3 text-center text-base font-medium text-slate-300 hover:border-slate-500 hover:text-white transition"
        >
          Login
        </Link>
        <Link
          href="/register"
          onClick={onClose}
          className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-base font-semibold text-white hover:bg-blue-500 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMenu = (menu: ActiveMenu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-40 flex items-center justify-between px-6 py-0 lg:px-10 bg-black text-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/40" : ""
        }`}
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center py-5">
          <Image
            src="/logo.svg"
            alt="Kloud101"
            width={160}
            height={44}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition"
          >
            Home
          </Link>

          {/* Cloud Services */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("cloud")}
            onMouseLeave={closeMenu}
          >
            <button
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-base font-medium transition ${
                activeMenu === "cloud"
                  ? "bg-white/8 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Cloud Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeMenu === "cloud" ? "rotate-180 text-blue-400" : "text-slate-500"
                }`}
              />
            </button>

            {activeMenu === "cloud" && (
              <div
                className="absolute left-1/2 top-full w-[660px] -translate-x-1/2 pt-3"
                onMouseEnter={keepOpen}
                onMouseLeave={closeMenu}
              >
                {/* Arrow */}
                <div className="absolute left-1/2 top-1.5 -translate-x-1/2">
                  <div className="h-2 w-4 overflow-hidden">
                    <div className="mx-auto h-3 w-3 rotate-45 border-l border-t border-slate-200 bg-white translate-y-1" />
                  </div>
                </div>

                <DropdownMenu
                  title="Cloud Services"
                  subtitle="Everything you need to host, scale and protect your business."
                  products={cloudProducts}
                  footer={
                    <Link
                      href="/pricing"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-500 transition"
                    >
                      View all pricing
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  }
                />
              </div>
            )}
          </div>

          {/* Servers */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("servers")}
            onMouseLeave={closeMenu}
          >
            <button
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-base font-medium transition ${
                activeMenu === "servers"
                  ? "bg-white/8 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Servers
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  activeMenu === "servers" ? "rotate-180 text-blue-400" : "text-slate-500"
                }`}
              />
            </button>

            {activeMenu === "servers" && (
              <div
                className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                onMouseEnter={keepOpen}
                onMouseLeave={closeMenu}
              >
                {/* Arrow */}
                <div className="absolute left-1/2 top-1.5 -translate-x-1/2">
                  <div className="h-2 w-4 overflow-hidden">
                    <div className="mx-auto h-3 w-3 rotate-45 border-l border-t border-slate-200 bg-white translate-y-1" />
                  </div>
                </div>

                <DropdownMenu
                  title="Server Solutions"
                  subtitle="Bare metal and managed dedicated infrastructure."
                  products={serverProducts}
                  footer={
                    <Link
                      href="/servers"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-500 transition"
                    >
                      Compare server specs
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  }
                />
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Desktop auth */}
        <div className="hidden items-center gap-3 lg:flex">
          <CurrencySwitcher />
          <Link
            href="/login"
            className="rounded-lg border border-white/10 px-4 py-2 text-base font-medium text-slate-300 hover:border-white/20 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-base font-semibold text-white hover:bg-blue-500 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white transition lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
