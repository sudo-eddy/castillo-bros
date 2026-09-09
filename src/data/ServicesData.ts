import {
  BadgeCheck,
  Clock3,
  DollarSign,
  Gauge,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export const serviceStats = [
  {
    icon: Clock3,
    value: "20+",
    label: "Years in Business",
  },
  {
    icon: Gauge,
    value: "15,000+",
    label: "Cars Serviced",
  },
  {
    icon: BadgeCheck,
    value: "Pro-Grade",
    label: "Dealership Alternative",
  },
  {
    icon: DollarSign,
    value: "100%",
    label: "Transparent Pricing",
  },
];

export const servicesData = [
  {
    title: "Engine Diagnostics",
    description:
      "Advanced diagnostic testing for check engine lights, drivability problems, electrical faults, and hard-to-trace performance issues across Joliet and Chicagoland.",
    image: "/images/services/engine-diagnostics.png",
    icon: Wrench,
    alt: "Engine diagnostics tools and wiring inside an auto repair shop",
  },
  {
    title: "Emissions Repair",
    description:
      "Professional emissions testing support and repair to help Illinois drivers identify failures, correct the root cause, and get back on the road with confidence.",
    image: "/images/services/emissions.png",
    icon: ShieldCheck,
    alt: "Check engine light and emissions diagnostics in a futuristic auto repair environment",
  },
  {
    title: "Brake Repair",
    description:
      "Brake inspection and repair services including pads, rotors, calipers, hydraulic checks, and complete braking system repair for safe daily driving.",
    image: "/images/services/brake.png",
    icon: Gauge,
    alt: "Close-up of a brake rotor inside a modern auto shop",
  },
  {
    title: "Engine Repair",
    description:
      "From timing issues and gasket failures to deeper mechanical repairs, we handle engine problems with precise troubleshooting and honest recommendations.",
    image: "/images/services/engine-repair.png",
    icon: Wrench,
    alt: "Engine block in a professional automotive repair environment",
  },
  {
    title: "Maintenance Services",
    description:
      "Oil changes, filters, belts, fluids, and scheduled tune-ups. Keep your vehicle running at peak performance — before problems start.",
    image: "/images/services/maintenance.png",
    icon: ShieldCheck,
    alt: "Routine vehicle maintenance with oil service being performed in a professional auto shop",
  },
  {
    title: "Commercial Diesel",
    description:
      "Diagnostics and maintenance for commercial diesel vehicles. Minimize downtime and keep your fleet moving with specialist-grade service.",
    image: "/images/services/diesel-diagnostics.png",
    icon: Truck,
    alt: "Commercial diesel engine diagnostics and maintenance in a professional repair shop",
  },
];