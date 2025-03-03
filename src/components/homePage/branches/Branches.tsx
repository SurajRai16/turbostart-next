import { SectionHeader } from "@/components/homePage/sectionHeader/SectionHeader";
import { countriesData } from "./data";
import { styles } from "@/app/style";
import Countries from "@/components/homePage/branches/Countries";
import { sectionData } from "../data";

const Branches = () => {
  return (
    <>
      <div className="relative">
        <section className={styles.homeSectionPadding}>
          <div className="md:w-3/4 lg:w-3/5 md:pl-14 md:pr-24">
            <SectionHeader
              title={sectionData[0].branches.title}
              desc={sectionData[0].branches.desc}
              showLeftIcon={true}
              showTopIcon={true}
              img={sectionData[0].branches.img}
            />
          </div>

          <div className="md:flex w-full md:gap-x-14   lg:gap-x-24 py-18 justify-center">
            {countriesData.map((item, i) => (
              <Countries
                key={i}
                img={item.img}
                name={item.name}
                address={item.address}
                location={item.location}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Branches;
