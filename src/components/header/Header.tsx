"use client";
import { useState } from "react";
import Link from "next/link";
import { navItems } from "./data";
import { headerStyles } from "./style";
import { usePathname } from "next/navigation";
import useMediaQuery from "@/utils/useMediaQuery";
import "./style.css";
import Image from "next/image";

const Header = () => {
  // for mobile menu
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  // media query for mobile responsive
  const isAboveMediumScreens = useMediaQuery("(min-width: 1100px)");

  const pathname = usePathname(); //Define a variable to get the current path
  return (
    <>
      <header
        className={`  ${(headerStyles.flexBetween, headerStyles.headerBg)}  `}
      >
        <div className={`${headerStyles.flexBetween} section-width`}>
          <div
            className={`${
              isAboveMediumScreens ? "md:basis-1/4" : headerStyles.flexBetween
            } w-full gap-16`}
          >
            {/* logo */}
            <Link href="/">
              <Image
                src="/images/logo.svg"
                className="md:w-36 w-28 h-full"
                width={200}
                height={200}
                alt="turbostart logo"
              />
            </Link>
          </div>
          {/* navlinks */}
          {isAboveMediumScreens ? (
            <div className={`${headerStyles.flexBetween} basis-3/4  w-full`}>
              <div
                className={`${headerStyles.flexBetween}  justify-end gap-12 text-sm pd:ml-32 w-full`}
              >
                {navItems.slice(0, -1).map((item, i) => (
                  <div
                    key={i}
                    // ${item.path == "contact" ? `${contactButtonStyle}` : ""}
                    className={`
                     ${
                       pathname === item.path ? "text-white" : "text-gray-500"
                     } hover:text-white`}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </div>
                ))}
                <Link
                  className={headerStyles.contactButtonStyle}
                  href="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-white p-1"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M18.5 16.5C18.5 15.6716 19.1716 15 20 15L39.4999 15C40.3283 15 40.9999 15.6716 40.9999 16.5C40.9999 17.3284 40.3283 18 39.4999 18L20 18C19.1716 18 18.5 17.3283 18.5 16.5ZM39.4999 24L12.5 24C11.6716 24 11 24.6716 11 25.5C11 26.3284 11.6716 27 12.5 27L39.4999 27C40.3283 27 40.9999 26.3284 40.9999 25.5C40.9999 24.6716 40.3283 24 39.4999 24ZM39.4999 33L26 33C25.1716 33 24.5 33.6716 24.5 34.5C24.5 35.3283 25.1716 36 26 36L39.4999 36C40.3283 36 40.9999 35.3283 40.9999 34.5C40.9999 33.6716 40.3283 33 39.4999 33Z"
                  fill="black"
                />
              </svg>
            </button>
          )}
        </div>

        {!isAboveMediumScreens && isMenuToggled && (
          <div
            className="h-screen w-full"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <div className={headerStyles.mobileHeader}>
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                  >
                    <circle
                      cx="20.0531"
                      cy="20"
                      r="20"
                      fill="url(#paint0_linear_1622_1649)"
                      fill-opacity="0.28"
                    />
                    <circle
                      cx="20.0531"
                      cy="20"
                      r="19.75"
                      stroke="#C31F3F"
                      stroke-opacity="0.3"
                      stroke-width="0.5"
                    />
                    <path
                      d="M6.34599 19.2929C5.95547 19.6834 5.95547 20.3166 6.34599 20.7071L12.71 27.0711C13.1005 27.4616 13.7336 27.4616 14.1242 27.0711C14.5147 26.6805 14.5147 26.0474 14.1242 25.6569L8.46731 20L14.1242 14.3431C14.5147 13.9526 14.5147 13.3195 14.1242 12.9289C13.7336 12.5384 13.1005 12.5384 12.71 12.9289L6.34599 19.2929ZM33.0531 19L7.0531 19V21L33.0531 21V19Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1622_1649"
                        x1="20.0531"
                        y1="0"
                        x2="20.0531"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C31F3F" />
                        <stop offset="1" stop-color="#511C27" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>
              {/* MENU ITEMS */}
              <div className={headerStyles.mobileMenuItem}>
                {navItems.map((item, i) => (
                  <Link key={i} href={item.path}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
