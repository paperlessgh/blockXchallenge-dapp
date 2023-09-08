// next
import Image from "next/image";
// imports
import { XIcon, ActivityIcon, PlusIcon } from "lucide-react";

// shared components
import { IconButton } from "@/components/shared";

// lib / uitls
import { CustomImageLoader } from "@/lib/utils";

// static assets
import logo from "@public/assets/logos/logo2.png";

const Sidebar = () => {
  return (
    <div id="sidebar" className="flex flex-col">
      <div className="sticky top-0 z-40 h-screen overflow-hidden bg-skin-bg transition-all sm:w-[60px] max-w-0 sm:max-w-none">
        <div className="no-scrollbar flex h-full flex-col items-end overflow-auto overscroll-contain pb-[12px] border-r border-skin-border">
          {/* logo */}
          <div className="w-full">
            <div className="flex h-[70px] items-center justify-center">
              <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                unoptimized
                loader={CustomImageLoader}
                className="object-contain rounded-full"
              />
              {/* <XIcon width={35} height={35} className="text-white" /> */}
            </div>
          </div>
          {/* activity icon*/}
          <div className="mt-[6px] px-[10px]">
            <IconButton>
              <ActivityIcon
                width={20}
                height={20}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className="text-skin-link"
              />
            </IconButton>
          </div>
          {/* seperator */}
          <div className="flex w-[60px] items-center justify-center py-[15px]">
            <div className="h-[1px] w-[20px] bg-skin-border bg-white"></div>
          </div>
          {/* nav items */}
          <div className="flex flex-col items-center space-y-2 px-[10px]">
            <IconButton>
              <PlusIcon
                width="1.2em"
                height="1.2em"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                strokeWidth={2}
                className="text-skin-link"
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
