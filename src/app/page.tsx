"use client";
import { useState, useEffect } from "react";
import GlobalcohortButton from "@/components/homePage/GlobalcohortButton";
import Hero from "@/components/homePage/hero";
import AboutTurbostart from "@/components/homePage/AboutTurbostart";
import Innovation from "@/components/homePage/Innovation";
import TurbostartGlobal from "@/components/homePage/TurbostartGlobal";
import KeyStakeholders from "@/components/homePage/KeyStakeholders";
import SecondHero from "@/components/homePage/SecondHero";
// import { motion } from "framer-motion";

export default function Home() {
  // const [isDragged, setIsDragged] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]); // Dependency ensures `hasScrolled` updates only once

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

      {/* <motion.div
        className="absolute top-0 left-0 z-50 w-full h-screen bg-white"
        drag="y"
        dragConstraints={{ top: 0, bottom: 200 }}
        onDragEnd={(_, info) => {
          if (info.offset.y < -100) {
            setIsDragged(true);
          }
        }}
        animate={{ y: isDragged ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <Hero />
      </motion.div>

      <div className={`transition-all duration-500 ${isDragged ? "mt-[100px]" : "mt-[100px]"}`}>
        <SecondHero />
      </div> */}
      <div className={`${hasScrolled && "translate-y-[-100%]"} transition-all duration-[4000ms]   absolute top-0 left-0 z-50 w-full h-screen slow-scroll`}>
        <Hero />
      </div>

      <div id="second-hero" className="mt-[100px] transition-all duration-500">
        <SecondHero />
      </div>

      <AboutTurbostart />
      <TurbostartGlobal />
      <KeyStakeholders />
      <Innovation />
    </>
  );
}
