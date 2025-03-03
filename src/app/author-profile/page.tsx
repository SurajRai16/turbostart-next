import BannerSection from "@/components/BannerSection";
import { styles } from "../style";
import { SectionHeader } from "@/components/homePage/sectionHeader/SectionHeader";
import { authorProfileData } from "./data";
import Link from "next/link";

const AuthorProfile = () => {
  return (
    <div>
      <BannerSection img="/images/author-profile/author-profile.jpg" />

      <div className={styles.sectionPadding}>
        <div className="md:w-1/2">
          <SectionHeader
            title={"Author Profile"}
            desc={
              "Our team is dedicated to empowering early-stage startups with high-quality, actionable content. With diverse experience in business development, technology, and market strategy, our experts provide useful insights pertaining to the startup landscape.              "
            }
            showTopIcon={true}
          />
        </div>
        <div className="grid md:grid-cols-1 gap-x-24 gap-y-32">
          {authorProfileData.map((item, i) => (
            <AuthorProfileCard
              key={i}
              img={item.img}
              content={item.content}
              designation={item.designation}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type authorProfileCardProps = {
  name: string;
  img: string;
  content: string;
  designation: string;
};

const AuthorProfileCard = ({
  content,
  img,
  designation,
  name,
}: authorProfileCardProps) => {
  return (
    <>
      <div className="flex bg-[#212225] gap-10 py-12 px-8 rounded-xl md:flex items-center">
        <div className="  basis-1/4   justify-center">
          <img src={img} className="rounded-xl" alt={name} />
        </div>
        <div className="basis-3/4">
          <p className="text-3xl font-bold">{name}</p>
          <p className="text- text-[#7e7e7e] mb-2">{designation}</p>
          <p className="md:text-lg text-base md:leading-8 text-[#ddd] mb-4">
            {content}
          </p>
          <Link
            className="text-white hover:text-gray-500 flex gap-4 items-center"
            href="/author-profile"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthorProfile;
