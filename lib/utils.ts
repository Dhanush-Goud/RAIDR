export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function toPercent(value: number, digits = 0): string {
  return `${(value * 100).toFixed(digits)}%`;
}
