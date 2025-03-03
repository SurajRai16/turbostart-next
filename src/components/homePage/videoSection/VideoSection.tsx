"use client";
import { videoData } from "./data";
import { useState } from "react";
import { Carousel } from "@/components/Carousel";
import { SwiperSlide } from "swiper/react";
import useMediaQuery from "@/utils/useMediaQuery";
import { styles } from "@/app/style";
import TestimonialModal from "@/components/TestimonialModal";

const VideoSection = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width:900px)");
  const [modalIsOpen, setModalIsOpen] = useState<number>(-1);
  const onClose = () => setModalIsOpen(-1);

  return (
    <div className={styles.homeSectionPadding}>
      <div className="md:flex min-w-full gap-24 section-shadow  ">
        <Carousel
          sliderPerView={1}
          // sliderPerView={isBelowMediumScreen ? 1 : 2}
          spaceBetween={50}
          sectionName="videoTestimonial"
          loop={true}
          navigation={true}
        >
          {videoData.map((item, i) => (
            <div key={i}>
              <SwiperSlide>
                <div className="w-5/6 md:w-1/2 flex mx-auto">
                  <img
                    src={item.image}
                    onClick={() => setModalIsOpen(i)}
                    width={"100%"}
                    alt="video thumb"
                    className="cursor-pointer mb-10 rounded-[25px]"
                  />
                </div>
                {/* <div className="text-center">
                  <h1 className="text-white">{item.title}</h1>
                </div> */}
              </SwiperSlide>
            </div>
          ))}
        </Carousel>
      </div>
      {modalIsOpen !== -1 && (
        <TestimonialModal
          url={videoData[modalIsOpen].url}
          title={videoData[modalIsOpen].title}
          onClose={onClose}
          responsive={isBelowMediumScreen}
        />
      )}
    </div>
  );
};

export default VideoSection;
