"use client";
import useMediaQuery from "@/utils/useMediaQuery";
import { sectionData } from "../data";
import { clientLogo } from "./data";
import { styles } from "@/app/style";
import { SectionHeader } from "../sectionHeader/SectionHeader";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { SwiperSlide } from "swiper/react";

const ClientLogo = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 900px)");
  return (
    <div className={styles.homeSectionPadding}>
      <div className="md:pl-14 lg:w-1/2 md:w-2/3 ">
        <SectionHeader
          title={sectionData[0].clientLogo.title}
          desc={sectionData[0].clientLogo.desc}
          showLeftIcon={true}
          img={sectionData[0].clientLogo.img}
        />
        <div className="flex justify-center md:justify-start mb-14">
          <Link className={"btn-white-rounded"} href="/portfolio">
            View More
          </Link>
        </div>
      </div>

      <div className={` px-12`}>
        <Carousel
          sectionName="clientLogo"
          sliderPerView={isBelowMediumScreen ? 1 : 5}
          spaceBetween={50}
          loop={true}
        >
          {clientLogo.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center h-32 justify-center">
                <img src={item} alt="client logo" />
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientLogo;
