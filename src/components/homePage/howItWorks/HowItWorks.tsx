"use client";
import useMediaQuery from "@/utils/useMediaQuery";
import { SectionHeader } from "../sectionHeader/SectionHeader";
import { styles } from "@/app/style";
import { sectionData } from "../data";

const HowItWorks = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width: 900px)");
  return (
    <div className={styles.homeSectionPadding}>
      <div className="lg:w-1/2  md:w-2/3 md:pl-14">
        <SectionHeader
          title={sectionData[0].howItWork.title}
          desc={sectionData[0].howItWork.desc}
          showLeftIcon={true}
          img={sectionData[0].howItWork.img}
        />
      </div>

      <img
        src={
          !isBelowMediumScreen
            ? "/images/home/how-it-work.png"
            : "/images/home/how-it-work-mobile.png"
        }
        className="w-full"
        alt="how it works"
      />
    </div>
  );
};

export default HowItWorks;
