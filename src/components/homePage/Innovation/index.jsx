import Image from "next/image";
import Link from "next/link";

const innovationData = [
  {
    title: "Founders",
    btn: "Apply Now",
    img: "/images/home/founder-img.png",
  },
  {
    title: "Stakeholders",
    btn: "Reach Out",
    img: "/images/home/investor-img.png",
  },
  {
    title: "Partners",
    btn: "Connect",
    img: "/images/home/partner-img.png",
  },
];

const Innovation = () => {
  return (
    <div className="section-width margin-top">
      <div className="flex mx-auto w-fit mb-2">
        <div className="bg-[#f16365] circle"></div>
        <div className="bg-[#f16365] circle"></div>
        <div className="bg-[#f16365] circle"></div>
      </div>
      {/* Header Section */}
      <div className="text-center mb-14">
        <h2 className="font-normal text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Ready to Shape the <br />
          <span className="bg-gradient-to-r from-white  to-gray-400 bg-clip-text text-transparent leading-snug">
            Future of Innovation?{" "}
          </span>
        </h2>
        <p className="max-w-md text-base mx-auto text-neutral-200 font-light">
          Whether you’re an entrepreneur, investor, or partner, Turbostart has a
          place for you.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap gap-8 justify-center">
        {innovationData.map((item, index) => (
          <div
            className="flex items-center justify-between w-full sm:w-[48%] lg:w-[30%] h-auto border border-[#4B4B4B] px-6 py-4 rounded-xl"
            key={index}
          >
            <div className="flex flex-col gap-4 sm:gap-10 text-center sm:text-left">
              <h3 className="font-light text-xl sm:text-2xl">{item.title}</h3>
              <Link
                className="btn-secondary py-2 px-4 text-center border rounded-lg text-sm w-fit text-[#fffefa]
"
                href={"#"}
              >
                {item.btn}
              </Link>
            </div>
            <Image
              src={item.img}
              className="h-[100px] sm:h-[120px] w-auto"
              width={100}
              height={100}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
