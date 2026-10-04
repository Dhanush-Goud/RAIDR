import { FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { isDemoMode } from "@/services/api";

/** Shows "Demo Mode" while no API base URL is configured, otherwise "Research Prototype". */
export function ModeIndicator() {
  return (
    <Badge tone={isDemoMode ? "warn" : "accent"}>
      <FlaskConical className="h-3 w-3" aria-hidden="true" />
      {isDemoMode ? "Demo Mode" : "Research Prototype"}
    </Badge>
  );
}
