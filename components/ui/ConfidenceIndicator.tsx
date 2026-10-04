import { toPercent } from "@/lib/utils";

interface ConfidenceIndicatorProps {
  label: string;
  value: number;
}

/** Radial indicator. The numeric value is always shown as text, so meaning never depends on the arc alone. */
export function ConfidenceIndicator({ label, value }: ConfidenceIndicatorProps) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(1, Math.max(0, value));
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-28 w-28" role="img" aria-label={`${label}: ${toPercent(clamped)}`}>
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="9" className="stroke-subtle" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="9"
            strokeLinecap="round"
            className="stroke-brand"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - clamped)}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold tabular-nums">
          {toPercent(clamped)}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
