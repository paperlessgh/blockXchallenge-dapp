"use client";

// imports
import { Menu } from "@headlessui/react";
import { LayoutGridIcon, ChevronDownIcon } from "lucide-react";

// data
const links = [
  { href: "/account-settings", label: "topic 1", count: 0 },
  { href: "/support", label: "topic 2", count: 100 },
  { href: "/license", label: "topic 3", count: 50 },
  { href: "/sign-out", label: "topic 4", count: 40 },
];

const CategoryFilter = () => {
  return (
    <Menu
      as="div"
      className="inline-block h-full text-left mt-2 w-full xs:w-auto sm:mr-2 md:ml-2 md:mt-0"
    >
      <Menu.Button className="button px-[22px] w-full whitespace-nowrap pr-3 h-full">
        <div className="leading-2 flex items-center leading-3">
          <LayoutGridIcon
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="mr-2 text-xs"
          />
          <span>Topics</span>
          <ChevronDownIcon
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="ml-1 text-xs text-skin-text"
          />
        </div>
      </Menu.Button>
      <div className="absolute z-50 inset-[0px_auto_auto_0px] transform translate-x-[738px] translate-y-[54px]">
        <Menu.Items className="overflow-hidden rounded-2xl border bg-skin-header-bg shadow-lg outline-none">
          <div className="no-scrollbar max-h-[300px] overflow-auto">
            {links.map((link) => (
              <Menu.Item
                key={link.href}
                as={"div"}
                className="bg-skin-header-bg hover:bg-skin-border text-skin-text hover:text-skin-link cursor-pointer whitespace-nowrap px-3 py-2"
              >
                <div className="flex">
                  <span className="mr-3">{link.label}</span>
                  {link.count > 0 && (
                    <span className="ml-auto mt-[-3px] flex">
                      <div className="h-[20px] min-w-[20px] rounded-full bg-skin-text px-1 text-center text-xs leading-normal text-white my-auto">
                        {link.count}
                      </div>
                    </span>
                  )}
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default CategoryFilter;
