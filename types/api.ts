import type { PredictionLabel, ReliabilityLevel } from "./prediction";

/** Wire format of POST /api/v1/predictions (snake_case, as sent by the future FastAPI backend). */
export interface PredictionApiResponse {
  prediction: PredictionLabel;
  raw_score: number;
  calibrated_score: number;
  reliability: ReliabilityLevel;
  explanation: string;
  model_version?: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}
