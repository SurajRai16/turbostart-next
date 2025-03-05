"use client"
import { useState, useEffect } from "react";
import GlobalcohortButton from "@/components/homePage/GlobalcohortButton";
import Hero from "@/components/homePage/hero";
import AboutTurbostart from "@/components/homePage/AboutTurbostart";
import Innovation from "@/components/homePage/Innovation";
import TurbostartGlobal from "@/components/homePage/TurbostartGlobal";
import KeyStakeholders from "@/components/homePage/KeyStakeholders";
import SecondHero from "@/components/homePage/SecondHero";

export default function Home() {
  const [showHero, setShowHero] = useState(true);
  const [addMargin, setAddMargin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondHeroSection = document.getElementById("second-hero");
      if (secondHeroSection) {
        const rect = secondHeroSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setShowHero(false); 
          setAddMargin(true); 
        } else {
          setShowHero(true); 
          setAddMargin(false); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            sameAs: [
              "https://www.linkedin.com/company/lets-turbostart/",
              "https://www.youtube.com/@turbostart",
              "https://www.instagram.com/letsturbostart/",
            ],
          }),
        }}
      />

      <GlobalcohortButton />

      {showHero && <Hero />}

      <div id="second-hero" className={`${addMargin ? "mt-24" : "mt-0"} transition-all duration-500`}>
        <SecondHero />
      </div>

      <AboutTurbostart />
      <TurbostartGlobal />
      <KeyStakeholders />
      <Innovation />
    </>
  );
}
