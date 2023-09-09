"use client";

// next
import Link from "next/link";
import Image from "next/image";

// lib / uitls
import { CustomImageLoader } from "@/lib/utils";

const ChallengeItem = () => {
  return (
    <div>
      <Link href="/challenges?id=1">
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
              <h3 className="mb-0 mt-0 !h-[32px] overflow-hidden pb-0 text-[22px] leading-8">
                Topic
              </h3>
            </div>
            <div className="mb-4 text-skin-text">127K participating</div>
            <div className="min-w-[250px] mb-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">State:</span>
                <span>Open</span>
              </div>
              <div className="w-full my-2 border-b border-dashed border-skin-text" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">Asset:</span>
                <span>BTC</span>
              </div>
              <div className="w-full my-2 border-b border-dashed border-skin-text" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">Stake:</span>
                <span>1.5 ETH</span>
              </div>
              <div className="w-full my-2 border-b border-dashed border-skin-text" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">Pool:</span>
                <span>100 ETH</span>
              </div>
              <div className="w-full my-2 border-b border-dashed border-skin-text" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-skin-link">Closes In:</span>
                <span>2 days 3 hrs</span>
              </div>
            </div>
            <div className="mx-auto">
              <button
                type="button"
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
