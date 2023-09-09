"use client";

// next
import { useSearchParams } from "next/navigation";

// components
import Sidebar from "./sidebar";
import Content from "./content";

// hooks
import { useChallenge } from "@/common/hooks";

export default function ChallengeDetailPage() {
  const searchParams = useSearchParams();
  const challengeId = searchParams.get('id');

  const { data: challenge, loading } = useChallenge(challengeId);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <div className="px-4 py-5 mx-auto max-w-[1012px] mb-4 flex flex-col flex-wrap items-start xs:flex-row md:flex-nowrap">
        <Sidebar challenge={challenge} />
        <Content challenge={challenge} />
      </div>
    </div>
  );
}

export const dynamic = "force-static";
export const dynamicParams = true;
