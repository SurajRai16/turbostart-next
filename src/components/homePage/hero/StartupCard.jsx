import React from "react";
import { FaArrowRight } from "react-icons/fa";

const StartupCard = () => {
  return (
    <div className="flex flex-col image lg:flex-row mx-5 sm:mx-10 md:mx-12 text-center lg:mx-32 text-white p-6 sm:p-8 md:p-7 mt-20 rounded-lg relative">
      {/* Header Section */}
      <div className="flex-1 lg:text-left">
        <img
          src="/images/scout/group.png"
          alt="Logo of Scout by TS"
          className="mx-auto lg:mx-0 object-contain w-32 sm:w-40 md:w-48 lg:w-52"
        />
        <h1 className="text-lg md:text-2xl lg:text-3xl lg:text-left font-bold mt-4 text-[#CEFF1C] tracking-normal">
        Student Founders, <br/>
        Meet Your Launchpad
        </h1>
        <p className="text-sm lg:text-lg mt-4 lg:text-left">
        Scout by TS is here to help you build your startup. <br/>
        Funding | Mentorship | Network of Investors
        </p>
        <a href="https://scoutbyts.com/" target="_blank" rel="noopener noreferrer">
  <button className="bg-white text-[#6232FF] mt-6 px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-2 font-bold rounded-md flex items-center justify-center gap-2 mx-auto lg:mx-0 text-sm">
    Explore Scout by TS{" "}
    <span className="bg-[#CEFF1C] p-2 rounded-lg">
      <FaArrowRight />
    </span>
  </button>
</a>

      </div>

      {/* Image Section */}
      <div className="flex flex-1 justify-center relative pr-7">
        {/* Funding Card */}
        <img
          src="/images/scout/funding.png"
          alt="Funding card showing financial growth"
          className="w-40 sm:w-40 md:w-48 lg:w-60 object-contain relative z-0 ml-6 lg:ml-10"
        />

        {/* Mentorship Card */}
        <img
          src="/images/scout/mentor.png"
          alt="Mentorship card showing guidance"
          className="w-40 sm:w-40 md:w-48 lg:w-60 object-contain relative z-10 -ml-16 lg:-ml-36 lg:-bottom-14"
        />

        {/* Community Card */}
        <img
          src="/images/scout/community.png"
          alt="Community card showing network"
          className="w-40 sm:w-40 md:w-48 lg:w-60 object-contain relative z-20 -ml-20 lg:-ml-40 lg:bottom-9"
        />
      </div>
    </div>
  );
};

export default StartupCard;
