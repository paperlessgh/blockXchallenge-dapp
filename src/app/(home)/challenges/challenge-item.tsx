"use client";

// react
import { FC } from "react";
// next
import Link from "next/link";
import Image from "next/image";

// hooks
import { useJoinChallengeModal } from "@/common/hooks";

// lib / uitls
import { CustomImageLoader } from "@/lib/utils";

// imports
import { formatEther } from "viem";

// types
import { Challenge } from "@/common/types/graphql";
type ChallengeItemProps = {
  challenge: Challenge;
};

const ChallengeItem: FC<ChallengeItemProps> = ({ challenge }) => {
  const { open } = useJoinChallengeModal();

  // format date
  const date = new Date(challenge.maturity * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div>
      <Link href={`/challenges?id=${challenge.id}`}>
        <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border mb-0 flex items-center justify-center text-center transition-all hover:border-skin-text">
          <div className="p-4 leading-5 sm:leading-6">
            <div className="relative mb-2 inline-block">
              <div symbol-index="space" className="mb-1">
                <Image
                  src="https://cdn.stamp.fyi/space/magicappstore.eth?s=164"
                  width={164}
                  height={164}
                  alt="avatar"
                  unoptimized
                  loader={CustomImageLoader}
                  className="min-w-[82px] w-[82px] h-[82px] rounded-full bg-skin-border object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 truncate">
              <h3 className="mb-0 mt-0 !h-[32px] overflow-hidden pb-0 text-lg leading-8 truncate">
                {challenge.topic.title}
              </h3>
            </div>
            <div className="mb-4 text-skin-text">
              {challenge.participants.length} participating
            </div>
            <div className="min-w-[250px] mb-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">State:</span>
                <span>
                  {challenge.state == 0
                    ? "Open"
                    : challenge.state == 1
                    ? "Close"
                    : "Stale"}
                </span>
              </div>
              <div className="w-full my-2 border-b border-dashed border-skin-text" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">Asset:</span>
                <span>{challenge.params}</span>
              </div>
              <div className="w-full my-2 border-b border-dashed border-skin-text" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">Stake:</span>
                <span>{formatEther(BigInt(challenge.stake))} ETH</span>
              </div>
              <div className="w-full my-2 border-b border-dashed border-skin-text" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">Pool:</span>
                <span>
                  {formatEther(BigInt(challenge.stake * challenge.participants.length))} ETH
                </span>
              </div>
              <div className="w-full my-2 border-b border-dashed border-skin-text" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">Closes In:</span>
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className="mx-auto">
              <button
                type="button"
                onClick={open}
                className="button px-[22px] mx-auto group min-w-[125px]"
              >
                <span>Join</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChallengeItem;
