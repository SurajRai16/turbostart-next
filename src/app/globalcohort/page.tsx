import GlobalcohortComponent from "@/components/globalcohortComponents/GlobalcohortComponent";
import "./style.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Funding Upto $1mn, And More | Turbostart Cohort",
  description:
    "Take part in Turbostart's global cohort and get up to $1 million startup funding, wide market access, mentorship from top investors, and more! Apply now!",
  keywords: "Startup Funding",
  alternates: {
    canonical: "https://turbostart.co/globalcohort",
  },
};

const Globalcohort = () => {
  return (
    <div className="">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <GlobalcohortComponent />
    </div>
  );
};

export default Globalcohort;
