// next
import Link from "next/link";
import Image from "next/image";
// imports
import { VerifiedIcon } from "lucide-react";

const TopicCard = () => {
  return (
    <div>
      <Link href="/?topic=1">
        <div className="border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border mb-0 flex items-center justify-center text-center transition-all hover:border-skin-text">
          <div className="p-4 pb-7 leading-5 sm:leading-6">
            <div className="relative mb-2 inline-block">
              <div symbol-index="space" className="mb-1">
                <Image
                  src="https://cdn.stamp.fyi/space/magicappstore.eth?s=164"
                  width={164}
                  height={164}
                  alt="avatar"
                  className="min-w-[82px] w-[82px] h-[92px] rounded-full bg-skin-border object-cover"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 truncate">
              <h3 className="mb-0 mt-0 !h-[32px] overflow-hidden pb-0 text-[22px] leading-8">
                Topic Name
              </h3>
            </div>
            <div className="mb-[12px] text-skin-text">127K Challenges</div>
            <div className="mx-auto">
              <Link
                href="/?topic=1"
                className="button button--primary px-[22px] py-2 mx-auto group min-w-[125px]"
              >
                <span>View Challenges</span>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopicCard;
