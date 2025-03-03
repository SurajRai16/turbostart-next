import React from "react";
import Image from "next/image";
import Scrollbar from "@/components/homePage/Scrollbar";

const AboutTurbostart = () => {
  return (
    <>
      <section className="section-width text-white py-10">
        {/* Circle Decoration */}
        <div className="flex mx-auto w-fit mb-2">
          <div className="bg-[#f16365] circle"></div>
          <div className="bg-[#f16365] circle"></div>
          <div className="bg-[#f16365] circle"></div>
        </div>

        <div className=" mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-normal text-xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-white  to-gray-400 bg-clip-text text-transparent">
              About Turbostart
            </h2>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center rounded-xl border border-slate-500">
            {/* Left Column */}
            <div className="lg:w-1/3 text-center lg:text-left sm:px-8 p-5 sm:p-0">
              <h3 className="text-2xl font-normal mb-4">Who We Are</h3>
              <div className="mb-6 text-[10px] text-[#BABABA] leading-relaxed">
                We’re here to support committed founders and bold ideas, driving
                their growth through our network, expertise, and resources.
                <br />
                <br />
                At Turbostart, we understand what startups need to
                succeed—access to clients, business opportunities, and the right
                resources to scale.
              </div>
              <button className="bg-gradient-to-t from-[#c6c8df] to-white text-black text-sm px-4 py-2 rounded-xl hover:bg-gray-200">
                Learn More
              </button>
            </div>

            {/* Right Column: Timeline */}
            <div className="w-full lg:w-2/3">
              <Image
                src={"/images/home/map.svg"}
                width={600}
                height={450}
                className="w-full"
                alt="About Turbostart"
              />
            </div>
          </div>

          {/* Trusted Network Section */}
          <div className="flex flex-col lg:flex-row gap-12 pt-10">
            <div className="flex flex-wrap sm:flex-nowrap w-full lg:w-1/2 rounded-lg bg-[#282828] h-fit">
              <div className="bg-[#27272C] flex flex-col items-center rounded-lg sm:w-[300px] w-full ">
                <div className="rounded-lg">
                  <img
                    src="/images/home/globe.jpg"
                    alt="A Trusted Network"
                    className="w-[700px] p-1"
                  />
                </div>
              </div>

              <div className="bg-[#282828] p-5 rounded-lg justify-center flex flex-col w-full py-4 sm:py-0">
                <p className="text-gray-400 text-xs leading-loose">
                  <span className="text-white font-semibold">
                    A Trusted Network:
                  </span>{" "}
                  Opening doors to investors, corporates, and partners that
                  drive growth and me unlock new business opportunities.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap w-full lg:w-1/2 rounded-lg bg-[#282828] h-fit">
              <div className="bg-[#27272C] flex flex-col items-center rounded-lg sm:w-[300px] w-full ">
                <div className="rounded-lg">
                  <img
                    src="/images/home/12.jpg"
                    alt="A Trusted Network"
                    className="w-[700px] p-1"
                  />
                </div>
              </div>

              <div className="bg-[#282828] p-5 xl:px-7 rounded-lg justify-center flex flex-col w-full py-4 sm:py-0">
                <p className="text-gray-400 text-xs leading-loose">
                  <span className="text-white font-semibold">
                    Centers of Excellence (CoEs):
                  </span>{" "}
                  Providing hands-on expertise in strategy, design, technology,
                  & operations to solve real challenges and accelerate growth.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center sm:mt-12">
            <div className="flex flex-col lg:flex-row sm:gap-12 pt-10">
              <div className="flex flex-wrap sm:flex-nowrap w-full lg:w-1/2 rounded-lg h-fit">
                <h2 className="font-normal text-xl md:text-3xl lg:text-4xl bg-gradient-to-r from-white  to-gray-400 bg-clip-text text-transparent">
                  We invest across the <br />
                  spectrum of innovation
                </h2>
              </div>

              <div className="text-[#b9b9b9] flex flex-wrap sm:flex-nowrap w-full lg:w-1/2 rounded-lg h-fit md:pl-16 text-sm">
                from early-stage ideas to Series A startups - because we believe
                great ideas can come from anywhere. No matter the stage, we have
                tailored programs and resources for every founder, helping them
                turn their vision into reality.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Scrollbar />

      <div className="text-white bg-green-600 text-sm md:text-xl lg:text-2xl xl:text-[28px] font-light py-5 my-5 flex tracking-normal w-full gap-1">
        <div className="section-width flex gap-5 items-center justify-center">
          <span>
            <img src="/images/home/icon.svg" alt="icon" className="w-8" />
          </span>
          Our ambition is bold: to build a global startup ecosystem out of
          India, for the world.
        </div>
      </div>
    </>
  );
};

export default AboutTurbostart;
