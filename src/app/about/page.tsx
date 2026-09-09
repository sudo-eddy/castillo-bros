import Link from "next/link";
import { ArrowRight, BadgeCheck, Phone, Star } from "lucide-react";
import SiteHeader from "../../components/layout/siteHeader";

const reviewHighlights = [
  {
    author: "John Mitch",
    quote:
      '"He took care of me right away and gave me the best price you can find in town."',
  },
  {
    author: "Berzain Chaleco",
    quote:
      '"Very professional, great work and fast; also low prices."',
  },
  {
    author: "Preston Baird",
    quote:
      '"My wife and I are so thankful to have found this place."',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-blue-300">
              About us
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Honest auto care for drivers who need real answers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Castillo&apos;s Brothers Auto Service has built a reputation in Joliet and across
              Chicagoland for doing the work that other shops won&apos;t or can&apos;t. From check-engine
              lights and emissions failures to difficult mechanical and electrical issues, the
              shop focuses on accurate diagnosis, transparent communication, and repairs that last.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">Since</p>
                <p className="mt-2 text-2xl font-semibold text-white">2004</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">Specialty</p>
                <p className="mt-2 text-2xl font-semibold text-white">Emissions</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">Trusted</p>
                <p className="mt-2 text-2xl font-semibold text-white">Locally</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)] p-6 shadow-2xl shadow-blue-950/30">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-300">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/55">What customers say</p>
                <p className="mt-1 text-lg font-semibold text-white">Review-driven reputation</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="mt-6 text-base leading-7 text-white/72">
              Google review sentiment points to the same pattern again and again: drivers trust
              this shop because it is reliable, knowledgeable, and willing to solve the problem
              others give up on.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-500"
              >
                Book service
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:8156303149"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white/30"
              >
                <Phone className="h-4 w-4" />
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-300">
            Why drivers choose us
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            More than a quick fix — a repair shop people trust.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviewHighlights.map((item) => (
            <article
              key={item.author}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-8 text-white/85">{item.quote}</p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
                {item.author}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
