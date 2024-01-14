// react
import {useState} from "react";
// imports
import { SlidersHorizontalIcon } from "lucide-react";

// hooks
import { useChallenges } from "@/common/hooks";

// components
import Filter from "./filter";
import Challenges from "./challenges";

export default function Home() {
  // const []
  // const { data: challenges, loading } = useChallenges({
  //   variables: {
  //     first: 9,
  //   },
  // });

  return (
    <div className="relative">
      <div className="px-4 mx-auto max-w-[1012px] mb-4 flex flex-col flex-wrap items-center xs:flex-row md:flex-nowrap">
        {/* search filter */}
        <div tabIndex={-1} className="mr-4">
          <div className="flex items-center gap-x-2">
            <SlidersHorizontalIcon
              width="1.2em"
              height="1.2em"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="text-skin-link"
            />
            <h4>Filters</h4>
          </div>
        </div>
        {/* status filters */}
        <Filter active>Open</Filter>
        <Filter>Closed</Filter>
        <Filter active>Stale</Filter>
        {/* my pools */}
        <Filter>My Pools</Filter>
        {/* items count */}
        <div className="mt-2 whitespace-nowrap text-right text-skin-text xs:ml-auto xs:mt-0">
          29K challenge pool(s)
        </div>
      </div>
      {/* items */}
      <Challenges />
    </div>
  );
}
