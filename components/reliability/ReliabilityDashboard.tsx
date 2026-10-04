"use client";

import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { ChartCard } from "@/components/ui/ChartCard";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { StatCard } from "@/components/ui/StatCard";
import { ErrorState, LoadingState } from "@/components/ui/States";
import { toPercent } from "@/lib/utils";
import { getReliability } from "@/services/reliabilityService";
import type { ReliabilityResult } from "@/types/reliability";

const chartPlaceholder = () => <LoadingState message="Loading chart..." />;
const CalibrationChart = dynamic(() => import("./CalibrationChart"), { ssr: false, loading: chartPlaceholder });
const TemporalShiftChart = dynamic(() => import("./TemporalShiftChart"), { ssr: false, loading: chartPlaceholder });
const PhylogeneticShiftChart = dynamic(() => import("./PhylogeneticShiftChart"), { ssr: false, loading: chartPlaceholder });

const PHYLO_STEPS = ["Training distribution", "Related biological group", "More distant biological group", "Reliability evaluation"];

type State = { status: "loading" } | { status: "error" } | { status: "ready"; data: ReliabilityResult };

export function ReliabilityDashboard() {
  const [state, setState] = useState<State>({ status: "loading" });

  const load = useCallback(() => {
    setState({ status: "loading" });
    getReliability()
      .then((data) => setState({ status: "ready", data }))
      .catch(() => setState({ status: "error" }));
  }, []);

  useEffect(load, [load]);

  if (state.status === "loading") return <LoadingState message="Loading reliability analysis..." />;
  if (state.status === "error") return <ErrorState message="Unable to load reliability data. Please try again." onRetry={load} />;

  const { calibration, shift } = state.data;

  return (
    <div className="space-y-14">
      <section aria-labelledby="calibration-title" className="space-y-5">
        <h2 id="calibration-title" className="font-serif text-2xl font-semibold">Confidence Calibration</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard label="ECE" value={calibration.ece.toFixed(2)} hint="Expected calibration error (demo)" />
          <StatCard label="Brier Score" value={calibration.brierScore.toFixed(2)} hint="Demo value" />
          <StatCard label="Accuracy" value={toPercent(calibration.accuracy)} hint="Demo value" />
        </div>
        <ChartCard title="Predicted confidence vs observed accuracy" description="A well-calibrated model follows the dashed diagonal." isMock={calibration.isMock}>
          <CalibrationChart bins={calibration.bins} />
        </ChartCard>
      </section>

      <section aria-labelledby="temporal-title" className="space-y-5">
        <h2 id="temporal-title" className="font-serif text-2xl font-semibold">Temporal Distribution Shift</h2>
        <ChartCard title="Reliability over time" description="Illustrative visualization of how model reliability may change when evaluated on data from different time periods." isMock={shift.isMock}>
          <TemporalShiftChart data={shift.temporal} />
        </ChartCard>
      </section>

      <section aria-labelledby="phylo-title" className="space-y-5">
        <h2 id="phylo-title" className="font-serif text-2xl font-semibold">Phylogenetic Distribution Shift</h2>
        <Card>
          <ol className="grid gap-3 sm:grid-cols-4" aria-label="Conceptual evaluation flow">
            {PHYLO_STEPS.map((step, index) => (
              <li key={step} className="flex flex-col items-center gap-3 sm:items-stretch">
                <div className="rounded-lg border border-line bg-subtle px-3 py-3 text-center text-sm font-medium">{step}</div>
                {index < PHYLO_STEPS.length - 1 && <ArrowDown className="h-4 w-4 text-muted sm:hidden" aria-hidden="true" />}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted">Conceptual flow only. The phylogenetic evaluation method has not been finalized.</p>
        </Card>
        <ChartCard title="Reliability across biological groups" description="Placeholder groups ordered by increasing phylogenetic distance. A backend can later supply real species, groups, distances and metrics." isMock={shift.isMock}>
          <PhylogeneticShiftChart data={shift.phylogenetic} />
        </ChartCard>
      </section>

      <Disclaimer>All values on this page are illustrative demo data, not experimental results. No model has been evaluated.</Disclaimer>
    </div>
  );
}
