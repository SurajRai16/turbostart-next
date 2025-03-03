import Link from "next/link";
import "./Ticker.css";

const Ticker = () => {
  return (
    <section className="mx-auto w-5/6 mt-20">
      <div className="ticker-container">
        <div className="ticker-content">
          <Link href="/globalcohort">Apply for Funding</Link>
          <span className="mx-6">|</span>
          <Link href="/indian-startup-ecosystem">
            Latest Blog on the Emerging Sectors and Trends in the Indian Startup
            Ecosystem
          </Link>
          <span className="mx-6">|</span>
          <a href="https://apply.turbostart.co/register">
            Forever Planet Challenge: Turbostart X Mumbai International Festival
            2024
          </a>
          {/* Add more items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Ticker;
