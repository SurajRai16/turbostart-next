// import { bgStars, earth } from "@/assets";

import { SectionHeader } from "../sectionHeader/SectionHeader";
import Link from "next/link";
import { styles } from "@/app/style";
import { sectionData } from "../data";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="relative">
      <div className={styles.homeSectionPadding}>
        <div className="md:flex">
          <div className="md:basis-1/2 ">
            <div
              className="md:mr-14 md:pl-14 "
              style={{ whiteSpace: "pre-line" }}
            >
              <div className="md:pr-24">
                <SectionHeader
                  title={sectionData[0].mission.title}
                  // desc={sectionData[0].mission.desc}
                  showLeftIcon={true}
                  img={sectionData[0].mission.img}
                />
              </div>
              <div className=" ">
                <p className={`${styles.mainDescription}  mb-8`}>
                  At Turbostart, our active global network encompassing:
                </p>
                <table className="text-[#999999]">
                  <tbody>
                    <tr>
                      <td className="border-r border-b pr-6 pb-6">
                        Seasoned <br /> investors
                      </td>
                      <td className="border-b pl-6 pb-6">
                        Dedicated investment <br /> committee
                      </td>
                    </tr>
                    <tr>
                      <td className="border-r pt-6 pr-6">Advisors</td>
                      <td className="pl-6 pt-6">Visionary leaders</td>
                    </tr>
                  </tbody>
                </table>
                <p className={`${styles.mainDescription}  mt-8 lg:pr-16 mb-10`}>
                  Works cohesively to help launch your startup into the right
                  orbit for sustainable growth and success
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link className={"btn-white-rounded"} href="/network">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:basis-1/2 justify-center">
            <div className="w-full">
              <Image
                src="/images/home/earth.png"
                width={1000}
                height={1000}
                alt="earth image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute right-0 bottom-0">
        <img src="/images/home/bg-stars.png" alt="bg-img" />
      </div>
    </div>
  );
};

export default Mission;
