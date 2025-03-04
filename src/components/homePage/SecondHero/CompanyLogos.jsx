import React from "react";
import "./style.css";
const CompanyLogos = () => {
  const logos1 = [
    { name: "Sciative", src: "/images/home/logo/sciative.png" },
    { name: "Tohands", src: "/images/home/logo/tohands.png" },
    { name: "Tap", src: "/images/home/logo/tap.png" },
    { name: "MedPay", src: "/images/home/logo/medpay.png" },
    { name: "Sivi", src: "/images/home/logo/sivi.png" },
  ];
  const logos2 = [
    { name: "Realm", src: "/images/home/logo/realm.png" },
    { name: "Autoflow", src: "/images/home/logo/autoflow.png" },
    { name: "Skylark", src: "/images/home/logo/skylark.png" },
    { name: "Pichain", src: "/images/home/logo/pichain.png" },
    { name: "Ken42", src: "/images/home/logo/ken42.png" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-[#191919] rounded-t-3xl h-full mt-auto flex justify-around relative overflow-hidden max-lg:max-h-[400px] ">
      <div className="3xl:h-full h-fit">
        <div className="flex flex-col  justify-between h-full  animate-infinite-scroll 3xl:mb-8">
          {logos1.map((logo) => (
            <div key={logo.name} className="mb-8">
              <div className="relative w-full">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="w-auto h-8 xl:h-12 3xl:h-14"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col  justify-between h-full  animate-infinite-scroll">
          {logos1.map((logo) => (
            <div key={logo.name} className="mb-8">
              <div className="relative w-full">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="w-auto h-8 lg:h-8 xl:h-12 3xl:h-14"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="3xl:h-full h-fit">
        <div className="flex flex-col  justify-between h-full  animate-infinite-scroll 3xl:mb-8">
          {logos2.map((logo) => (
            <div key={logo.name} className="mb-8">
              <div className="relative w-full">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="w-auto h-8 lg:h-8 xl:h-12 3xl:h-14"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col  justify-between h-full  animate-infinite-scroll">
          {logos2.map((logo) => (
            <div key={logo.name} className="mb-8">
              <div className="relative w-full">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="w-auto h-8 lg:h-8 xl:h-12 3xl:h-14"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
