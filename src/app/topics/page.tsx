// components
import TopicCard from "./topic-card";

export default function TopicsPage() {
  return (
    <div className="relative">
      <div className="px-4 mx-auto max-w-[1012px] mb-4 flex flex-col flex-wrap items-center xs:flex-row md:flex-nowrap">
        <div className="w-full py-10">
          <div className="grid gap-4 md:grid-cols-2">
            <TopicCard />
            <TopicCard />
          </div>
        </div>
      </div>
    </div>
  );
}
