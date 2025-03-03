"use client";
import { styles } from "@/app/style";
import { headerStyles } from "@/components/header/style";
import useMediaQuery from "@/utils/useMediaQuery";
import { Metadata } from "next";

const GlobalcohortComponent = () => {
  const isBelowMediumScreen = useMediaQuery("(max-width:600px)");
  return (
    <div>
      {isBelowMediumScreen ? (
        <>
          <div>
            <div className="relative">
              <section className={`${styles.sectionPadding} `}>
                <div className="pt-4">
                  <img src="/images/globalcohort/m-one.png" alt="turbostart" />
                </div>
                <div className="   md:pr-24 sm:w-11/12 text-center">
                  <h1 className={`text-center mx-4 mt-10 ${styles.mainTitle}`}>
                    Calling seed and pre-series startups to apply for a chance
                    to secure up to $1mn in funding!
                  </h1>
                  <p
                    className={`${styles.mainDescription}  mx-4  mb-20 text-center`}
                  >
                    Gain global access to markets across India, USA, MEA and
                    Singapore. <br />
                    <br /> Your startup's potential is the key to unlocking
                    investments - fill the application now!
                  </p>
                  <a
                    className={`${headerStyles.registerButtonStyle}`}
                    href="https://apply.turbostart.co/login"
                    target="_blank"
                  >
                    Apply Now!
                  </a>
                </div>
              </section>
            </div>
            <div className="relative">
              <section className={styles.sectionPadding}>
                <div className="  mx-auto py-4">
                  <img src="/images/globalcohort/m-two.png" alt="turbostart" />
                </div>
                <div className="mx-auto">
                  <p
                    className={`${styles.mainDescription} text-center mx-auto`}
                  >
                    Over the past four years, Turbostart has nurtured an
                    impressive portfolio of approximately 40 startups, spanning
                    over 15 diverse sectors.
                    <br /> <br />
                    Our approach goes beyond traditional investing; we provide
                    customized support, collaborating closely with startups as
                    an extension of their team. We harness our extensive network
                    and tap into their diverse talent pool.
                  </p>
                </div>
              </section>
            </div>
            <div className="relative">
              <section className={styles.sectionPadding}>
                <div className="text-center">
                  <h1 className={styles.mainTitle}>Deck of benefits </h1>
                  <div className="my-8">
                    <img
                      src="/images/globalcohort/m-three.png"
                      alt="benefits"
                    />
                  </div>
                  <p className={`${styles.mainDescription}   mb-12`}>
                    As a Turbostart investee startup, you're in for a
                    game-changing experience. Unlike conventional funds or
                    accelerators that offer short-term engagement and
                    one-size-fits-all mentorship, Turbostart stands out by
                    delivering consistent and tailor-made support.
                  </p>
                  <div className="my-8">
                    <img src="/images/globalcohort/m-four.png" alt="benefits" />
                  </div>
                  <p className={`${styles.mainDescription} md:w-2/3 mb-12`}>
                    Our unique partnership fast-tracks your journey, from idea
                    validation and scaling operations to strategic interventions
                    for sustainable growth. With a global presence, experienced
                    investors, top-tier mentorship, and dedicated centers of
                    excellence, we're here to propel your startup to new
                    heights.
                  </p>
                  <a
                    className={headerStyles.registerButtonStyle}
                    href="https://apply.turbostart.co/login"
                    target="_blank"
                  >
                    Register Now!
                  </a>
                </div>
              </section>
            </div>
            <div className="relative">
              <section className={styles.sectionPadding}>
                <div className="text-center mt-20">
                  <h1 className={styles.mainTitle}>Regions</h1>
                  <div className="mt-12">
                    <img src={"/images/globalcohort/m-five.png"} alt="" />
                  </div>
                  <p className={`${styles.mainDescription}  mb-12`}>
                    Get ready for an epic adventure as we open applications for
                    early-stage startups providing global access to markets
                    across regions such as India, MEA, USA and Singapore. Join
                    the quest!
                  </p>
                  <div className="mt-12 mb-12">
                    <img src={"/images/globalcohort/m-six.png"} alt="Regions" />
                  </div>
                  <a
                    className={headerStyles.registerButtonStyle}
                    href="https://apply.turbostart.co/login"
                    target="_blank"
                  >
                    Submit your Application!
                  </a>
                </div>
              </section>
            </div>
            <div className="relative">
              <section className={styles.sectionPadding}>
                <div className="mb-12 text-center mt-12">
                  <div className={styles.mainTitle}>How it works </div>
                  <p className={`${styles.mainDescription} `}>
                    Our selection process evaluates the potential of innovative
                    startups, as our panel of expert, orbit-savvy mentors
                    handpicks ventures with the brightest promise to join our
                    cohort.
                  </p>
                </div>
                <div className="text-center ">
                  <img
                    src={"/images/globalcohort/m-seven.png"}
                    className="mb-12"
                    alt="How it works"
                  />
                  <a
                    className={headerStyles.registerButtonStyle}
                    href="https://apply.turbostart.co/login"
                    target="_blank"
                  >
                    Get Funded
                  </a>
                </div>
              </section>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="relative">
              <section className={`${styles.sectionPadding} mt-[20px]`}>
                <div className="   md:pr-24 sm:w-11/12">
                  <div className={styles.mainTitle}>
                    Calling seed and pre-series startups to apply for a chance
                    to secure up to $1mn in funding!
                  </div>
                  <p className={`${styles.mainDescription} md:pr-14 mb-12`}>
                    Gain global access to markets across India, USA, MEA and
                    Singapore. Your startup's potential is the key to unlocking
                    investments - fill the application now!
                  </p>
                  <a
                    className={`${headerStyles.registerButtonStyle}`}
                    href="https://apply.turbostart.co/login"
                    target="_blank"
                  >
                    Apply Now!
                  </a>
                </div>
                <div className="pt-14">
                  <img src={"/images/globalcohort/one.png"} alt="Turbostart" />
                </div>
              </section>
            </div>
            <div className="relative">
              <section className={styles.sectionPadding}>
                <div className="sm:w-4/5 md:w-3/4 mx-auto">
                  <p
                    className={`${styles.mainDescription} sm:w-4/5 md:w-3/4 text-center mx-auto`}
                  >
                    Over the past four years, Turbostart has nurtured an
                    impressive portfolio of approximately 40 startups, spanning
                    over 15 diverse sectors.
                    <br /> <br />
                    Our approach goes beyond traditional investing; we provide
                    customized support, collaborating closely with startups as
                    an extension of their team. We harness our extensive network
                    and tap into their diverse talent pool.
                  </p>
                  <div className="w-1/2 mx-auto py-12">
                    <img
                      src={"/images/globalcohort/two.png"}
                      alt="Turbostart"
                    />
                  </div>
                </div>
              </section>
            </div>
            <div className="relative">
              <section className={styles.sectionPadding}>
                <div className="md:w-5/6    md:pr-12 ">
                  <div className={styles.mainTitle}>Deck of benefits </div>
                  <p className={`${styles.mainDescription} md:w-2/3 mb-12`}>
                    As a Turbostart investee startup, you're in for a
                    game-changing experience. Unlike conventional funds or
                    accelerators that offer short-term engagement and
                    one-size-fits-all mentorship, Turbostart stands out by
                    delivering consistent and tailor-made support. <br />
                    <br /> Our unique partnership fast-tracks your journey, from
                    idea validation and scaling operations to strategic
                    interventions for sustainable growth. With a global
                    presence, experienced investors, top-tier mentorship, and
                    dedicated centers of excellence, we're here to propel your
                    startup to new heights.
                  </p>
                  <a
                    className={headerStyles.registerButtonStyle}
                    href="https://apply.turbostart.co/login"
                    target="_blank"
                  >
                    Register Now!
                  </a>
                </div>
                <div className="flex max-[900px]:mt-12 md:justify-end justify-center">
                  <img
                    src={"/images/globalcohort/three.png"}
                    width={"75%"}
                    alt="Deck of benefits"
                  />
                </div>
              </section>
            </div>
            <div className="relative">
              <section className={styles.sectionPadding}>
                <div className="md:w-5/6    md:pr-24">
                  <div className={styles.mainTitle}>Regions</div>
                  <p className={`${styles.mainDescription} w-2/3 mb-12`}>
                    Get ready for an epic adventure as we open applications for
                    early-stage startups providing global access to markets
                    across regions such as India, MEA, USA and Singapore. Join
                    the quest!
                  </p>
                  <a
                    className={`z-20 sticky ${headerStyles.registerButtonStyle}`}
                    href="https://apply.turbostart.co/login"
                    target="_blank"
                  >
                    Submit your Application!
                  </a>
                </div>
                <div className="md:mt-[-10rem] sm:mt-[-5rem]">
                  <img src={"/images/globalcohort/four.png"} alt="Regions" />
                </div>
              </section>
            </div>
            <div className="relative">
              <section className={styles.sectionPadding}>
                <div className="md:w-5/6 md:pr-24 mb-12">
                  <div className={styles.mainTitle}>How it works </div>
                  <p className={`${styles.mainDescription} w-2/3`}>
                    Our selection process evaluates the potential of innovative
                    startups, as our panel of expert, orbit-savvy mentors
                    handpicks ventures with the brightest promise to join our
                    cohort.
                  </p>
                </div>
                <div className="text-center ">
                  <img
                    src={"/images/globalcohort/five.png"}
                    className="mb-12"
                    alt="How it works"
                  />
                  <a
                    className={headerStyles.registerButtonStyle}
                    href="https://apply.turbostart.co/login"
                    target="_blank"
                  >
                    Get Funded
                  </a>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GlobalcohortComponent;
