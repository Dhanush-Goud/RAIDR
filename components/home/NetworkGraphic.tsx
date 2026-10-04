const NODES = [
  { id: "d1", x: 40, y: 60, r: 9, kind: "Drug" },
  { id: "d2", x: 40, y: 190, r: 9, kind: "Drug" },
  { id: "g1", x: 150, y: 30, r: 6, kind: "Gene" },
  { id: "g2", x: 150, y: 120, r: 6, kind: "Gene" },
  { id: "p1", x: 160, y: 215, r: 6, kind: "Protein" },
  { id: "p2", x: 255, y: 80, r: 6, kind: "Protein" },
  { id: "p3", x: 255, y: 170, r: 6, kind: "Protein" },
  { id: "s1", x: 360, y: 60, r: 9, kind: "Disease" },
  { id: "s2", x: 360, y: 190, r: 9, kind: "Disease" },
];

const EDGES = [
  ["d1", "g1"], ["d1", "g2"], ["d2", "g2"], ["d2", "p1"], ["g1", "p2"], ["g2", "p2"],
  ["g2", "p3"], ["p1", "p3"], ["p2", "s1"], ["p3", "s1"], ["p3", "s2"], ["p1", "s2"],
];

const KIND_CLASS: Record<string, string> = {
  Drug: "fill-brand",
  Gene: "fill-accent",
  Protein: "fill-muted",
  Disease: "fill-brand stroke-accent",
};

/** Purely decorative. It does not depict the implemented or final model graph. */
export function NetworkGraphic() {
  const byId = Object.fromEntries(NODES.map((node) => [node.id, node]));
  return (
    <figure className="rounded-2xl border border-line bg-surface p-4 sm:p-6">
      <svg viewBox="0 0 400 250" className="h-auto w-full" role="img" aria-label="Decorative network linking drugs, genes, proteins and diseases">
        {EDGES.map(([from, to]) => (
          <line key={`${from}-${to}`} x1={byId[from].x} y1={byId[from].y} x2={byId[to].x} y2={byId[to].y} className="stroke-line" strokeWidth="1.5" />
        ))}
        {NODES.map((node) => (
          <circle key={node.id} cx={node.x} cy={node.y} r={node.r} className={KIND_CLASS[node.kind]} strokeWidth="2" />
        ))}
      </svg>
      <figcaption className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-brand" />Drugs and diseases</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent" />Genes</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-muted" />Proteins</span>
        <span>Conceptual illustration only</span>
      </figcaption>
    </figure>
  );
}
