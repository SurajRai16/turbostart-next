import { SectionHeader } from "@/components/homePage/sectionHeader/SectionHeader";
import { styles } from "@/app/style";
import { globalInvestorData, indiaInvestorData, managementData, meaInvestorData, tsGlobalInvestorData, usaInvestorData } from "./data";
import { NetworkCard } from "@/components/cards/NetworkCard";

const InvestorsComponent: React.FC = () => {
  // style
  const gridStyle = `grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-6 lg:gap-14 md:gap-16  sm:gap-14 justify-between `;

  return (
    <div>
      {" "}
      <section id="management" className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"Management "}
            desc={"Turbostart is managed by seasoned leaders and young entrepreneurs who each bring their passion, expertise and experience to boost startups."}
            showTopIcon={true}
          />
        </div>
        <div className={`${gridStyle}`}>
          {managementData.map((item, i) => (
            <NetworkCard key={i} img={item.img} designation={item.designation} name={item.name} linkedIn={item.linkedIn} />
          ))}
        </div>
      </section>
      {/* global investors section */}
      {/* <section className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"TS Global Investors"}
            desc={
              "Meet our distinguished investors backing Turbostart Global, a diverse assembly of financial pioneers who play a pivotal role in shaping our international investment portfolio."
            }
          />
        </div>
        <div className={`${gridStyle}`}>
          {tsGlobalInvestorData.map((item, i) => (
            <NetworkCard
              key={i}
              img={item.img}
              designation={item.designation}
              name={item.name}
              company={item.company}
              // linkedIn={item.linkedIn}
            />
          ))}
        </div>
      </section> */}
      {/* global investors section */}
      {/* <section id="india" className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"TS India Investors "}
            desc={
              "We are backed by serial entrepreneurs, CxOs and industry leaders who bring a lot more beyond the CapTable with their extensive networks and insights."
            }
          />
        </div>

        <div className={`${gridStyle}`}>
          {indiaInvestorData.map((item, i) => (
            <NetworkCard
              key={i}
              img={item.img}
              designation={item.designation}
              company={item.company}
              name={item.name}
              linkedIn={item.linkedIn}
            />
          ))}
        </div>
      </section> */}
      {/* <section id="usa" className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"TS US Investors "}
            desc={"We are backed by serial entrepreneurs, CxOs and industry leaders who bring a lot more beyond the CapTable with their extensive networks and insights."}
          />
        </div>

        <div className={`${gridStyle}`}>
          {usaInvestorData.map((item, i) => (
            <NetworkCard key={i} img={item.img} designation={item.designation} company={item.company} name={item.name} linkedIn={item.linkedIn} />
          ))}
        </div>
      </section>
      <section id="mea" className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"TS MEA Investors "}
            desc={"We are backed by serial entrepreneurs, CxOs and industry leaders who bring a lot more beyond the CapTable with their extensive networks and insights."}
          />
        </div>

        <div className={`${gridStyle}`}>
          {meaInvestorData.map((item, i) => (
            <NetworkCard key={i} img={item.img} designation={item.designation} company={item.company} name={item.name} linkedIn={item.linkedIn} />
          ))}
        </div>
      </section>
      <section className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"Global Investment Committee"}
            desc={"Meet our esteemed Global Investment Committee, a collective of industry experts shaping our international investment strategies"}
          />
        </div>
        <div className={`${gridStyle}`}>
          {globalInvestorData.map((item, i) => (
            <NetworkCard key={i} img={item.img} designation={item.designation} name={item.name} linkedIn={item.linkedIn} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default InvestorsComponent;
