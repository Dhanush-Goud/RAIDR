import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function Disclaimer({ children, className }: { children: string; className?: string }) {
  return (
    <p role="note" className={cn("flex items-start gap-2 rounded-lg border border-line bg-subtle px-3 py-2.5 text-sm text-muted", className)}>
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
