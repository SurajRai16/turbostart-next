"use client";
import React, { useState } from "react";

const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mx-auto mt-4 p-4 border rounded-lg">
      <div
        className="flex items-center justify-between cursor-pointer px-2 sm:px-8 md:px-12"
        onClick={toggleAccordion}
      >
        <h2 className="text-md sm:text-lg md:text-2xl font-semibold">
          Table of Content
        </h2>
        <span className="text-white">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <div className="w-full mt-4 sm:mt-8 md:mt-12">
          <div id="sidebarWrap" className="table-of-contents ">
            <ul className="list-decimal pt-4">
              <li>
                <a className="main" href="#evolution">
                  Evolution of the Indian Startup Ecosystem since 2010
                </a>
                <ul className="list-none">
                  <li>
                    1.1 &nbsp;<a href="#2010-2013"> 2010-2013</a>
                  </li>
                  <li>
                    1.2 &nbsp; <a href="#2013-2018">2013-2018</a>
                  </li>
                  <li>
                    1.3 &nbsp; <a href="#2018-2020">2018-2020</a>
                  </li>
                  <li>
                    1.4 &nbsp; <a href="#post-2020">Post 2020</a>
                  </li>
                  <li>
                    1.5 &nbsp; <a href="#indian-unicorns">Indian Unicorns</a>
                  </li>
                </ul>
              </li>

              <li>
                <a className="main" href="#importance-of-tech">
                  Increasing Importance of Tech in the Indian Startup Ecosystem
                </a>
              </li>
              <li>
                <a className="main" href="#emerging-sectors">
                  Emerging Sectors in the Indian Startup Ecosystem
                </a>
              </li>
              <ul>
                <li>
                  3.1 &nbsp; <a href="#edtech">Edtech</a>
                </li>
                <li>
                  3.2 &nbsp; <a href="#healthtech">Healthtech</a>
                </li>
                <li>
                  3.3 &nbsp; <a href="#e-commerce">e-commerce</a>
                </li>
                <li>
                  3.4 &nbsp;{" "}
                  <a href="#fintech">Fintech and Financial Services</a>
                </li>
                <li>
                  3.5 &nbsp; <a href="#spacetech">Spacetech</a>
                </li>
                <li>
                  3.5 &nbsp; <a href="#agritech">Agritech</a>
                </li>
              </ul>

              <li>
                <a className="main" href="#overarching-trends">
                  Overarching Trends in the Indian Startup Ecosystem
                </a>
              </li>
              <ul>
                <li>
                  <a href="#increased-focus-sustainability">
                    4.1 &nbsp; Increased Focus on Sustainability
                  </a>
                </li>
                <li>
                  4.2 &nbsp;{" "}
                  <a href="#women-entrepreneurs">Rise of Women Entrepreneurs</a>
                </li>
                <li>
                  4.3 &nbsp; <a href="#global-expansion">Global Expansion</a>
                </li>
                <li>
                  4.4 &nbsp;{" "}
                  <a href="#increasing-participation">
                    Increasing Participation by Tier II and Tier III Cities
                  </a>
                </li>
              </ul>
              <li>
                <a className="main" href="#challenges">
                  Challenges and Road Ahead for the Indian Startup Ecosystem
                </a>
              </li>
              <li>
                <a className="main" href="#conclusion">
                  Conclusion
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
