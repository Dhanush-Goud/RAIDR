import { toPercent } from "@/lib/utils";

interface ProgressProps {
  label: string;
  value: number;
  tone?: "brand" | "accent";
}

export function Progress({ label, value, tone = "brand" }: ProgressProps) {
  const clamped = Math.min(1, Math.max(0, value));
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="text-muted">{label}</span>
        <span className="font-semibold tabular-nums">{toPercent(clamped)}</span>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(clamped * 100)}
        className="h-2.5 overflow-hidden rounded-full bg-subtle"
      >
        <div className={tone === "brand" ? "h-full rounded-full bg-brand" : "h-full rounded-full bg-accent"} style={{ width: `${clamped * 100}%` }} />
      </div>
    </div>
  );
}
