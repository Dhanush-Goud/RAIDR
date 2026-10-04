import type { PredictionRequest, PredictionResult, ReliabilityLevel } from "@/types/prediction";

const MOCK_MODEL_VERSION = "demo-mock-0.0";
const MOCK_LATENCY_MS = 900;

/** Deterministic hash so the same drug/disease pair always yields the same demo values. */
function hashToUnit(text: string): number {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 10000) / 10000;
}

function levelFor(calibratedScore: number, gap: number): ReliabilityLevel {
  if (gap < 0.08 && calibratedScore >= 0.6) return "high";
  if (gap < 0.15) return "moderate";
  return "low";
}

export async function mockPredict({ drug, disease }: PredictionRequest): Promise<PredictionResult> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));

  const seed = hashToUnit(`${drug.toLowerCase()}|${disease.toLowerCase()}`);
  const rawScore = 0.35 + seed * 0.6;
  const gap = hashToUnit(`${disease.toLowerCase()}|${drug.toLowerCase()}`) * 0.2;
  const calibratedScore = Math.max(0.05, rawScore - gap);
  const reliabilityLevel = levelFor(calibratedScore, gap);

  return {
    drug,
    disease,
    prediction: calibratedScore >= 0.5 ? "potential_association" : "low_evidence",
    rawScore,
    calibratedScore,
    reliabilityLevel,
    explanation:
      "Placeholder text. When a model is connected, this field can carry the explanation returned by the backend.",
    modelVersion: MOCK_MODEL_VERSION,
    isMock: true,
  };
}
