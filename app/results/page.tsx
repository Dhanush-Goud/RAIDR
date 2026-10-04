import type { Metadata } from "next";
import { ResultsView } from "@/components/results/ResultsView";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = { title: "Results" };

export default function ResultsPage() {
  return (
    <>
      <SectionHeader as="h1" title="Results" description="Prediction output together with its reliability assessment." />
      <div className="mt-8">
        <ResultsView />
      </div>
    </>
  );
}
