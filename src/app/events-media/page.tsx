import BannerSection from "@/components/BannerSection";
import { styles } from "../style";
import { SectionHeader } from "@/components/homePage/sectionHeader/SectionHeader";
import BlogCard from "@/components/cards/BlogCard";
import { eventData } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turbostart Events and Media: Empowering Startups to Succeed",
  description:
    "Stay updated with Turbostart events and media, get the opportunity to network at our monthly events, and learn about milestones achieved by our ecosystem.",
  keywords: "Turbostart Events & Media",
  alternates: {
    canonical: "https://turbostart.co/events-media",
  },
};

const EventMediaPage = () => {
  return (
    <div>
      <BannerSection img="/images/event-media/event-media-banner.jpg" />

      <div className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"Events and Forum"}
            desc={
              "Join us for regular events at the Turbsotart HQ and get access to insightful sessions and an expansive network of leaders and startup founders. Here are some sneak peaks even if you missed it."
            }
          />
        </div>
        <div className="md:flex   flex-wrap ">
          {eventData.map((item, i) => (
            <div className=" basis-1/2" key={i}>
              <BlogCard
                title={item.title}
                desc={item.desc}
                img={item.img}
                badgeColor={item.badgeColor}
                badgeText={item.badgeText}
                path={item.path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventMediaPage;
