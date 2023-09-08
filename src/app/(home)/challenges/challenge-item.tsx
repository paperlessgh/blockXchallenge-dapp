// next
import Link from "next/link";
import Image from "next/image";
// imports
import { VerifiedIcon } from "lucide-react";

const ChallengeItem = () => {
  return (
    <div>
      <Link href="#">
        <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border mb-0 flex items-center justify-center text-center transition-all hover:border-skin-text">
          <div className="p-4 leading-5 sm:leading-6">
            <div className="relative mb-2 inline-block">
              <div symbol-index="space" className="mb-1">
                {/* <Image
                  className="min-w-[82px] w-[82px] h-[82px] rounded-full bg-skin-border object-cover hidden"
                  alt="avatar"
                /> */}
                <Image
                  src="https://cdn.stamp.fyi/space/magicappstore.eth?s=164"
                  width={164}
                  height={164}
                  alt="avatar"
                  className="min-w-[82px] w-[82px] h-[82px] rounded-full bg-skin-border object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 truncate">
              <h3 className="mb-0 mt-0 !h-[32px] overflow-hidden pb-0 text-[22px] leading-8">
                Magic Square
              </h3>
              <div className="cursor-help pt-[1px]">
                <VerifiedIcon
                  size={20}
                  fill="white"
                  className="iconfont text-xl leading-5 stroke-skin-bg"
                />
                {/* <i
                  className="iconfont iconcheck"
                  style="font-size: 20px; line-height: 20px;"
                ></i> */}
              </div>
            </div>
            <div className="mb-[12px] text-skin-text">127K members</div>
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
