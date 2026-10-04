import { apiPost, isDemoMode } from "./api";
import { mockPredict } from "./mockPredictionService";
import type { PredictionApiResponse } from "@/types/api";
import type { PredictionRequest, PredictionResult } from "@/types/prediction";

export interface PredictionService {
  predict(request: PredictionRequest): Promise<PredictionResult>;
}

/**
 * TODO(backend): FastAPI integration point.
 * Expected endpoint: POST {NEXT_PUBLIC_API_BASE_URL}/api/v1/predictions
 * Request: { drug, disease }  Response: see PredictionApiResponse in types/api.ts
 */
const apiPredictionService: PredictionService = {
  async predict({ drug, disease }) {
    const data = await apiPost<PredictionApiResponse, PredictionRequest>("/api/v1/predictions", { drug, disease });
    return {
      drug,
      disease,
      prediction: data.prediction,
      rawScore: data.raw_score,
      calibratedScore: data.calibrated_score,
      reliabilityLevel: data.reliability,
      explanation: data.explanation,
      modelVersion: data.model_version ?? "unspecified",
      isMock: false,
    };
  },
};

const mockPredictionService: PredictionService = { predict: mockPredict };

/** The UI imports only this object. It switches automatically on NEXT_PUBLIC_API_BASE_URL. */
export const predictionService: PredictionService = isDemoMode ? mockPredictionService : apiPredictionService;
