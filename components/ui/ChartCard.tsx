import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Card } from "./Card";

interface ChartCardProps {
  title: string;
  description: string;
  isMock: boolean;
  children: ReactNode;
}

export function ChartCard({ title, description, isMock, children }: ChartCardProps) {
  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {isMock && <Badge tone="warn">Illustrative Demo Data</Badge>}
      </div>
      <p className="mt-1.5 text-sm text-muted">{description}</p>
      <div className="mt-5 h-64 w-full sm:h-72">{children}</div>
    </Card>
  );
}
