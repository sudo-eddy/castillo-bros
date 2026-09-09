import Link from "next/link";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import SiteHeader from "../../components/layout/siteHeader";

const contactMethods = [
  {
    label: "Phone",
    value: "(815) 630-3149",
    href: "tel:8156303149",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "Hablamos español",
    href: "https://api.whatsapp.com/send?phone=16307551481",
    icon: MessageCircle,
  },
  {
    label: "Address",
    value: "704 E Benton St, Joliet, IL 60432",
    href: "https://maps.google.com/?q=704+E+Benton+St+Joliet+IL+60432",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-300">
            Contact us
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            We’re here when your car needs help.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Whether you need emissions repair, diagnostics, routine maintenance, or a second
            opinion on a difficult vehicle issue, our team is ready to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/25 bg-blue-500/10 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">{label}</p>
                  <p className="mt-2 text-lg font-medium text-white">{value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-5">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-emerald-300" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Business hours
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/78">
                <li>Mon–Fri: 8:00 AM – 5:00 PM</li>
                <li>Saturday: 8:00 AM – 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
                Find us
              </p>
            </div>
            <div className="h-[500px] w-full">
              <iframe
                title="Castillo Brothers Auto Service Map"
                src="https://www.google.com/maps?q=704%20E%20Benton%20St%20Joliet%20IL%2060432&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Emissions</p>
            <p className="mt-3 text-xl font-semibold text-white">Diagnostics & repairs</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Electrical</p>
            <p className="mt-3 text-xl font-semibold text-white">Troubleshooting</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Maintenance</p>
            <p className="mt-3 text-xl font-semibold text-white">Oil, brakes, filters</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Diesel</p>
            <p className="mt-3 text-xl font-semibold text-white">Commercial diagnostics</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-500"
          >
            Request appointment
          </Link>
          <a
            href="tel:8156303149"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/30"
          >
            Call now
          </a>
        </div>
      </section>
    </main>
  );
}
