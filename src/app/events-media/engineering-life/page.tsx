import { styles } from "@/app/style";
import BannerSection from "@/components/BannerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biotech Innovation: Emerging Technologies | Turbostart",
  description:
    "Learn about the emerging technologies via life sciences & biotech innovation, and network with investors and experts at Turbostart Sparkplug Chapter 03.",
  keywords: "Biotech Innovation",
  alternates: {
    canonical: "https://turbostart.co/events-media/engineering-life",
  },
};

const EngineeringLifePage = () => {
  return (
    <div>
      <BannerSection img="/images/event-media/engineering-life/engineering-banner.jpg" />
      <div className="section-width">
        <div className={`${styles.sectionPadding} `}>
          <h1 className={`${styles.mainTitle} mb-8`}>
            Engineering Life: The Next Frontier in Biotech Innovation
          </h1>

          <p className={styles.mainDescription}>
            "Experience the buzz and key highlights from the recently concluded
            Turbostart Sparkplug Chapter 03: Engineering Life - The Next
            Frontier in Biotech Innovation. The event is a testament to our
            dedication to advancing the biotech sector, fostering collaboration,
            and facilitating transformative discussions. During the same, we
            embarked on an insightful journey into the world of biotechnology,
            exploring the expansive possibilities and growth prospects within
            the biotech industry.
          </p>
          <p className={styles.mainDescription}>
            Our distinguished lineup of speakers and panelists, comprising
            luminaries, experts, and visionaries, shared their perspectives on
            the future of biotechnology in India and beyond. Krishnan G S, a
            prominent figure in the industry, set the stage by elucidating the
            ever-expanding role of biotechnology and its potential for
            exponential growth. Dr. Shriram Nene, MD, an accomplished Cardiac,
            Thoracic & Vascular Surgeon and Healthcare & Tech Innovator, shared
            his enlightening perspective, adding depth to the discussion.
          </p>
          <p className={styles.mainDescription}>
            The first panel, featuring leaders such as Dr. Anand Anandkumar, Dr.
            (Inv) Prof Vishal U S Rao, and Dr. Charit Bhograj, moderated by Dr.
            Murali Panchapagesa Muthuswamy, delved into the exciting
            advancements in synthetic biology and emerging healthcare
            innovations that can revolutionize healthcare on a global scale.
          </p>
          <p className={styles.mainDescription}>
            Our founder, Ganesh Raju, engaged in a fireside chat with Prof.
            Gopalan Jagadeesh, co-founder of Ykrita Life Sciences, pioneers in
            the development of the cutting-edge Bioengineered Artificial Ectopic
            Liver (BAEL) Device. This discussion provided a captivating glimpse
            into Ykrita's journey, the challenges they overcame, and their
            unwavering dedication as a biotech startup in India.
          </p>
          <p className={styles.mainDescription}>
            The second panel, featuring Subramani Ramachandrappa, Krishna Mohan
            Puvvada, and Vinod Kumar, and moderated by Krishnan G S, explored
            the exciting future of biotech in the realm of food production.
            Innovative concepts like ""smart protein"" were discussed,
            highlighting the potential to revolutionize the way we nourish the
            world.
          </p>
          <p className={styles.mainDescription}>
            The third panel, featuring Naganand Doraswamy, Roopan Aulakh, and
            Laina Emmanuel, moderated by our global CEO Venkat Raju, delved into
            the critical topic of bridging the gap between business and
            sciences. This conversation was a crucial exploration of the
            harmonious relationship between these two domains.
          </p>
          <p className={styles.mainDescription}>
            In addition to the enriching panels, our event featured a vibrant
            demo desk, where innovative startups, including Ai Health Highway,
            OUI Medical Inc, and Dfine Bio-innovations Pvt Ltd, showcased their
            groundbreaking products. This interactive showcase facilitated
            direct engagement between attendees, founders, investors, and
            ecosystem partners from the biotech sector, fostering invaluable
            connections.
          </p>
          <p className={styles.mainDescription}>
            The success of Turbostart Sparkplug Chapter 03 was the result of
            collective effort, highlighting the significance of collaboration
            and shared knowledge in driving innovation within the biotech
            industry. We are thrilled to continue our unwavering support for the
            future of biotech and look forward to more transformative
            conversations in the days to come."
          </p>
        </div>
      </div>
    </div>
  );
};

export default EngineeringLifePage;
