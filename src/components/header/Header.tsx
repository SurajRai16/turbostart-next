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
      <header className={`  ${(headerStyles.flexBetween, headerStyles.headerBg)} z-[100] `}>
        <div className={`${headerStyles.flexBetween} section-width`}>
          <div className={`${isAboveMediumScreens ? "md:basis-1/4" : headerStyles.flexBetween} w-full gap-16`}>
            {/* logo */}
            <Link href="/">
              <Image src="/images/logo.svg" className="md:w-36 w-28 h-full" width={200} height={200} alt="turbostart logo" />
            </Link>
          </div>
          {/* navlinks */}
          {isAboveMediumScreens ? (
            <div className={`${headerStyles.flexBetween} basis-3/4  w-full`}>
              <div className={`${headerStyles.flexBetween}  justify-end gap-12 text-sm pd:ml-32 w-full`}>
                {navItems.slice(0, -1).map((item, i) => (
                  <div
                    key={i}
                    // ${item.path == "contact" ? `${contactButtonStyle}` : ""}
                    className={`
                     ${pathname === item.path ? "text-white" : "text-gray-500"} hover:text-white`}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </div>
                ))}
                <Link className={headerStyles.contactButtonStyle} href="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <button className="flex flex-col gap-1.5 p-2 " onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <span className="w-6 h-0.5 bg-white block"></span>
              <span className="w-6 h-0.5 bg-white block"></span>
              <span className="w-6 h-0.5 bg-white block"></span>
            </button>
          )}
        </div>

        {!isAboveMediumScreens && isMenuToggled && (
          <div className="h-screen w-full" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <div className={headerStyles.mobileHeader}>
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12 relative">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none" className="w-16 absolute top-0 left-5">
                    <circle cx="20.0531" cy="20" r="20" fill="url(#paint0_linear_1622_1649)" fill-opacity="0.28" />
                    <circle cx="20.0531" cy="20" r="19.75" stroke="#C31F3F" stroke-opacity="0.3" stroke-width="0.5" />
                    <path
                      d="M6.34599 19.2929C5.95547 19.6834 5.95547 20.3166 6.34599 20.7071L12.71 27.0711C13.1005 27.4616 13.7336 27.4616 14.1242 27.0711C14.5147 26.6805 14.5147 26.0474 14.1242 25.6569L8.46731 20L14.1242 14.3431C14.5147 13.9526 14.5147 13.3195 14.1242 12.9289C13.7336 12.5384 13.1005 12.5384 12.71 12.9289L6.34599 19.2929ZM33.0531 19L7.0531 19V21L33.0531 21V19Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_1622_1649" x1="20.0531" y1="0" x2="20.0531" y2="40" gradientUnits="userSpaceOnUse">
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
