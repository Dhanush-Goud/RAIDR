"use client";

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AXIS_TICK, CHART_COLORS, TOOLTIP_STYLE } from "./chartTheme";
import type { CalibrationBin } from "@/types/reliability";

export default function CalibrationChart({ bins }: { bins: CalibrationBin[] }) {
  const data = bins.map((bin) => ({ ...bin, ideal: bin.predictedConfidence }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 12, bottom: 20, left: 0 }}>
        <CartesianGrid stroke={CHART_COLORS.line} strokeDasharray="3 3" />
        <XAxis dataKey="predictedConfidence" type="number" domain={[0, 1]} tick={AXIS_TICK} label={{ value: "Predicted confidence", position: "insideBottom", offset: -12, fill: CHART_COLORS.muted, fontSize: 12 }} />
        <YAxis domain={[0, 1]} tick={AXIS_TICK} width={36} label={{ value: "Observed accuracy", angle: -90, position: "insideLeft", fill: CHART_COLORS.muted, fontSize: 12 }} />
        <Tooltip contentStyle={TOOLTIP_STYLE} />
        <Legend verticalAlign="top" height={28} />
        <Line name="Perfect calibration" dataKey="ideal" stroke={CHART_COLORS.muted} strokeDasharray="5 4" dot={false} />
        <Line name="Observed (demo)" dataKey="observedAccuracy" stroke={CHART_COLORS.brand} strokeWidth={2.5} />
      </LineChart>
    </ResponsiveContainer>
  );
}
