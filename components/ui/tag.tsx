import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
export function Tag({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-ui-mono inline-flex rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
        className,
      )}
      {...props}
    />
  );
}
