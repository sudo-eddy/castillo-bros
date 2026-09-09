import Link from "next/link";
import Image from "next/image";
import SiteHeader from "../../components/layout/siteHeader";
import ServiceCard from "../../components/ui/ServiceCard";
import { servicesData } from "../../data/ServicesData";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_30%),linear-gradient(to_bottom,rgba(2,6,23,0.94),rgba(2,6,23,0.98))]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:42px_42px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-400">
              Our services
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Auto repair services built around honest diagnostics and lasting results.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              From check engine lights and emissions failures to routine maintenance and diesel
              performance issues, we handle the work that keeps your vehicle safe, reliable, and
              road-ready.
            </p>
          </div>

          <div className="mt-12 overflow-hidden border border-white/10 bg-black/20">
            <Image
              src="/images/services/banner-full.png"
              alt="Castillo Bros. services all vehicle makes and models"
              width={1920}
              height={828}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                alt={service.alt}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-blue-400">
                  Need help fast?
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                  Let’s find the right repair for your vehicle.
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-500"
                >
                  Request appointment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/30"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
