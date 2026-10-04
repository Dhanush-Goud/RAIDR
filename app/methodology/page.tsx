import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONCEPTS, PIPELINE_STAGES } from "@/lib/methodologyContent";

export const metadata: Metadata = { title: "Methodology" };

export default function MethodologyPage() {
  return (
    <>
      <SectionHeader
        as="h1"
        title="Methodology"
        description="The conceptual research pipeline. Stages describe the intended workflow, and the final model architecture has not been chosen."
      />

      <section aria-label="Research pipeline" className="mt-10">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PIPELINE_STAGES.map(({ title, body }, index) => (
            <li key={title}>
              <Card className="h-full">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-fg">{index + 1}</span>
                <h2 className="mt-3 font-semibold">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Concepts" className="mt-16">
        <SectionHeader title="Key Concepts" />
        <dl className="mt-6 grid gap-4 md:grid-cols-2">
          {CONCEPTS.map(({ title, body }) => (
            <Card key={title}>
              <dt className="font-semibold">{title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{body}</dd>
            </Card>
          ))}
        </dl>
        <Disclaimer className="mt-6">Nothing described here has been implemented or evaluated yet.</Disclaimer>
      </section>
    </>
  );
}
