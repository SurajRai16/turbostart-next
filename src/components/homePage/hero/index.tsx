"use client";
import useMediaQuery from "@/utils/useMediaQuery";
import { heroStyles } from "./style";
import { heroBottomContent } from "./data";
import Image from "next/image";
import StartupCard from './StartupCard';


const Hero = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <section>
        <div className="text-center pt-24 md:pt-32">
          <div className="flex">
            <div className={`${heroStyles.topText}`}>
              <Image
                src="/images/stars.svg"
                width={50}
                height={50}
                className="w-auto h-auto"
                alt="stars"
              />{" "}
              Backing Passionate Individuals
            </div>
          </div>
          <div
            className={`${heroStyles.mainTitle} ${
              isBelowMediumScreen
                ? ""
                : "hero-text relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#575757]"
            }`}
          >
            From here, you can only go up
          </div>
          <div className="hero-secondary-text md:text-lg mx-4 ">
            We fuel disruptive ideas and aid entrepreneurs globally
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(/images/space.png)`,

            width: "100%",
          }}
          className={heroStyles.heroImage}
        ></div>
        {/* <StartupCard/> */}
        <div
          className="mx-auto w-5/6 mt-[ -100px ]
        "
        >
          {/* <div className="md:flex gap-16 mb-32">
            {heroBottomContent.map((item, i) => (
              <div
                key={i}
                className="basis-1/3 flex gap-8 items-start border border-white rounded-lg p-6 mt-8"
              >
                <div className="circle-parent">
                  <div className={`${item.color} circle`}></div>
                </div>

                <p>{item.text}</p>
              </div>
            ))}
          </div> */}
          {/* <div className="border border-[#F5E5BB4D] px-8 md:px-24 text-center py-12 md:flex items-start gap-8 md:gap-24 section-shadow">
            <img src="/images/quotes.svg" alt="quote" className="mx-auto" />
            <p className="quote-text text-lg lg:text-4xl md:text-3xl sm:text-2xl lg:mx-14 xs:text-xl pt-2  w-full">
              90% Startups are bound to fail? Think Again. We're challenging the
              status quo, defying gravity.
            </p>
          </div> */}
        </div>
      </section>
      {/* <div className="h-screen">
        <div className="text-center md:pt-36 pt-32 pb-12">
          <div className="flex">
            <div className={`${heroStyles.topText}`}>
              <Image
                src="/images/stars.svg"
                width={50}
                height={50}
                className="w-auto h-auto"
                alt="stars"
              />
              Backing Passionate Individuals
            </div>
          </div>
          <h1
            className={`${heroStyles.mainTitle} ${
              isBelowMediumScreen
                ? ""
                : "hero-text relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#575757]"
            }`}
          >
            From here, you can only go up
          </h1>
          <div className="hero-secondary-text md:text-lg mx-4 ">
            We fuel disruptive ideas and aid entrepreneurs globally
          </div>
        </div>
      </div>
      <div
        className="section-width mt-[ -100px ]
          "
        style={{
          backgroundImage: `url(/images/space.png)`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="md:flex gap-16 mb-32">
          {heroBottomContent.map((item, i) => (
            <div
              key={i}
              className="basis-1/3 flex gap-8 items-start border border-white rounded-lg p-6 mt-8"
            >
               <img src={item.img} className="mt-1" alt="red icon" /> 
              <div className="circle-parent">
                <div className={`${item.color} circle`}></div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#F5E5BB4D] px-8 md:px-24 text-center py-12 md:flex items-start gap-8 md:gap-24 section-shadow">
          <img src="/images/quotes.svg" alt="quote" className="mx-auto" />
          <p className="quote-text text-lg lg:text-4xl md:text-3xl sm:text-2xl lg:mx-14 xs:text-xl pt-2  w-full">
            90% Startups are bound to fail? Think Again. We're challenging the
            status quo, defying gravity.
          </p>
        </div>
      </div> */}
      
    </>
  );
};

export default Hero;
