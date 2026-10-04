import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MEDICAL_DISCLAIMER, SITE } from "@/lib/constants";
import { PROJECT_DETAILS, TECHNOLOGY_PLACEHOLDERS } from "@/lib/aboutContent";

export const metadata: Metadata = { title: "About" };

function DetailList({ title, items }: { title: string; items: ReadonlyArray<{ label: string; value: string }> }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold">{title}</h2>
      <dl className="mt-4 space-y-3">
        {items.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <>
      <Badge tone="accent">Academic Research Project</Badge>
      <div className="mt-4">
        <SectionHeader as="h1" title={SITE.projectTitle} />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Purpose</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            To explore potential drug–disease associations with AI while measuring how reliable those predictions remain when the data changes.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Research focus</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Confidence calibration and reliability evaluation under temporal and phylogenetic distribution shift.
          </p>
        </Card>
        <DetailList title="Team and project information" items={PROJECT_DETAILS} />
        <DetailList title="Technology" items={TECHNOLOGY_PLACEHOLDERS} />
      </div>

      <Disclaimer className="mt-6">{MEDICAL_DISCLAIMER}</Disclaimer>
    </>
  );
}
