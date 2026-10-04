import { MEDICAL_DISCLAIMER, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted sm:px-6">
        <p className="font-medium text-ink">{SITE.projectTitle}</p>
        <p className="mt-1">Academic Research Project</p>
        <p className="mt-3 max-w-3xl">{MEDICAL_DISCLAIMER}</p>
      </div>
    </footer>
  );
}
