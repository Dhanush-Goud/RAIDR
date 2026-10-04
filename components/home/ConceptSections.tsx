import { Activity, Clock, Dna, GitBranch, Pill, ShieldCheck, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Item {
  title: string;
  body: string;
  Icon: LucideIcon;
}

const CONCEPTS: Item[] = [
  { title: "Drug Repurposing", body: "Finding potential new uses for existing drugs.", Icon: Pill },
  { title: "Confidence Calibration", body: "Evaluating whether the confidence associated with predictions is trustworthy.", Icon: ShieldCheck },
  { title: "Distribution Shift", body: "Studying how prediction reliability changes when data distributions differ from the training setting.", Icon: Activity },
];

const COMPONENTS: Item[] = [
  { title: "Drug–Disease Prediction", body: "The planned system will predict potential associations between drugs and diseases.", Icon: Dna },
  { title: "Confidence Calibration", body: "Confidence scores will be evaluated and calibrated so predictions are easier to trust appropriately.", Icon: ShieldCheck },
  { title: "Temporal Distribution Shift", body: "Reliability will be evaluated as biomedical and pharmaceutical data changes over time.", Icon: Clock },
  { title: "Phylogenetic Distribution Shift", body: "The project aims to evaluate reliability across biologically and phylogenetically different settings. The exact method is still to be finalized.", Icon: GitBranch },
];

function ItemGrid({ items, columns }: { items: Item[]; columns: string }) {
  return (
    <ul className={`mt-8 grid gap-4 ${columns}`}>
      {items.map(({ title, body, Icon }) => (
        <li key={title}>
          <Card className="h-full">
            <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export function ConceptSections() {
  return (
    <>
      <section aria-label="Why reliable AI matters" className="mt-20">
        <SectionHeader
          title="Why Reliable AI Matters"
          description="Computational methods can help identify potential new uses for existing drugs. Predictions can become less reliable when new data differs from the data a model was trained on, so knowing how far to trust a result matters as much as the result."
        />
        <ItemGrid items={CONCEPTS} columns="md:grid-cols-3" />
        <Disclaimer className="mt-6">
          Predictions are computational research outputs and require further validation. They do not show clinical usefulness.
        </Disclaimer>
      </section>

      <section aria-label="Project components" className="mt-20">
        <SectionHeader title="Project Components" description="What the framework is designed to cover as the research progresses." />
        <ItemGrid items={COMPONENTS} columns="sm:grid-cols-2" />
      </section>
    </>
  );
}
