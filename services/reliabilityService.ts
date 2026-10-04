import { MOCK_RELIABILITY } from "./mockReliabilityService";
import type { ReliabilityResult } from "@/types/reliability";

/**
 * TODO(backend): when the API is connected, fetch real evaluation output, e.g.
 * apiGet<ReliabilityResult>("/api/v1/reliability"), and branch on isDemoMode from ./api.
 */
export async function getReliability(): Promise<ReliabilityResult> {
  return MOCK_RELIABILITY;
}
