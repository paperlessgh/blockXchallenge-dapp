"use client";

// react
import { FC } from "react";
// next
import Image from "next/image";
// imports
import { formatEther } from "viem";
import { VerifiedIcon } from "lucide-react";

// hooks
import { useJoinChallengeModal } from "@/common/hooks";

// lib / uitls
import { CustomImageLoader } from "@/lib/utils";

// types
import { Challenge } from "@/common/types/graphql";
type SidebarProps = {
  challenge?: Challenge;
};

const Sidebar: FC<SidebarProps> = ({ challenge }) => {
  const { open, setChallenge } = useJoinChallengeModal();

  if (!challenge) return null;

  return (
    <div className="float-left w-full lg:w-1/4">
      <div className="-mt-[4px] mb-[20px] md:mt-0 lg:fixed lg:mb-0 lg:w-[240px]">
        <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border overflow-hidden !border-t-0 md:!border-t">
          <div className="leading-5 sm:leading-6">
            <div className="relative lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
              <div className="relative block px-[20px] text-center md:flex md:px-3 md:pt-3 lg:block lg:pb-[24px]">
                <div>
                  <div symbol-index="space" className="mr-3">
                    <Image
                      src="https://cdn.stamp.fyi/space/magicappstore.eth?s=96&amp;cb=3838996002ea1b70"
                      alt="avatar"
                      width={48}
                      height={48}
                      unoptimized
                      loader={CustomImageLoader}
                      className="min-w-[48px] w-[48px] h-[48px] rounded-full bg-skin-border object-cover"
                    />
                  </div>
                  <div className="mt-2 truncate text-left">
                    <h3 className="my-0 flex items-center text-2xl leading-[44px] lg:text-lg">
                      <div className="mr-1 truncate">
                        {challenge.topic.title}
                      </div>
                      <div className="cursor-help">
                        <VerifiedIcon
                          size={20}
                          fill="white"
                          className="iconfont text-xl leading-5 stroke-skin-bg"
                        />
                      </div>
                    </h3>
                    <div className="text-md text-skin-text lg:text-base">
                      {challenge.participants.length} Participating
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex w-full items-end justify-end gap-[12px] md:mt-0 lg:mt-[12px]">
                  <div className="w-full md:max-w-[180px] lg:max-w-none">
                    <button
                      type="button"
                      onClick={() => {
                        setChallenge(challenge);
                        open();
                      }}
                      className="button px-[22px] button--primary hover:brightness-95 w-full md:max-w-[180px] lg:max-w-none group min-w-[125px]"
                    >
                      <span>Join</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="no-scrollbar mt-4 flex overflow-y-auto lg:my-3 lg:block lg:mt-0">
                <div className="router-link-active">
                  <div className="group relative flex justify-between whitespace-nowrap px-[20px] py-2 text-skin-text hover:bg-skin-bg lg:px-3">
                    <span className="!text-skin-heading">Participants</span>
                    <div className="ml-auto">
                      {challenge.participants.length}
                    </div>
                  </div>
                </div>
                <div className="router-link-active">
                  <div className="group relative flex justify-between whitespace-nowrap px-[20px] py-2 text-skin-text hover:bg-skin-bg lg:px-3">
                    <span className="!text-skin-heading">State</span>
                    <div className="ml-auto">
                      {challenge.state == 0
                        ? "Open"
                        : challenge.state == 1
                        ? "Close"
                        : "Stale"}
                    </div>
                  </div>
                </div>
                <div className="router-link-active">
                  <div className="group relative flex justify-between whitespace-nowrap px-[20px] py-2 text-skin-text hover:bg-skin-bg lg:px-3">
                    <span className="!text-skin-heading">Asset</span>
                    <div className="ml-auto">{challenge.params}</div>
                  </div>
                </div>
                <div className="router-link-active">
                  <div className="group relative flex justify-between whitespace-nowrap px-[20px] py-2 text-skin-text hover:bg-skin-bg lg:px-3">
                    <span className="!text-skin-heading">Stake</span>
                    <div className="ml-auto">
                      {formatEther(challenge.stake)} Eth
                    </div>
                  </div>
                </div>
                <div className="router-link-active router-link-exact-active">
                  <div className="group relative flex justify-between whitespace-nowrap px-[20px] py-2 text-skin-text  hover:bg-skin-bg lg:px-3">
                    <span className="!text-skin-heading">Total Stake</span>
                    <div className="ml-auto">
                      {formatEther(
                        BigInt(
                          challenge?.stake * challenge?.participants?.length
                        )
                      )}{" "}
                      Eth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
