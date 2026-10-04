export const CHART_COLORS = {
  brand: "rgb(var(--brand))",
  accent: "rgb(var(--accent))",
  muted: "rgb(var(--muted))",
  line: "rgb(var(--line))",
  warn: "rgb(var(--warn))",
} as const;

export const TOOLTIP_STYLE = {
  backgroundColor: "rgb(var(--surface))",
  border: "1px solid rgb(var(--line))",
  borderRadius: 8,
  color: "rgb(var(--ink))",
  fontSize: 12,
} as const;

export const AXIS_TICK = { fill: "rgb(var(--muted))", fontSize: 12 } as const;
