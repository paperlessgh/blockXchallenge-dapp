// import
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

// shared components
import { IconButton } from "@/components/shared";

const HamburgerMenuButton = () => {
  return (
    <IconButton
      className="!w-[46px] !h-[46px] flex items-center justify-center border hover:border-skin-text rounded-full cursor-pointer select-none sm:hidden"
    >
      <HamburgerMenuIcon
        width="1.2em"
        height="1.2em"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="text-skin-link"
      />
    </IconButton>
  );
};

export default HamburgerMenuButton;
