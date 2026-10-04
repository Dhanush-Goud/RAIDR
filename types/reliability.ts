export interface CalibrationBin {
  predictedConfidence: number;
  observedAccuracy: number;
}

export interface CalibrationResult {
  bins: CalibrationBin[];
  ece: number;
  brierScore: number;
  accuracy: number;
  isMock: boolean;
}

export interface TemporalShiftPoint {
  year: number;
  accuracy: number;
  calibration: number;
  confidence: number;
}

export interface PhylogeneticShiftPoint {
  group: string;
  phylogeneticDistance: number;
  performance: number;
  confidence: number;
  calibration: number;
}

export interface DistributionShiftResult {
  temporal: TemporalShiftPoint[];
  phylogenetic: PhylogeneticShiftPoint[];
  isMock: boolean;
}

export interface ReliabilityResult {
  calibration: CalibrationResult;
  shift: DistributionShiftResult;
}
