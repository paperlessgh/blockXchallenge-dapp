// next
import Link from "next/link";
// imports
import { ConnectButton } from "@rainbow-me/rainbowkit";

// components
import EllipsisMenuButton from "./ellipsis-menu-btn";
import HamburgerMenuButton from "./hamburger-menu-btn";

const Header = () => {
  return (
    <nav
      id="navbar"
      className="sticky top-0 z-40 border-b border-skin-border bg-skin-bg"
    >
      <div>
        <div className="px-3 sm:px-4">
          <div className="flex items-center py-3">
            {/*sidebar menu brand*/}
            <div className="flex flex-auto items-center">
              {/* hambermenu */}
              <HamburgerMenuButton />
              {/* brand */}
              <Link
                href="/"
                className="text-white router-link-active router-link-exact-active text-2xl hidden items-center sm:block"
                aria-current="page"
              >
                {" "}
                BlockXChallenge{" "}
              </Link>
            </div>
            <div className="flex space-x-2">
              <ConnectButton />
              <EllipsisMenuButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
