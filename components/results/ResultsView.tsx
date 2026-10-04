"use client";

import { useEffect, useState } from "react";
import { PredictionCard } from "./PredictionCard";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { EmptyState, LoadingState } from "@/components/ui/States";
import { DEMO_DISCLAIMER } from "@/lib/constants";
import { loadLastResult } from "@/lib/resultStore";
import type { PredictionResult } from "@/types/prediction";

export function ResultsView() {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setResult(loadLastResult());
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <LoadingState message="Loading result..." />;

  if (!result) {
    return (
      <EmptyState title="No prediction yet">
        <ButtonLink href="/prediction">Run Prediction</ButtonLink>
      </EmptyState>
    );
  }

  return (
    <div className="max-w-3xl space-y-5">
      <PredictionCard result={result} />
      <Card>
        <h2 className="text-lg font-semibold">Interpretation</h2>
        <h3 className="mt-3 font-medium">Why this result matters</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          The framework is intended to pair each prediction with a reliability assessment, so a score is read together with how well-calibrated it is under changing data conditions.
        </p>
        {result.explanation && <p className="mt-4 border-t border-line pt-4 text-sm text-muted">{result.explanation}</p>}
      </Card>
      {result.isMock && <Disclaimer>{DEMO_DISCLAIMER}</Disclaimer>}
      <ButtonLink href="/prediction" variant="secondary">Analyze another association</ButtonLink>
    </div>
  );
}
