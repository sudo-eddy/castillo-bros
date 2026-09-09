import { LucideIcon } from "lucide-react";

type StatItemProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export default function StatItem({
  icon: Icon,
  value,
  label,
}: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="h-5 w-5 text-blue-500" />
      <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
        {value}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/50">
        {label}
      </p>
    </div>
  );
}