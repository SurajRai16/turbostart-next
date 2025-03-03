import { styles } from "@/app/style";
import { aboutLinks, communityLinks, socialLinks } from "./data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.footerMargin}>
        <div className="section-width md:flex pt-24 border-b border-[#48628429] pb-10 ">
          <div className="basis-1/3 lg:pr-24   pt-4">
            <div className="mb-4">
              <Image
                src="/images/logo.svg"
                width={300}
                height={100}
                className="w-auto h-auto"
                alt="footer logo"
              />
            </div>
            <div className="text-xl font-semibold leading-8 mb-2">
              More than Money!
            </div>
            <p className="text-sm font-normal leading-7 mb-2 pr-6">
              Turbostart offers seed and pre-Series A funding to innovative
              startups, along with personalized mentorship, access to excellence
              centers, and a vast network for fostering successful enterprises.
            </p>
          </div>
          <div className="basis-2/3 md:flex">
            <div className="basis-1/3 md:pl-10 pt-4">
              <div className="text-2xl font-bold leading-10 mb-8 ">
                Quick Menu
              </div>
              {aboutLinks.map((item, i) => (
                <div
                  key={i}
                  className="mb-6 text-white text-lg font-normal leading-6"
                >
                  <Link href={item.path} className="">
                    {item.link}
                  </Link>
                </div>
              ))}
            </div>
            <div className="basis-1/3 md:pl-10 pt-4">
              <div className="text-2xl font-bold leading-10 mb-8 ">
                Community
              </div>
              {communityLinks.map((item, i) => (
                <div
                  key={i}
                  className="mb-6 text-white text-lg font-normal leading-6"
                >
                  <Link href={item.path} className="">
                    {item.link}
                  </Link>
                </div>
              ))}
            </div>
            <div className="basis-1/3 md:pl-10 pt-4">
              <div className="text-2xl font-bold leading-10 mb-8 ">Social</div>
              {socialLinks.map((item, i) => (
                <div
                  key={i}
                  className="mb-6 text-white text-lg font-normal leading-6"
                >
                  <a
                    href={item.path}
                    className="flex items-center"
                    target="_blank"
                  >
                    <Image
                      src={item.icon}
                      width={50}
                      height={50}
                      alt={item.social}
                    />{" "}
                    {/* <Image
                      src={item.icon}
                      className="mr-2 w-auto h-auto"
                      width={50}
                      height={50}
                      alt={item.social}
                    /> */}
                    {item.social}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:flex text-center justify-between section-width py-6">
          <div>© 2023 Turbostart. All rights reserved</div>
          <div className="md:flex  gap-4 md:gap-10 md:mx-10">
            <Link href="/editorial-policy"> Editorial Policy </Link>
            &nbsp;|&nbsp;
            <Link href="/privacy-policy"> Privacy & Policy </Link> &nbsp;|&nbsp;
            <Link href="/terms-conditions"> Terms & Conditions </Link>
            {/* <p>Terms & Condition</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
