// next
import Link from "next/link";
// imports
import { TwitterIcon, FacebookIcon, YoutubeIcon } from "lucide-react";

// components
import SubscriptionForm from "./subscription-form";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="-mt-3 border-t" />
      <div className="px-4 mx-auto max-w-[1012px] space-y-5 py-[40px] md:space-y-0">
        <div className="space-y-5 md:flex md:space-y-0">
          {/* email subscription */}
          <div className="mx-auto md:mx-0">
            <h4 className="font-medium mb-2 text-center md:text-left">
              Get the latest BlockX updates
            </h4>
            <SubscriptionForm />
          </div>
          {/* quick links */}
          <div className="flex justify-center space-x-[70px] text-center md:w-full md:text-left lg:ml-[60px] lg:justify-start">
            <div className="space-y-3">
              <h4 className="font-medium">Quick Links</h4>
              <Link
                href="/about"
                className="whitespace-nowrap flex items-center justify-center text-skin-text hover:text-skin-link md:justify-start"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="whitespace-nowrap flex items-center justify-center text-skin-text hover:text-skin-link md:justify-start"
              >
                Blog
              </Link>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Resources</h4>
              <Link
                href="/faq"
                className="whitespace-nowrap flex items-center justify-center text-skin-text hover:text-skin-link md:justify-start"
              >
                FAQs
              </Link>
              <Link
                href="/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap flex items-center justify-center text-skin-text hover:text-skin-link md:justify-start"
              >
                Docs
              </Link>
              <Link
                href="/github"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap flex items-center justify-center text-skin-text hover:text-skin-link md:justify-start"
              >
                Github
              </Link>
              <Link
                href="/telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap flex items-center justify-center text-skin-text hover:text-skin-link md:justify-start"
              >
                Support
              </Link>
            </div>
          </div>
          {/* community & social links */}
          <div className="pb-1 md:hidden lg:mt-0 lg:block">
            <h4 className="font-medium hidden whitespace-nowrap lg:block">
              Join Our Community
            </h4>
            <div className="flex items-center justify-center space-x-3 pt-2 md:mt-4 md:justify-start lg:mt-0 lg:justify-end">
              <span>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="whitespace-nowrap"
                  rel="noopener noreferrer"
                >
                  <div className="text-skin-text hover:text-skin-link">
                    <TwitterIcon
                      width="1.2em"
                      height="1.2em"
                      fill="none"
                      viewBox="0 0 30 30"
                      className="text-[24px]"
                    />
                  </div>
                </Link>
              </span>
              <span>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="whitespace-nowrap"
                  rel="noopener noreferrer"
                >
                  <div className="text-skin-text hover:text-skin-link">
                    <FacebookIcon
                      width="1.2em"
                      height="1.2em"
                      fill="none"
                      viewBox="0 0 30 30"
                      className="text-[24px]"
                    />
                  </div>
                </Link>
              </span>
              <span>
                <Link
                  href="https://www.youtube.com/channel/channel-code"
                  target="_blank"
                  className="whitespace-nowrap"
                  rel="noopener noreferrer"
                >
                  <div className="text-skin-text hover:text-skin-link">
                    <YoutubeIcon
                      width="1.2em"
                      height="1.2em"
                      fill="none"
                      viewBox="0 0 30 30"
                      className="text-[24px]"
                    />
                  </div>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="whitespace-nowrap text-center opacity-40 md:text-left">
          {" "}
          © 2023 Paperless Technologies.{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
