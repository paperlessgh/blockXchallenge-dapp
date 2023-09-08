"use client";

// react
import { useState } from "react";
// imports
import { Menu } from "@headlessui/react";
import { SearchIcon, ChevronDownIcon } from "lucide-react";

// ui components
import { Input } from "@/components/ui/input";

// data
const links = [
  { label: "All" },
  { label: "Open" },
  { label: "Closed" },
  { label: "Stale" },
];

const SearchFilter = () => {
  const [selectedState, setSelectedState] = useState(links[0])

  return (
    <div className="flex rounded-full border pl-3 pr-0 focus-within:border-skin-text">
      <div className="h-11 flex items-center flex-auto pr-2">
        <SearchIcon
          size={19}
          width="1.2em"
          height="1.2em"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          className="mr-2 flex-shrink-0 text-[19px] text-skin-link"
        />
        <Input
          type="text"
          autoCorrect="off"
          autoCapitalize="none"
          placeholder="Search"
          className="input w-full border-none bg-transparent placeholder:text-skin-text text-skin-text placeholder:font-medium focus-visible:ring-0 focus-visible:outline-none"
        />
      </div>
      <div className="h-11 flex items-center border-l text-skin-link">
        <Menu as="div" className="inline-block h-full text-left">
          <Menu.Button className="flex h-full flex-grow items-center">
            <span className="ml-3">
              {selectedState.label}
            </span>
            <ChevronDownIcon
              width="1.2em"
              height="1.2em"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="ml-1 mr-[12px] text-xs text-skin-text"
            />
          </Menu.Button>
          <div
            className="absolute z-50 inset-[0px_auto_auto_0px] transform translate-x-[648px] translate-y-[54px]"
          >
            <Menu.Items className="overflow-hidden rounded-2xl border bg-skin-header-bg shadow-lg outline-none">
              <div className="no-scrollbar max-h-[300px] overflow-auto">
                {links.map((link) => (
                  <Menu.Item
                    key={link.label}
                    as={"div"}
                    onClick={() => {
                      setSelectedState(link)
                    }}
                    className="bg-skin-header-bg hover:bg-skin-border text-skin-text hover:text-skin-link cursor-pointer whitespace-nowrap px-3 py-2"
                  >
                    <span>{link.label}</span>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default SearchFilter;
