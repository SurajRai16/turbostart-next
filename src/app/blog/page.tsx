import BannerSection from "@/components/BannerSection";
import { styles } from "../style";
import { SectionHeader } from "@/components/homePage/sectionHeader/SectionHeader";
import { blogData } from "./data";
import BlogCard from "@/components/cards/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Hub: Insights, Knowledge, And Resources | Turbostart",
  description:
    "Dive into Turbostart's content hub for a wealth of insightful updates and resources. Brush up your knowledge of the ever-growing Indian startup ecosystem.",
  keywords: "Content Hub",
  alternates: {
    canonical: "https://turbostart.co/blog",
  },
};

const BlogPage = () => {
  return (
    <div>
      {" "}
      <BannerSection img="/images/blog/blog-banner.jpg" />
      <div className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"Blogs"}
            desc={
              "Deep dive into latest developments, industry insights, resources for entrepreneurs, and more in the thriving Indian startup ecosystem from Turbostart's experienced founders, investors, and startup evangelists."
            }
            showTopIcon={true}
          />
        </div>
        {/* <Carousel
      sectionName="blogs"
      sliderPerView={isBelowMediumScreen ? 1 : 2}
      spaceBetween={50}
    >
      {blogData.map((item) => (
        <SwiperSlide key={item.id}>
          <BlogCard title={item.title} desc={item.desc} img={item.img} />
        </SwiperSlide>
      ))}
    </Carousel> */}
        <div className="md:flex flex-wrap ">
          {blogData.map((item, i) => (
            <div className=" basis-1/2" key={i}>
              <BlogCard
                title={item.title}
                desc={item.desc}
                img={item.img}
                path={item.path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
