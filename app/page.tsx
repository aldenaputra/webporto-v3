import { SectionPlaceholder } from "@/components/ui/section-placeholder";
import { navigationItems } from "@/data/profile";

export default function Home() {
  return navigationItems.map((item, index) => (
    <SectionPlaceholder key={item.id} index={index + 1} item={item} />
  ));
}
