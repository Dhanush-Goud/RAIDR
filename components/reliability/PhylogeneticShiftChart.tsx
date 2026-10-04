"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AXIS_TICK, CHART_COLORS, TOOLTIP_STYLE } from "./chartTheme";
import type { PhylogeneticShiftPoint } from "@/types/reliability";

export default function PhylogeneticShiftChart({ data }: { data: PhylogeneticShiftPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 12, bottom: 5, left: 0 }}>
        <CartesianGrid stroke={CHART_COLORS.line} strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="group" tick={AXIS_TICK} />
        <YAxis domain={[0, 1]} tick={AXIS_TICK} width={36} />
        <Tooltip contentStyle={TOOLTIP_STYLE} />
        <Legend verticalAlign="top" height={28} />
        <Bar name="Performance" dataKey="performance" fill={CHART_COLORS.brand} radius={[3, 3, 0, 0]} />
        <Bar name="Confidence" dataKey="confidence" fill={CHART_COLORS.warn} radius={[3, 3, 0, 0]} />
        <Bar name="Calibration" dataKey="calibration" fill={CHART_COLORS.accent} radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
