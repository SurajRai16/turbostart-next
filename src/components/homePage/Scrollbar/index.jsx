"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import "./style.css";

const categories = [
  { title: "Med Tech", image: "/images/home/doc.png", icon: "/images/home/doc.svg" },
  { title: "Transportation", image: "/images/home/truck.png", icon: "/images/home/truck.svg" },
  { title: "Ed Tech", image: "/images/home/college.png", icon: "/images/home/college.svg" },
  { title: "Drone Tech", image: "/images/home/drone.png", icon: "/images/home/drone.svg" },
  { title: "Tech Innovation", image: "/images/home/tech.png", icon: "/images/home/tech.svg" }
];

export default function Scrollbar() {
  return (
    <div className="bg-black text-white p-8 relative section-width">
      {/* Background Line Image */}
      <div className="absolute top-5 hidden md:block">
        <img src="/images/home/linebg.svg" alt="line" />
      </div>

      {/* Horizontal Scrolling Categories */}
      <div className="categories-wrapper overflow-hidden relative sm:mt-20 xl:mt-32 sm:mx-4">
        <Marquee speed={50} gradient={false}>
          {categories.map((category, index) => (
            <div key={index} className="category-card bg-gray-900 rounded-xl overflow-hidden shadow-lg min-w-[250px] mx-2">
              <div className="px-4 flex items-center text-center gap-3">
                <Image src={category.icon} alt={category.title} width={50} height={50} />
                <h3 className="text-base font-semibold pt-4">{category.title}</h3>
              </div>
              <div className="relative h-40">
                <Image src={category.image} alt={category.title} fill className="object-cover p-4" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
