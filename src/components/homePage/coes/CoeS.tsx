import { coeData } from "./data";
import { sectionData } from "../data";
import { styles } from "@/app/style";
import { SectionHeader } from "../sectionHeader/SectionHeader";

const CoeS = () => {
  return (
    <>
      <section
        id="network"
        className={`${styles.homeSectionPadding} relative `}
      >
        <img
          className="absolute top-20 right-48 mx-auto"
          src="/images/home/bg-orbit.png"
          alt="orbit"
        />

        <div className="md:pl-14 lg:w-1/2 md:w-2/3 lg:pr-14">
          <SectionHeader
            title={sectionData[0].companies.title}
            desc={sectionData[0].companies.desc}
            showLeftIcon={true}
            img={sectionData[0].companies.img}
          />
        </div>
        <div className="px-2">
          <div className="section-shadow">
            {/* <Company /> */}
            <div className="grid gap-8 md:gap-10 lg:gap-14 lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-3 md:my-10  my-4 lg:my-14 ">
              {coeData.map((item) => (
                <CompaniesCard
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

type Prop = {
  img: string;
  desc: string;
  name: string;
};
const CompaniesCard = ({ img, desc, name }: Prop) => {
  return (
    <div className="bg-[#7E82992E] p-10 md:p-12 rounded-2xl">
      <img className="mb-5 h-14" src={img} alt={name} />
      <div className="mb-3  text-xl font-medium leading-8">{name}</div>
      <div className="text-[#A9A4ABF7] text-base font-light leading-6">
        {desc}
      </div>
    </div>
  );
};

export default CoeS;
