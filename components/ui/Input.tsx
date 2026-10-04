import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options?: string[];
  error?: string;
}

/** Text input with optional searchable suggestions (native datalist). */
export function Input({ label, options, error, id, className, ...props }: InputProps) {
  const listId = options ? `${id}-options` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        list={listId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        autoComplete="off"
        className={cn(
          "w-full rounded-lg border bg-surface px-3 py-2.5 text-sm placeholder:text-muted",
          error ? "border-bad" : "border-line",
          className,
        )}
        {...props}
      />
      {options && (
        <datalist id={listId}>
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-bad">
          {error}
        </p>
      )}
    </div>
  );
}
