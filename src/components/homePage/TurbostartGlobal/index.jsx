import Image from "next/image";

const TurbostartGlobal = () => {
  const stats = [
    {
      icon: <img src="/images/home/icons/startups.svg" alt="startup" />,
      value: "50+",
      label: "Startups",
    },
    {
      icon: <img src="/images/home/icons/rais.svg" alt="raised" />,
      value: "$50Mn",
      label: "Raised so far",
    },
    {
      icon: <img src="/images/home/icons/bankers.svg" alt="bankers" />,
      value: "170+",
      label: "Bankers/Investors",
    },
    {
      icon: <img src="/images/home/icons/team.svg" alt="team" />,
      value: "140+",
      label: "Team",
    },
  ];

  return (
    <div className="section-width py-10 px-4 md:px-6 ">
      <div className="flex mx-auto w-fit mb-2">
        <div className="bg-[#eac360] circle"></div>
        <div className="bg-[#eac360] circle"></div>
        <div className="bg-[#eac360] circle"></div>
      </div>

      <div className="text-center mb-10">
        <h2 className="font-normal text-lg md:text-3xl lg:text-4xl xl:text-5xl">
          A Global Accelerator
          <br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            with Localized Impact
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="w-full lg:w-3/5">
          <Image
            src={"/images/home/map1.jpg"}
            className="w-full rounded-md"
            width={1000}
            height={700}
            alt="globe"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 p-3 bg-black text-white rounded-md sm:w-2/5">
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{ fontFamily: "Unbounded, sans-serif" }}
              className={`flex items-center justify-center bg-transparent border border-gray-600 py-6 px-2 text-center shadow-md ${
                index === 0
                  ? "rounded-tl-md"
                  : index === 1
                  ? "rounded-tr-md"
                  : index === 2
                  ? "rounded-bl-md"
                  : "rounded-br-md"
              }`}
            >
              <div className="bg-gray-800 p-1 mb-4 rounded-md">{stat.icon}</div>
              <div className="ml-2">
                <p className="text-2xl md:text-4xl font-semibold text-[#C4C4C4] leading-[47.05px]">
                  {stat.value}
                </p>
                <p className="text-[10px] text-gray-400 leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TurbostartGlobal;
