export type PredictionLabel = "potential_association" | "low_evidence";
export type ReliabilityLevel = "high" | "moderate" | "low";

export interface PredictionRequest {
  drug: string;
  disease: string;
}

export interface PredictionResult {
  drug: string;
  disease: string;
  prediction: PredictionLabel;
  rawScore: number;
  calibratedScore: number;
  reliabilityLevel: ReliabilityLevel;
  explanation: string;
  modelVersion: string;
  isMock: boolean;
}
