// next
import Link from "next/link";
// imports
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
                href="#/"
                className="text-white router-link-active router-link-exact-active text-2xl hidden items-center sm:block"
                aria-current="page"
              >
                {" "}
                BlockXChallenge{" "}
              </Link>
            </div>
            <div className="flex space-x-2">
              <ConnectButton />
              {/* <button
                data-v-4571bf26=""
                type="button"
                className="button px-[22px]"
                aria-label="Connect wallet"
                data-testid="button-connect-wallet"
              >
                <span className="hidden sm:block">Connect wallet</span>
                <svg
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  className="-ml-2 -mr-[11px] block align-text-bottom sm:hidden"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1"
                  ></path>
                </svg>
              </button> */}
              <div>
                <EllipsisMenuButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
