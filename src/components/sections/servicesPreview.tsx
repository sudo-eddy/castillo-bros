import StatItem from "../ui/StatItem";
import ServiceCard from "../ui/ServiceCard";
import { serviceStats, servicesData } from "../../data/ServicesData";

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.10),transparent_28%),linear-gradient(to_bottom,rgba(2,6,23,0.92),rgba(2,6,23,0.98))]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 lg:px-10">
          {serviceStats.map((stat) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-400">
            Our Specializations
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Precision Auto Repair Services in Joliet, Serving Chicagoland
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Every service starts with a thorough diagnostic process. We explain
            what is wrong, what it costs, and how long it takes before we touch
            a single bolt.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
      </div>
    </section>
  );
}