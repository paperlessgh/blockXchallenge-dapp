"use client";
// react
import { FC, PropsWithChildren } from "react";
// imports
import { LayoutGridIcon, ChevronDownIcon } from "lucide-react";

// ui components
import { Button } from "@/components/ui/button";

// lib / utils
import { cn } from "@/lib/utils";

type FilterProps = PropsWithChildren<{
  active?: boolean;
  className?: string;
}>;

const Filter: FC<FilterProps> = ({
  active = false,
  className = "",
  children,
}) => {
  return (
    <div className="inline-block h-full text-left mt-2 w-full xs:w-auto sm:mr-2 md:ml-2 md:mt-0">
      <Button
        className={cn(
          "button px-4 w-full whitespace-nowrap h-full",
          { "button--primary": active },
          className
        )}
      >
        <div className="leading-2 flex items-center justify-center leading-3 gap-x-2 px-2">
          <span className="text-sm">{children}</span>
        </div>
      </Button>
    </div>
  );
};

export default Filter;
