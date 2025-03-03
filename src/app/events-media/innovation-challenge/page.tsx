import { styles } from "@/app/style";
import BannerSection from "@/components/BannerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venture Capital Financing for Early Stage | Turbostart",
  alternates: {
    canonical: "https://turbostart.co/events-media/innovation-challenge",
  },
};

const InnovationChallengePage = () => {
  return (
    <div>
      <BannerSection img="/images/event-media/innovation-challenge/innovation-challenge-banner.jpg" />
      <div className="section-width">
        <div className={`${styles.sectionPadding} `}>
          <h1 className={`${styles.mainTitle} mb-8`}>
            Turbostart Innovation Challenge
          </h1>

          <p className={styles.mainDescription}>
            "The Turbostart Innovation Challenge was a celebration of innovation
            and a testament to the ever-evolving AI landscape. This event
            provided a platform for pioneering AI-based startups to showcase
            their transformative ideas, and it was an opportunity to recognize
            the groundbreaking innovations that are shaping the future.{" "}
          </p>
          <p className={styles.mainDescription}>
            The challenge attracted a remarkable response, with over 300+
            registrations from startups and visionary entrepreneurs, sparking
            intense competition and raising the collective bar among peers.
            Among the participants, four standout AI-based startups emerged as
            beacons of ingenuity, each with groundbreaking solutions.{" "}
          </p>
          <p className={styles.mainDescription}>
            The event also featured insightful panel discussions featuring
            esteemed speakers such as Mr. Niranjan Chaoji, Chief Customer
            Officer at Turbostart, Mr. Venkatesh Adavi, Vice President of VerSe
            Innovation, Mr. Ravi Rao, Founding Partner of Turbostart MEA, Mr.
            Brij Singh, Founder and CEO of SnowMountain AI, Ishita Sawant, the
            Founder and CEO of Meolaa, Mr. Praveen Kumar GS, Director-AI CoE
            Leader, Venkat Raju, Global CEO of Turbostart, and Mr. Shourya
            Agarwal, Co-Founder and CEO of Flam. Their insights and expertise
            added immeasurable value to the event, elevating the discourse and
            fostering a profound understanding of AI's role in shaping the
            corporate world and providing a fertile ground for startups.{" "}
          </p>
          <p className={styles.mainDescription}>
            While Turbostart proudly acknowledged the four winners, our
            commitment extends beyond recognition. We are dedicated to exploring
            how we can further support the remaining eight finalists whose
            brilliant ideas have made a lasting impact. Stay tuned for updates
            on how these AI pioneers are transforming the landscape of
            technology."
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnovationChallengePage;
