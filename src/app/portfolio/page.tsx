import BannerSection from "@/components/BannerSection";
import { SectionHeader } from "@/components/homePage/sectionHeader/SectionHeader";
import { styles } from "../style";
import { portfolioData } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turbostart Portfolio: Driving Innovation | Turbostart",
  description:
    "Dive into Turbostart portfolio, unveiling venture deals in rising early-stage startups from around the world. Witness the future of innovation with us.",
  keywords: "Turbostart portfolio",
  alternates: {
    canonical: "https://turbostart.co/portfolio",
  },
};

const PortfolioPage = () => {
  return (
    <div>
      <BannerSection img="/Images/portfolio/portfolio-banner.jpg" />
      <div className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"Portfolio"}
            desc={
              "Explore Turbostart's diverse portfolio, showcasing innovation across different industries."
            }
            showTopIcon={true}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-32">
          {portfolioData.map((item, i) => (
            <PortfolioCard
              key={i}
              img={item.logo}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type PortfolioCardProps = {
  desc: string;
  img: string;
  link: string;
};

const PortfolioCard = ({ desc, img, link }: PortfolioCardProps) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="bg-[#212225] py-12 px-8 rounded-xl md:flex items-center"
      >
        <div className="flex basis-1/4 pb-4 md:pr-8 justify-center">
          <img src={img} alt="logo" />
        </div>
        <div className="basis-3/4 md:border-l-2 broder-white md:pl-8 md:text-xl text-base md:leading-8">
          {desc}
        </div>
      </a>
    </>
  );
};

export default PortfolioPage;
