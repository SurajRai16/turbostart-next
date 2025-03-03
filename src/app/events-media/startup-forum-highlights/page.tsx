import { styles } from "@/app/style";
import BannerSection from "@/components/BannerSection";
import VideoPlayer from "@/components/VideoPlayer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venture Capital Financing for Early Stage | Turbostart",
  alternates: {
    canonical: "https://turbostart.co/events-media/startup-forum-highlights",
  },
};

const StartupForumHighlights = () => {
  return (
    <div>
      <BannerSection img="/images/event-media/startup-forum-highlights/startup-forum-highlights-banner.jpg" />

      <div className="section-width">
        <div className={`${styles.sectionPadding} `}>
          <h1 className={`${styles.mainTitle} mb-8`}>
            Startup Forum Highlights - TurboBoost
          </h1>

          <p className={styles.mainDescription}>
            Relive the electric atmosphere and the exciting moments from our
            recently concluded Startup Forum- an event designed to bring
            together aspiring entrepreneurs, industry experts and insightful
            investors.
          </p>
          <p className={styles.mainDescription}>
            Watch our highlights of incredible moments from the event. From
            engaging panel discussions to captivating networking sessions, it
            was an experience to remember!
          </p>
          <p className={styles.mainDescription}>
            But we are not done yet! Stay tuned to watch some exciting
            rapid-fire pitch videos shot impromptu with the fiery startup
            founders who participated in the event. You may also get a chance to
            vote for your favorite ones.
          </p>
          <p className={styles.mainDescription}>
            Stay connected with us on our social media channels for more
            updates, future events, and opportunities to #TurboBoost your
            entrepreneurial journey.
          </p>

          <div className="flex mt-20 justify-center">
            <VideoPlayer videoLink="https://www.youtube.com/watch?v=TF1t59zw2QQ&ab_channel=Turbostart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupForumHighlights;
