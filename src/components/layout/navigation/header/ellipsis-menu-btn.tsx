// import
import { MoreHorizontalIcon } from "lucide-react";

// shared components
import { IconButton } from "@/components/shared";

const EllipsisMenuButton = () => {
  return (
    <IconButton
      className="!w-[46px] !h-[46px] flex cursor-pointer select-none items-center justify-center rounded-full border hover:border-skin-text relative"
    >
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
    </IconButton>
  );
};

export default EllipsisMenuButton;
