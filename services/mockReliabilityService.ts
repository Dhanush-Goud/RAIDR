import type { ReliabilityResult } from "@/types/reliability";

/** Illustrative demo values only. They are not experimental results. */
export const MOCK_RELIABILITY: ReliabilityResult = {
  calibration: {
    bins: [
      { predictedConfidence: 0.1, observedAccuracy: 0.14 },
      { predictedConfidence: 0.3, observedAccuracy: 0.33 },
      { predictedConfidence: 0.5, observedAccuracy: 0.45 },
      { predictedConfidence: 0.7, observedAccuracy: 0.62 },
      { predictedConfidence: 0.9, observedAccuracy: 0.8 },
    ],
    ece: 0.07,
    brierScore: 0.16,
    accuracy: 0.78,
    isMock: true,
  },
  shift: {
    temporal: [
      { year: 2020, accuracy: 0.82, calibration: 0.91, confidence: 0.84 },
      { year: 2021, accuracy: 0.79, calibration: 0.88, confidence: 0.83 },
      { year: 2022, accuracy: 0.75, calibration: 0.82, confidence: 0.82 },
      { year: 2023, accuracy: 0.71, calibration: 0.76, confidence: 0.81 },
      { year: 2024, accuracy: 0.67, calibration: 0.7, confidence: 0.8 },
    ],
    phylogenetic: [
      { group: "Training group", phylogeneticDistance: 0, performance: 0.82, confidence: 0.84, calibration: 0.91 },
      { group: "Related group", phylogeneticDistance: 1, performance: 0.74, confidence: 0.8, calibration: 0.83 },
      { group: "Distant group", phylogeneticDistance: 2, performance: 0.64, confidence: 0.77, calibration: 0.7 },
    ],
    isMock: true,
  },
};
