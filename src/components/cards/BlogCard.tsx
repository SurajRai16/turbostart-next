import CursorHoverCard from "@/components/CursorHoverCard";
import Link from "next/link";

type props = {
  title: string;
  desc: string;
  img: string;
  badgeColor?: string;
  badgeText?: string;
  path: string;
};
const BlogCard = ({ title, desc, img, badgeColor, badgeText, path }: props) => {
  const isExternalUrl = path.match(/https:\/\/[^\s]+/);

  return (
    <div className=" mt-12 section-shadow mx-4">
      <div className="bg-[#161B2280] border rounded-xl border-[#30363D] relative ">
        <CursorHoverCard
          size={0} // Adjust the size of the gradient
          blur={500} // Adjust the blur of the gradient
          gradientColor="#65b26e52"
        >
          <div className="p-12 relative">
            <div className="text-xl leading-8 mb-4 ">{title}</div>
            <span
              className={`${badgeColor} text-white text-[10px] font-semibold px-3 py-1 rounded-full absolute md:right-6 md:top-6 top-4 right-4`}
            >
              {badgeText}
            </span>
            <p className="text-[#EBF5FF80] text-lg font-normal leading-8 mb-4">
              {desc}
            </p>
            {isExternalUrl ? (
              <a
                className="text-white hover:text-red-500 flex gap-4 items-center"
                href={path}
                target="_blank"
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
              </a>
            ) : (
              <Link
                className="text-white hover:text-red-500 flex gap-4 items-center"
                href={path}
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
            )}
          </div>

          <div className="flex justify-end pl-7">
            <img className=" rounded-br-xl" src={img} alt={title} />
          </div>
        </CursorHoverCard>
      </div>
    </div>
  );
};

export default BlogCard;
