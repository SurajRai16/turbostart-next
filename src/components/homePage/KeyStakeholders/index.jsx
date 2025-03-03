"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const KeyStakeholders = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="section-width padding-top">
      {/* Circles Section */}
      <div className="flex mx-auto w-fit mb-2">
        <div className="bg-[#65B26E] circle"></div>
        <div className="bg-[#65B26E] circle"></div>
        <div className="bg-[#65B26E] circle"></div>
      </div>

      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="font-normal text-lg md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Key Stakeholders
        </h2>
        <p className="max-w-md text-sm mx-auto text-neutral-200 font-light">
          Whether you’re an investor, a university, a corporate partner, or a government body, we want to partner with you!
        </p>
      </div>

      {/* Layout Switch */}
      {!isMobile ? (
        // Original Layout for screens above 600px
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 grid-rows-5 gap-6">
          <div className="lg:row-span-2 bg-gradient-to-tr from-[#141414] to-[#505050] rounded-2xl pl-6 flex flex-col justify-end pt-4">
            <div className="mb-6 md:pt-5">
              <h4>For Startups</h4>
              <p className="text-base">Funding, mentorship, & growth strategies</p>
            </div>
            <Image
              src={"/images/home/feature1.jpg"}
              className="w-full rounded-3xl"
              width={250}
              height={250}
              alt="img"
            />
          </div>
          {[
            { title: "For Stakeholders", desc: "Access vetted startups and exclusive opportunities", img: "/images/home/feature2.jpg" },
            { title: "For Universities", desc: "Empower student entrepreneurs with TS Scout", img: "/images/home/feature4.jpg" },
            { title: "For Governments", desc: "Drive skilling programs and innovation hubs", img: "/images/home/feature5.jpg" },
            { title: "For Corporates", desc: "Partner with startups solving industry challenges", img: "/images/home/feature3.jpg" }
          ].map((item, index) => (
            <div key={index} className="bg-[#191919] rounded-2xl flex flex-col lg:flex-row items-center">
              <div className="md:p-8 xl:p-12 p-4">
                <h4 className="mb-3">{item.title}</h4>
                <p className="text-base">{item.desc}</p>
              </div>
              <Image
                src={item.img}
                className="w-auto h-full ml-auto rounded-3xl"
                width={100}
                height={100}
                alt="img"
              />
            </div>
          ))}
        </div>
      ) : (
        // Mobile Layout for screens below 600px
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gradient-to-tr from-[#141414] to-[#505050] rounded-2xl flex flex-col items-center text-center p-6">
            <h3 className="mb-3">For Startups</h3>
            <p className="mb-4">Funding, mentorship, & growth strategies</p>
            <Image
              src="/images/home/feature1.jpg"
              className="w-full rounded-3xl"
              width={250}
              height={250}
              alt="img"
            />
          </div>
          {[
            { title: "For Stakeholders", desc: "Access vetted startups and exclusive opportunities", img: "/images/home/feature2.jpg" },
            { title: "For Universities", desc: "Empower student entrepreneurs with TS Scout", img: "/images/home/feature4.jpg" },
            { title: "For Governments", desc: "Drive skilling programs and innovation hubs", img: "/images/home/feature5.jpg" },
            { title: "For Corporates", desc: "Partner with startups solving industry challenges", img: "/images/home/feature3.jpg" }
          ].map((item, index) => (
            <div key={index} className="bg-[#191919] rounded-2xl flex flex-col items-center text-center p-6">
              <h3 className="mb-3">{item.title}</h3>
              <p className="mb-4">{item.desc}</p>
              <Image
                src={item.img}
                className="rounded-3xl"
                width={310}
                height={310}
                alt="img"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeyStakeholders;
