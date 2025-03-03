import { SectionHeader } from "@/components/homePage/sectionHeader/SectionHeader";
import { ContactDetails } from "./data";
import { countriesData } from "@/components/homePage/branches/data";
import Countries from "@/components/homePage/branches/Countries";
import { styles } from "../style";
import BannerSection from "@/components/BannerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Turbostart And Interact With Our Expert Team",
  description:
    "Contact Turbostart and speak with our dedicated team. We are here to assist your queries, feedback, or partnership interests. Let's connect & collaborate.",
  keywords: "Contact Turbostart",
  alternates: {
    canonical: "https://turbostart.co/contact",
  },
};

const ContactPage = () => {
  return (
    <div>
      {" "}
      <BannerSection img="/images/contact/contact-banner.jpg" />
      <div className={styles.sectionPadding}>
        <div className="lg:flex gap-10">
          <div className="basis-1/2 mr-20">
            <div className="lg:max-w-lg">
              <SectionHeader
                showTopIcon={true}
                title={"Get In Touch"}
                desc={`We would love to hear from founders, investors, builders, connectors and enablers. Reach out to us and we will get back to you.`}
              />
            </div>

            <div className=" ">
              {ContactDetails.map((item, i) => (
                <div
                  key={i}
                  className="mb-6 text-white text-lg font-normal leading-6"
                >
                  <div className="flex gap-10 mb-10 items-center max-w-[280px]">
                    <img src={item.icon} className="mr-2" alt={item.details} />
                    {item.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="basis-1/2">
            <iframe
              src="/form.html"
              width="100%"
              height="520px"
              frameBorder="0"
              loading="lazy"
              title="Your Form"
            ></iframe>
            {/* <form>
              <div className="grid grid-cols-2 gap-4">
                {contactForm.map((item, i) => (
                  <FormInput
                    key={i}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    className={item.className}
                  />
                ))}
               
              </div>
              <button className="bg-[#D9D9D9] text-black text-xl font-bold px-10 py-2 mt-12">
                Submit
              </button>
            </form> */}
          </div>
        </div>
        <div className="md:flex w-full md:gap-x-14 mt-24   lg:gap-x-24 py-18 justify-center">
          {countriesData.slice(0, -1).map((item, i) => (
            <Countries
              key={i}
              img={item.img}
              name={item.name}
              address={item.address}
              location={item.location}
            />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default ContactPage;
