"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/appointment", label: "Appointment" },
  { href: "/contact", label: "Contact" },
];

const BUSINESS_PHONE = "(815) 630-3149";
const BUSINESS_PHONE_LINK = "tel:8156303149";
const SPANISH_WHATSAPP_LINK =
  "https://api.whatsapp.com/send?phone=16307551481";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo-v3.png"
            alt="Castillo's Auto Service Logo"
            width={320}
            height={80}
            className="h-auto w-auto rounded-xl object-contain ring-1 ring-white/10 sm:h-16"
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Castillos Brothers
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/55">
              Auto Service
            </p>
          </div>
          
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-white/65 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href={BUSINESS_PHONE_LINK}
            className="hidden items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{BUSINESS_PHONE}</span>
          </Link>

          <Link
            href={SPANISH_WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Hablamos español on WhatsApp"
            className="hidden items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-600/90 p-2.5 text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-500 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
          </Link>

          {/* Hamburger — mobile only */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-[#050816]/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm uppercase tracking-[0.2em] text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href={BUSINESS_PHONE_LINK}
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/40 bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-500"
            >
              <Phone className="h-4 w-4" />
              Call
            </Link>

            <Link
              href={SPANISH_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-600/90 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-500"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
