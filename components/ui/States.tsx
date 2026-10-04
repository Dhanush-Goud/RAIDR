import { AlertTriangle, Inbox, Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./Button";
import { Card } from "./Card";

export function LoadingState({ message }: { message: string }) {
  return (
    <Card role="status" aria-live="polite" className="flex items-center gap-3 text-muted">
      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
      <span>{message}</span>
    </Card>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <Card role="alert" className="border-bad/50">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-bad" aria-hidden="true" />
        <div>
          <p className="font-medium">{message}</p>
          {onRetry && (
            <Button variant="secondary" className="mt-3" onClick={onRetry}>
              Try again
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export function EmptyState({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <Card className="flex flex-col items-center py-10 text-center">
      <Inbox className="h-8 w-8 text-muted" aria-hidden="true" />
      <p className="mt-3 font-medium">{title}</p>
      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
}
