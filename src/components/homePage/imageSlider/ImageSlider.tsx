"use client";
import { Carousel } from "@/components/Carousel";
import { SwiperSlide } from "swiper/react";
import { sliderData } from "./data";
import useMediaQuery from "@/utils/useMediaQuery";
import { styles } from "@/app/style";

const ImageSlider = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width:900px)");
  return (
    <div className={styles.homeSectionPadding}>
      <div className="w-full flex">
        <Carousel
          sectionName="imageSlider"
          sliderPerView={1}
          loop={true}
          effect={"fade"}
        >
          {sliderData.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                className={`mx-auto rounded-xl ${
                  isBelowMediumScreen ? "w-full" : "w-5/6"
                }`}
                src={item.images}
                alt={item.name}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSlider;
