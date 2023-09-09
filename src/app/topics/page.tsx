"use client";

// components
import TopicCard from "./topic-card";

// hooks
import {useChallengeTopics} from "@/common/hooks";

export default function TopicsPage() {
  const { data: topics, loading, error } = useChallengeTopics();

  console.log({ topics, loading, error });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <div className="px-4 mx-auto max-w-[1012px] mb-4 flex flex-col flex-wrap items-center xs:flex-row md:flex-nowrap">
        <div className="w-full py-10">
          <div className="grid gap-4 md:grid-cols-2">
            {
              topics?.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
