
import GlobalcohortButton from "@/components/homePage/GlobalcohortButton";
import Hero from "@/components/homePage/hero";
import AboutTurbostart from "@/components/homePage/AboutTurbostart"
import Innovation from "@/components/homePage/Innovation"
import TurbostartGlobal from "@/components/homePage/TurbostartGlobal"
import KeyStakeholders from "@/components/homePage/KeyStakeholders"
import MiniHero from "@/components/homePage/MiniHero"
import SecondHero from "@/components/homePage/SecondHero"

export default function Home() {
  const jsonLd = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* <svg
        id="svg"
        viewBox="0 0 20 2808"
        width="20"
        height="2808"
        aria-hidden="true"
      >
        <path
          className="line"
          fill="none"
          stroke-width="1.25"
          stroke="url(#gradient)"
          stroke-opacity="1"
          d="M 1 -1 V 2246.4 l -24 24 V 2808"
        ></path>

        <defs>
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1="50"
            y2="50"
          >
            <stop stop-color="#18CCFC" stop-opacity="0"></stop>
            <stop stop-color="#18CCFC"></stop>
            <stop offset="0.325" stop-color="#6344F5"></stop>
            <stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg> */}

      <GlobalcohortButton />
      {/* <Ticker /> */}
      <Hero />
      <MiniHero />
<AboutTurbostart />

      <TurbostartGlobal/>
      <KeyStakeholders/>
      <Innovation/>
      <div className="relative section-width ">
        {/* <div className="absolute md:left-4 h-full z-[-10] lg:block hidden">
          <img src="/images/line.png" className="h-[480rem]" alt="line" />
        </div> */}
        {/* <Branches />
        <Mission />
        <CoeS />
        <ClientLogo />
        <Testimonial />
        <VideoSection />
        <HowItWorks />
        <ImageSlider />
        <EventMedia />
        <BlogSection /> */}
      </div>
    </>
  );
}
