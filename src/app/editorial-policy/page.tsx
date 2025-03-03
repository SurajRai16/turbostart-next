import BannerSection from "@/components/BannerSection";
import { styles } from "../style";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy To Create Authentic Content | Turbostart",
  description:
    "Explore Turbostart's Editorial Policy, dedicated to upholding the highest standards of accuracy, integrity, and relevance in our startup-focused content.",
  keywords: "Editorial Policy",
  alternates: {
    canonical: "https://turbostart.co/editorial-policy",
  },
};

const EditorialPolicy = () => {
  const titleStyle = "text-2xl font-semibold pt-10";

  return (
    <div>
      <div style={{ height: "400px!important" }}>
        <BannerSection img="/images/editorial-policy/editorial-policy-banner.png" />
      </div>
      <div className="flex w-5/6 mx-auto">
        <div className={`${styles.sectionPadding} `}>
          <h1 className={`${styles.mainTitle} mb-4`}>Editorial Policy</h1>
          <h2 className={titleStyle}>
            Turbostart's Commitment to Excellence in Startup Content
          </h2>
          <p className={styles.mainDescription}>
            Thank you for checking Turbostart's Editorial Policy. As we strive
            for excellence in our content to serve startup founders and the
            community to the best of our abilities, this policy serves as our
            commitment to maintaining the highest standards of accuracy,
            integrity, and relevance in all our publications.
          </p>
          <h2 className={styles.subtitleStyle}>Purpose</h2>
          <p className={styles.mainDescription}>
            Our aim is to consistently deliver content that aligns with
            Turbostart's mission and values, ensuring that our readers receive
            trustworthy and valuable insights.
          </p>
          <h2 className={styles.subtitleStyle}>Scope</h2>
          <p className={styles.mainDescription}>
            This policy governs all content published under the Turbostart
            banner, encompassing blog posts, articles, press releases,
            newsletters, and reports.
          </p>
          <h2 className={styles.subtitleStyle}>Content Creation Guidelines</h2>
          <ul className="text-[#999999] text-lg font-normal leading-7 my-5 list-disc pl-[15px]">
            <li>
              <strong>Originality</strong>: We pride ourselves on producing
              original and unique content, ensuring it's free from plagiarism.
            </li>
            <li>
              <strong>Relevance</strong>: Our content is tailored to resonate
              with our audience, reflecting Turbostart's objectives and the
              broader venture capital and accelerator landscape.
            </li>
            <li>
              <strong>Tone and Style</strong>: We adhere to a consistent,
              professional, and engaging tone, following Turbostart's style
              guide.
            </li>
            <li>
              <strong>Accuracy</strong>: All data, statistics, and facts are
              meticulously verified and sourced from reputable entities.
            </li>
          </ul>
          <h2 className={styles.subtitleStyle}>Authorship</h2>
          <ul className="text-[#999999] text-lg font-normal leading-7 my-5 list-disc pl-[15px]">
            <li>
              <strong>Bylines</strong>: Every author is rightfully credited for
              their contributions.
            </li>
            <li>
              <strong>Guest Contributions</strong>: We welcome insights from
              guest authors. All contributions are expected to align with
              Turbostart's values and meet our editorial standards.
            </li>
          </ul>
          <h2 className={styles.subtitleStyle}>Review and Approval Process</h2>
          <ul className="text-[#999999] text-lg font-normal leading-7 my-5 list-disc pl-[15px]">
            <li>
              <strong>Peer Review</strong>: Technical or industry-specific
              pieces undergo rigorous peer review to ensure accuracy and
              relevance.
            </li>
            <li>
              <strong>Editorial Review</strong>: Our editorial team meticulously
              reviews content for style, tone, and overall quality.
            </li>
            <li>
              <strong>Final Approval</strong>: Senior members of our team give
              the final nod before any content goes live.
            </li>
          </ul>
          <h2 className={styles.subtitleStyle}>Feedback and Engagement</h2>
          <ul className="text-[#999999] text-lg font-normal leading-7 my-5 list-disc pl-[15px]">
            <li>
              <strong>Comments and Feedback</strong>: We value your insights and
              encourage feedback to refine our content further.
            </li>
            <li>
              <strong>Response</strong>: Our team is always on hand to engage
              with and address your feedback, fostering a dynamic conversation.
            </li>
          </ul>
          <h2 className={styles.subtitleStyle}>Continuous Improvement</h2>
          <ul className="text-[#999999] text-lg font-normal leading-7 my-5 list-disc pl-[15px]">
            <li>
              <strong>Training</strong>: Our editorial team regularly updates
              its skills, staying abreast of best practices and industry trends.
            </li>
            <li>
              <strong>Policy Review</strong>: We're always evolving. This policy
              will be updated periodically to reflect the latest in content
              standards and our objectives.
            </li>
          </ul>
          <br />
          <p className={styles.mainDescription}>
            At Turbostart, we're dedicated to being a trusted voice in the
            venture capital and accelerator domain. This editorial policy is our
            pledge to uphold that trust and deliver exceptional content to our
            readers.
          </p>
          <p className={styles.mainDescription}>
            We appreciate your engagement with Turbostart. If you have any
            questions or would like to get in touch, please feel free to{" "}
            <Link href="/contact">contact us</Link>. Your continued support and
            readership drive our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditorialPolicy;
