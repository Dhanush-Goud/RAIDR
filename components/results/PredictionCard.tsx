import { Card } from "@/components/ui/Card";
import { ConfidenceIndicator } from "@/components/ui/ConfidenceIndicator";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { ReliabilityBadge } from "@/components/ui/ReliabilityBadge";
import { toPercent } from "@/lib/utils";
import type { PredictionResult } from "@/types/prediction";

const LABELS = { potential_association: "Potential association", low_evidence: "Low evidence" } as const;

export function PredictionCard({ result }: { result: PredictionResult }) {
  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Prediction Result</h2>
        {result.isMock && <Badge tone="warn">Demo data</Badge>}
      </div>

      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted">Drug</dt>
          <dd className="mt-0.5 text-lg font-medium">{result.drug}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Disease</dt>
          <dd className="mt-0.5 text-lg font-medium">{result.disease}</dd>
        </div>
      </dl>

      <div className="mt-6 grid items-center gap-6 border-t border-line pt-6 sm:grid-cols-[auto_1fr]">
        <ConfidenceIndicator label="Calibrated confidence" value={result.calibratedScore} />
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted">Model prediction</p>
            <p className="text-2xl font-semibold">
              {LABELS[result.prediction]} <span className="tabular-nums text-muted">· {toPercent(result.rawScore)}</span>
            </p>
          </div>
          <Progress label="Raw confidence" value={result.rawScore} />
          <Progress label="Calibrated confidence" value={result.calibratedScore} tone="accent" />
          <ReliabilityBadge level={result.reliabilityLevel} />
        </div>
      </div>
    </Card>
  );
}
