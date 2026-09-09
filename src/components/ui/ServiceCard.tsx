import Image from "next/image";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  image,
  alt,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]">
      <div className="relative h-64 overflow-hidden border-b border-white/10">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,8,22,0.92)_0%,rgba(5,8,22,0.42)_45%,rgba(5,8,22,0.18)_100%)]" />
      </div>

      <div className="p-6">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-400">
          <Icon className="h-4 w-4" />
        </div>

        <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/58">
          {description}
        </p>
      </div>
    </div>
  );
}