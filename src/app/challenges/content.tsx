"use client";

// react
import { FC } from "react";
// next
import Link from "next/link";
import Image from "next/image";

// lib / utils
import { CustomImageLoader } from "@/lib/utils";

// types
import { Challenge } from "@/common/types/graphql";
type ContentProps = {
  challenge?: Challenge;
};


const Content: FC<ContentProps> = ({challenge}) => {

  return (
    <div
      id="content-right"
      className="relative float-right w-full pl-0 lg:w-3/4 lg:pl-5"
    >
      <h1 className="hidden lg:mb-3 lg:block">About</h1>
      <div className="space-y-3">
        {/* description */}
        <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border">
          <div className="p-4 leading-5 sm:leading-6">
            <div className="space-y-3">
              <div>
                <span>
                 {challenge?.topic?.description}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* participants */}
        <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border">
          <div className="group flex h-[57px] justify-between rounded-t-none border-b border-skin-border px-4 pb-[12px] pt-3 md:rounded-t-lg">
            <h4 className="flex items-center">
              <div>Participants</div>
              <div className="h-[20px] min-w-[20px] rounded-full bg-skin-text px-1 text-center text-xs leading-normal text-white ml-1 inline-block">
                {challenge?.participants?.length}
              </div>
            </h4>
            <div className="flex items-center"></div>
          </div>
          <div className="leading-5 sm:leading-6">
            {challenge?.participants.map((participant, i) => (
              <div
                key={participant.id}
                className="flex justify-between border-t px-4 py-3 first:border-t-0"
              >
                <div data-headlessui-state="">
                  <button
                    id="headlessui-popover-button-298"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <Link
                      href="#/profile/0xf43235b37bc431dda61cd94900bf20c6f7d76740"
                      className="whitespace-nowrap"
                      tabIndex={-1}
                    >
                      <div className="flex flex-nowrap items-center space-x-1">
                        <div>
                          <Image
                            src="https://cdn.stamp.fyi/avatar/eth:0xf43235b37bc431dda61cd94900bf20c6f7d76740?s=40"
                            alt="avatar"
                            width={20}
                            height={20}
                            unoptimized
                            loader={CustomImageLoader}
                            className="min-w-[20px] w-[20px] h-[20px] rounded-full bg-skin-border object-cover"
                          />
                        </div>
                        <span className="w-full cursor-pointer truncate text-skin-link">
                          {participant?.id}
                        </span>
                      </div>
                    </Link>
                  </button>
                </div>
                <div className="space-x-2">
                  <span className="rounded-full bg-skin-text px-2 text-center text-xs leading-5 text-white cursor-help py-1">
                    member
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
