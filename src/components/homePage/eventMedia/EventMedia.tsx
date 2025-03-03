import { styles } from "@/app/style";
import { SectionHeader } from "../sectionHeader/SectionHeader";
import { sectionData } from "../data";
import Link from "next/link";

import BlogCard from "@/components/cards/BlogCard";
import { eventData } from "./data";

const EventMedia = () => {
  return (
    <section>
      <div className={styles.homeSectionPadding}>
        <div className="md:pl-14 md:w-2/3 lg:w-1/2 lg:pr-44">
          <SectionHeader
            title={sectionData[0].blog.title}
            desc={sectionData[0].blog.desc}
            showLeftIcon={true}
            img={sectionData[0].blog.img}
          />
          <div className="flex justify-center md:justify-start">
            <Link className={"btn-white-rounded"} href="/events-media">
              Read More
            </Link>
          </div>
        </div>

        <div className="md:flex gap-12 pt-8 h-full">
          {eventData.map((item, i) => (
            <BlogCard
              key={i}
              title={item.title}
              desc={item.desc}
              img={item.img}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventMedia;
