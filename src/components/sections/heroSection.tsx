"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Circle, Phone } from "lucide-react";

function isShopOpen(now = new Date()) {
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();

  if (day >= 1 && day <= 5) {
    return minutes >= 8 * 60 && minutes < 17 * 60;
  }

  if (day === 6) {
    return minutes >= 8 * 60 && minutes < 14 * 60;
  }

  return false;
}

export default function HeroSection() {
  const [shopOpen, setShopOpen] = useState(() => isShopOpen());

  useEffect(() => {
    const syncStatus = () => setShopOpen(isShopOpen());

    syncStatus();
    const interval = setInterval(syncStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-v2.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-black/60" />
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.18),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_20%),linear-gradient(to_bottom,rgba(2,6,23,0.88),rgba(2,6,23,0.96))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,8,22,0.98)_25%,rgba(5,8,22,0.86)_52%,rgba(5,8,22,0.58)_100%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" /> */}
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4 text-xs uppercase tracking-[0.22em] text-white/70 lg:px-10">
          <div className="flex items-center gap-2">
            <Circle
              className={`h-2.5 w-2.5 ${shopOpen ? "fill-emerald-400 text-emerald-400" : "fill-red-400 text-red-400"}`}
            />
            <span>Status: {shopOpen ? "Open" : "Closed"}</span>
          </div>

          <div className="flex items-center gap-2">
            <Circle className="h-2.5 w-2.5 fill-blue-500 text-blue-500" />
            <span>Typical Wait: Under 2 Hours</span>
          </div>

          <div className="flex items-center gap-2">
            <Circle className="h-2.5 w-2.5 fill-blue-500 text-blue-500" />
            <span>Serving Chicagoland Since 2004</span>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10">
        <div className="mx-auto grid min-h-[calc(100vh-149px)] max-w-7xl items-center px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Est. 2004 — Joliet, IL — Serving Chicagoland
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              We Diagnose{" "}
              <span className="text-blue-500">What Others Can’t.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              Trusted across Chicagoland for over 20 years. We specialize in
              check engine lights, emissions issues, and hard-to-find engine
              problems. No guesswork. Just real answers and repairs that solve
              the issue.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-xl shadow-blue-950/40 transition hover:bg-blue-500"
              >
                Get Your Car Diagnosed
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="tel:8156303149"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call: (815) 630-3149
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/55">
              <span>Check Engine Diagnostics</span>
              <span className="hidden sm:inline">•</span>
              <span>Emissions Repair</span>
              <span className="hidden sm:inline">•</span>
              <span>Electrical Troubleshooting</span>
              <span className="hidden sm:inline">•</span>
              <span>Engine Repair</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}