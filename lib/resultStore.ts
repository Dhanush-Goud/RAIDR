import type { PredictionResult } from "@/types/prediction";

const STORAGE_KEY = "raidr:last-prediction";

export function saveLastResult(result: PredictionResult): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  } catch {
    // Storage can be unavailable (private mode); the results page then shows its empty state.
  }
}

export function loadLastResult(): PredictionResult | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PredictionResult) : null;
  } catch {
    return null;
  }
}
