"use client";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AXIS_TICK, CHART_COLORS, TOOLTIP_STYLE } from "./chartTheme";
import type { TemporalShiftPoint } from "@/types/reliability";

export default function TemporalShiftChart({ data }: { data: TemporalShiftPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 12, bottom: 5, left: 0 }}>
        <CartesianGrid stroke={CHART_COLORS.line} strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={AXIS_TICK} />
        <YAxis domain={[0.5, 1]} tick={AXIS_TICK} width={36} />
        <Tooltip contentStyle={TOOLTIP_STYLE} />
        <Legend verticalAlign="top" height={28} />
        <Line name="Accuracy" dataKey="accuracy" stroke={CHART_COLORS.brand} strokeWidth={2.5} />
        <Line name="Calibration" dataKey="calibration" stroke={CHART_COLORS.accent} strokeWidth={2.5} strokeDasharray="6 3" />
        <Line name="Confidence" dataKey="confidence" stroke={CHART_COLORS.warn} strokeWidth={2.5} strokeDasharray="2 3" />
      </LineChart>
    </ResponsiveContainer>
  );
}
