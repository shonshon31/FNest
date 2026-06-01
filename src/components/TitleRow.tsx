import type { StreamTitle } from "@/types/title";
import { TitleCard } from "@/components/TitleCard";

export function TitleRow({ title, items }: { title: string; items: StreamTitle[] }) {
  if (!items.length) return null;

  return (
    <section className="px-4 py-5 md:px-8">
      <h2 className="mb-4 text-xl font-black md:text-2xl">{title}</h2>
      <div className="hide-scrollbar grid auto-cols-[minmax(150px,190px)] grid-flow-col gap-4 overflow-x-auto pb-2">
        {items.map((item, index) => (
          <TitleCard key={item.id} title={item} priority={index < 4} />
        ))}
      </div>
    </section>
  );
}
