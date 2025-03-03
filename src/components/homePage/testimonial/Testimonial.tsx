"use client";
import { styles } from "@/app/style";
import { testimonies } from "./data";

import { Carousel } from "@/components/Carousel";
import useMediaQuery from "@/utils/useMediaQuery";
import { SwiperSlide } from "swiper/react";
import { SectionHeader } from "../sectionHeader/SectionHeader";
import { sectionData } from "../data";

const Testimonial = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width:900px)");
  return (
    <div className={styles.homeSectionPadding}>
      <div className="md:w-2/3 lg:w-1/2 lg:pr-48 md:pr-24 md:pl-14 ">
        <SectionHeader
          title={sectionData[0].testimonial.title}
          desc={sectionData[0].testimonial.desc}
          showLeftIcon={true}
          img={sectionData[0].testimonial.img}
        />
      </div>
      <div className="px-2">
        <div className="md:flex min-w-full gap-24 section-shadow">
          <Carousel
            sliderPerView={isBelowMediumScreen ? 1 : 2}
            spaceBetween={50}
            sectionName="testimonial"
            loop={true}
          >
            {testimonies.map((item, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard
                  testimony={item.tesimonial}
                  name={item.name}
                  designation={item.designation}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

// this is testimonial card

type Props = {
  testimony: string;
  name: string;
  designation: string;
  image: string;
};
const TestimonialCard = ({ testimony, name, image, designation }: Props) => {
  return (
    <div>
      <div className="basis-1/2 bg-gradient-to-b from-[#282A36] to-[#2A2B3100] flex flex-col p-10 rounded-xl">
        <div className="mb-8 font-light text-xl leading-8">{testimony}</div>
        <div className="flex justify-between">
          <div>
            <p className="text-[#A9A4AB] text-base md:text-lg leading-6 md:leading-8">
              {name}
            </p>
            <p className="text-[#A9A4AB66] text-sm font-medium leading-4">
              {designation}
            </p>
          </div>
          <div>
            <img className="h-14 w-14" src={image} alt="testimonial image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
