// next
import Link from "next/link";
// import
import { Popover } from "@headlessui/react";
import { MoreHorizontalIcon } from "lucide-react";

const EllipsisMenuButton = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="!w-[46px] !h-[46px] flex cursor-pointer select-none items-center justify-center rounded-full border hover:border-skin-text relative">
        <MoreHorizontalIcon
          fill="none"
          width="1.2em"
          height="1.2em"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="text-skin-link"
        />
      </Popover.Button>
      <div className="absolute z-50 inset-[0px_auto_auto_0px] tranform -translate-x-[350px] translate-y-[62px]">
        <Popover.Panel className="w-screen max-w-xs outline-none sm:max-w-sm">
          <div className="overflow-hidden rounded-2xl border bg-skin-header-bg shadow-lg">
            <div className="no-scrollbar max-h-[85vh] overflow-y-auto overscroll-contain">
              <div>
                <div>
                  {/* todo: header */}
                  {/* menu items */}
                  <div className="group m-4 my-[30px]">
                    <Link
                      href={"/topics"}
                      className="block w-full cursor-pointer py-1 text-left text-xl text-skin-link hover:!text-skin-link hover:!opacity-100 group-hover:text-skin-text group-hover:opacity-70"
                    >
                      Explore Topics
                    </Link>
                    <Link
                      href={"/challenges"}
                      className="block w-full cursor-pointer py-1 text-left text-xl text-skin-link hover:!text-skin-link hover:!opacity-100 group-hover:text-skin-text group-hover:opacity-70"
                    >
                      Explore Challenges
                    </Link>
                    <Link
                      href={"/create-challenge"}
                      className="block w-full cursor-pointer py-1 text-left text-xl text-skin-link hover:!text-skin-link hover:!opacity-100 group-hover:text-skin-text group-hover:opacity-70"
                    >
                      Create a challenge
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </div>
    </Popover>
  );
};

export default EllipsisMenuButton;
