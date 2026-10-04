import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeader({ title, description, as: Heading = "h2", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Heading className={cn("font-serif font-semibold tracking-tight text-ink", Heading === "h1" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl")}>
        {title}
      </Heading>
      {description && <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
