"use client";
import { useState, useEffect } from "react";
import GlobalcohortButton from "@/components/homePage/GlobalcohortButton";
import Hero from "@/components/homePage/hero";
import AboutTurbostart from "@/components/homePage/AboutTurbostart";
import Innovation from "@/components/homePage/Innovation";
import TurbostartGlobal from "@/components/homePage/TurbostartGlobal";
import KeyStakeholders from "@/components/homePage/KeyStakeholders";
import SecondHero from "@/components/homePage/SecondHero";

export default function Home() {
  // const [hasScrolled, setHasScrolled] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10 && !hasScrolled) {
  //       setHasScrolled(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hasScrolled]); // Dependency ensures `hasScrolled` updates only once

  const handleScroll = (event: any) => {
    const scrollY = event.detail.scrollTop;

    if (scrollY > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FundingScheme",
            name: "Turbostart LLP",
            url: "https://turbostart.co",
            logo: "https://turbostart.co/assets/logo-1c875935.svg",
            contactPoint: [
              {
                "@type": "ContactPoint",
                mobile: "+91 97425 25103",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "en",
              },
            ],
            sameAs: ["https://www.linkedin.com/company/lets-turbostart/", "https://www.youtube.com/@turbostart", "https://www.instagram.com/letsturbostart/"],
          }),
        }}
      />

      <GlobalcohortButton />

      <div className={`${isScroll && "translate-y-[-100%]"} transition-all duration-1000 absolute top-0 left-0 z-50 w-full h-screen slow-scroll overflow-y-scroll`} onScroll={handleScroll}>
        <Hero />
      </div>

      <div id="second-hero" className="mt-[100px] transition-all duration-500">
        <SecondHero />
      </div>
      {/* <div className={`${hasScrolled && "translate-y-[-100%]"} transition-all duration-1000 absolute top-0 left-0 z-50 w-full h-screen slow-scroll `} scrollEvents={true} onScroll={handleScroll}>
        <Hero />
      </div>

      <div id="second-hero" className="mt-[100px] transition-all duration-500">
        <SecondHero />
      </div> */}

      <AboutTurbostart />
      <TurbostartGlobal />
      <KeyStakeholders />
      <Innovation />
    </>
  );
}
