// react
import { FC, PropsWithChildren } from "react";

// ui components
import { Button } from "@/components/ui/button";

// lib / utils
import { cn } from "@/lib/utils";

// types
type IconButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}>;

const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  type = "button",
  disabled = false,
  onClick,
}) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "w-10 h-10 flex cursor-pointer select-none items-center justify-center rounded-full border hover:bg-transparent hover:border-skin-text",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default IconButton;
