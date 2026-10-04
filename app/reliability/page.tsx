import type { Metadata } from "next";
import { ReliabilityDashboard } from "@/components/reliability/ReliabilityDashboard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = { title: "Reliability Analysis" };

export default function ReliabilityPage() {
  return (
    <>
      <SectionHeader as="h1" title="Reliability Analysis" description="Evaluate how trustworthy model predictions remain under changing data conditions." />
      <div className="mt-10">
        <ReliabilityDashboard />
      </div>
    </>
  );
}
