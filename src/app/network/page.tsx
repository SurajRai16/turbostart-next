import BannerSection from "@/components/BannerSection";
import InvestorsComponent from "@/components/networkPage/investorsComponent/InvestorsComponent";
import "./style.css";

import { Metadata } from "next";
import Image from "next/image";
import { managementData } from "@/components/networkPage/investorsComponent/data";

export const metadata: Metadata = {
  title: "Startup Network of Innovators and Partners | Turbostart",
  description: "Explore Turbostart's startup network, connecting innovators, startups, and partners worldwide. Join us in shaping the future of business and technology.",
  keywords: "Startup Network",
  alternates: {
    canonical: "https://turbostart.co/network",
  },
};

const NetworkPage: React.FC = () => {
  return (
    <div>
      {/* <BannerSection img="/images/network/network-banner.jpg" /> */}
      <div className="lg:h-[500px]  md:h-[300px]  sm:h-[250px] h-[200px]    mt-[70px] relative lg:max-w-5xl md:max-w-2xl sm:max-w-[550px] min-[320px]:max-w-xs mx-auto">
        {/* <a href="#usa">
          <div className="lg:h-7 lg:w-7 md:w-5 md:h-5 w-3 h-3 md:hover:w-fit md:hover:h-fit border-2 border-white bg-[#f26465] absolute lg:top-36 lg:left-48 md:top-24 md:left-32 sm:top-[72px] sm:left-28 top-10 left-14 z-10 group cursor-pointer transition duration-300 ease-in-out ">
            <div className="map-list hidden md:group-hover:block transition duration-300 ease-in-out px-2 py-1">
              <h6 className="text-xs">USA</h6>
            </div>
          </div>
        </a>

        <a href="#india">
          <div className="lg:h-7 lg:w-7 md:w-5 md:h-5 w-3 h-3 md:hover:w-fit md:hover:h-fit border-2 border-white bg-[#66b26e] absolute lg:top-[196px] lg:right-[300px] md:top-32 md:right-[195px] sm:top-[105px] sm:right-[163px] top-14 right-[93px] z-10 group cursor-pointer transition duration-300 ease-in-out ">
            <div className="map-list hidden md:group-hover:block transition duration-300 ease-in-out px-2 py-1">
              <h6 className="text-xs">INDIA</h6>
            </div>
          </div>
        </a>
        <a href="#mea">
          <div className="lg:h-7 lg:w-7 md:w-5 md:h-5 w-3 h-3 md:hover:w-fit md:hover:h-fit border-2 border-white bg-[#ebc360] absolute lg:top-[180px] lg:right-[370px] md:top-[120px] md:right-[240px] sm:right-52 sm:op-[105px] top-14 right-[120px] z-10 group cursor-pointer transition duration-300 ease-in-out ">
            <div className="map-list hidden md:group-hover:block transition duration-300 ease-in-out px-2 py-1">
              <h6 className="text-xs">MEA</h6>
            </div>
          </div>
        </a> */}
        {/* <div className="lg:h-7 lg:w-7 md:w-5 md:h-5 w-3 h-3 md:hover:w-fit md:hover:h-fit border-2 border-white bg-[#f26465] absolute lg:top-[270px] lg:right-[227px] md:top-[175px] md:right-[145px] sm:top-[145px] sm:right-[120px] top-20 right-[72px] z-10 group cursor-pointer transition duration-300 ease-in-out ">
          <div className="map-list hidden md:group-hover:block transition duration-300 ease-in-out px-2 py-1">
            <h6 className="text-xs">SINGAPORE</h6>
          </div>
        </div> */}
        <Image src={"/images/network/2.png"} className="h-auto lg:max-w-5xl md:max-w-2xl sm:max-w-[550px] min-[320px]:max-w-xs mx-auto" width={1500} height={1000} alt="world map" />
      </div>
      <InvestorsComponent />
    </div>
  );
};

export default NetworkPage;
