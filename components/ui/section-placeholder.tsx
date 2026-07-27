import type { NavigationItem } from "@/data/types";
import { SectionHeading } from "./section-heading";
export function SectionPlaceholder({
  index,
  item,
}: {
  index: number;
  item: NavigationItem;
}) {
  return (
    <section id={item.id} className="border-b border-[var(--border)]">
      <div className="mx-auto flex min-h-[22rem] w-full max-w-6xl items-center px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={`// ${String(index).padStart(2, "0")} — ${item.label.toLowerCase()}`}
          title={item.label}
          description="This section is prepared in the portfolio foundation and will receive its final content in a later implementation phase."
        />
      </div>
    </section>
  );
}
