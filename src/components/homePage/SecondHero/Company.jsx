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
    <div className="h-[210px] sm:h-[200px] md:h-[250px] lg:h-[280px] mx-auto w-[100%] max-w-screen-xl p-4 bg-[#191919] rounded-t-xl flex justify-center md:justify-around items-center relative overflow-hidden">
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center h-full animate-infinite-scroll gap-y-6 sm:gap-y-8">
          {logos1.map((logo) => (
            <div key={logo.name} className="mb-4 sm:mb-6 md:mb-8">
              <div className="relative w-full flex justify-center">
                <img src={logo.src} alt={`${logo.name} logo`} className="w-auto h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
