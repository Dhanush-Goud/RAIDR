import { CircleAlert, CircleCheck, CircleMinus } from "lucide-react";
import { Badge } from "./Badge";
import type { ReliabilityLevel } from "@/types/prediction";

const CONFIG = {
  high: { label: "High reliability", tone: "good", Icon: CircleCheck },
  moderate: { label: "Moderate reliability", tone: "warn", Icon: CircleMinus },
  low: { label: "Low reliability", tone: "bad", Icon: CircleAlert },
} as const;

export function ReliabilityBadge({ level }: { level: ReliabilityLevel }) {
  const { label, tone, Icon } = CONFIG[level];
  return (
    <Badge tone={tone} className="px-3 py-1 text-sm">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </Badge>
  );
}
