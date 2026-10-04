import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { NetworkGraphic } from "./NetworkGraphic";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <Badge tone="accent">AI • Drug Repurposing • Reliability</Badge>
        <h1 id="hero-title" className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Reliable AI for Drug Repurposing
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Predict potential drug–disease associations while evaluating the reliability of AI predictions under distribution shift.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/prediction">Run Prediction</ButtonLink>
          <ButtonLink href="/methodology" variant="secondary">Explore Methodology</ButtonLink>
        </div>
      </div>
      <NetworkGraphic />
    </section>
  );
}
