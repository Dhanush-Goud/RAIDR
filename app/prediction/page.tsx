import type { Metadata } from "next";
import { PredictionForm } from "@/components/prediction/PredictionForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = { title: "Drug–Disease Prediction" };

export default function PredictionPage() {
  return (
    <>
      <SectionHeader as="h1" title="Drug–Disease Prediction" description="Explore a potential drug–disease association using the research framework." />
      <div className="mt-8">
        <PredictionForm />
      </div>
    </>
  );
}
