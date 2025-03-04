"use client";

import CompanyLogos from "./CompanyLogos";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-box">
        <div className="box-1">
          <div className="box-item box-item-1">
            <Image
              src={"/images/home/hero/hero-bg1.png"}
              className="bg-img"
              width={300}
              height={200}
              alt="scout logo"
            />
            <h3>Our Portfolio</h3>
            <CompanyLogos />
          </div>
          <div className="box-item box-item-2">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src="/videos/home/hero-2.mp4" type="video/mp4" />
              {/* You can add more sources for different formats if needed */}
            </video>
            <div className="box-footer">
              <h4 className="mt-auto">Team</h4>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="inner-box-1">
            <div className="basis-1/2 flex flex-col 3xl:gap-8 2xl:gap-6 gap-4">
              <div className="box-item box-item-3">
                <h1 className="heading">
                  Turbostart <span
            style={{
              WebkitTextStrokeWidth: "0.25px",
              WebkitTextStrokeColor: "#FFF",
            }}
            className="text-gray-900 pl-2"
          >
            Ecosystem
          </span>
                </h1>

                <p className="desc">
                Capital, Expertise and Global Networks
                </p>
                <div className="mt-4 flex justify-center gap-4">
          <Link href="" className="px-4 py-2 bg-gray-700 rounded-lg text-sm">
            Learn More
          </Link>
          <Link
            href=""
            className="px-4 py-2 bg-white text-black rounded-lg text-sm"
          >
            Get started
          </Link>
        </div>
              </div>
              <div className="box-item box-item-4">
                <Image
                  src={"/images/home/logo/scout-logo.svg"}
                  className="img"
                  width={300}
                  height={200}
                  alt="scout logo"
                />
                <div className="box-footer">
                  <h4 className="mt-auto">Campus Innovation</h4>
                </div>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col 3xl:gap-8 2xl:gap-6 gap-4">
              <div className="box-item box-item-5">
                <h5 className="desc">
                  Democratizing angel investing with curated opportunities
                </h5>
                <Image
                  src={"/images/home/hero/ts-bridge.png"}
                  className="img"
                  width={300}
                  height={200}
                  alt="scout logo"
                />
                <div className="box-footer">
                  <h4 className="mt-auto">TS Bridge</h4>
                </div>
              </div>
              <div className="box-item box-item-6 ">
                <Image
                  src={"/images/home/hero/coe-logo.png"}
                  className="img"
                  width={300}
                  height={200}
                  alt="scout logo"
                />
                <div className="box-footer">
                  <h4 className="mt-auto">Centers of Excellence</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="box-item box-item-7">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src="/videos/home/hero-3.mp4" type="video/mp4" />
              {/* You can add more sources for different formats if needed */}
            </video>
            <div className="box-footer">
              <h4 className="mt-auto">Team</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
