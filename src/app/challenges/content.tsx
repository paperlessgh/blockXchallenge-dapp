"use client";

// next
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'

// lib / utils
import { CustomImageLoader } from "@/lib/utils";

const Content = () => {
  const searchParams = useSearchParams();
  const challengeId = searchParams.get('id');

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
                  Discover community-vetted Web3 apps, games, &amp; rewards on
                  Magic Square, a DAO Discovery &amp; Engagement Web3 App Store.
                  Vote to contribute and revolutionize Web3.
                </span>
              </div>
              <div>
                <h4 className="mb-1 text-skin-link">Terms of service</h4>
                <a
                  href="https://docs.magic.store/library/terms-and-conditions"
                  target="_blank"
                  className="whitespace-nowrap flex items-center text-skin-text hover:text-skin-link"
                  rel="noopener noreferrer"
                >
                  <div className="max-w-[300px] truncate">
                    https://docs.magic.store/library/terms-and-conditions
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                    className="mb-[2px] ml-1 inline-block text-xs"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
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
                4
              </div>
            </h4>
            <div className="flex items-center"></div>
          </div>
          <div className="leading-5 sm:leading-6">
            {new Array(4).fill(0).map((_, i) => (
              <div
                key={i}
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
                          0xf432...6740
                        </span>
                      </div>
                    </Link>
                  </button>
                </div>
                <div className="space-x-2">
                  <span className="rounded-full bg-skin-text px-2 text-center text-xs leading-5 text-white cursor-help py-1">
                    author
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
