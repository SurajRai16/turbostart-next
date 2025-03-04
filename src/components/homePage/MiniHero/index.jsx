"use client";

import Company from "./Company";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import { BsArrowUpRightCircle } from "react-icons/bs";

const index = () => {
  return (
    <>
      <div className="mx-5 flex flex-col items-center text-center p-6 rounded-lg bg-[#201E1E]">
        <h1 className="text-[26px] text-center font-medium flex tracking-wide">
          Turbostart{" "}
          <span
            style={{
              WebkitTextStrokeWidth: "0.25px",
              WebkitTextStrokeColor: "#FFF",
            }}
            className="text-gray-900 pl-2"
          >
            Ecosystem
          </span>
        </h1>
        <p className="text-[#B2BAD299] mt-2">
        Capital, Expertise and Global Networks
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Link href="" className="px-4 py-2 bg-gray-700 rounded-lg text-xs">
            Learn More
          </Link>
          <Link
            href=""
            className="px-4 py-2 bg-white text-black rounded-lg text-xs"
          >
            Get started
          </Link>
        </div>
      </div>

      <div className="my-4 mx-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[100px] w-full object-cover rounded-lg"
        >
          <source src="/videos/home/hero-2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Portfolio Section - Height Reduced */}

      <div className="grid grid-cols-4 grid-rows-5 gap-4 px-5 ">
      <div className="relative col-span-2 row-span-3 bg-[#303030] rounded-lg px-4 pt-4 flex flex-col justify-between">
  {/* Title Section */}
  <div className="flex items-center justify-between">
    <p className="text-sm">Our Portfolio</p>
    <BsArrowUpRightCircle className="top-4 w-4 h-4 absolute left-[80%]" />
    </div>

  {/* Company Component (Properly Aligned) */}
  <div className="w-full mt-4">
    <Company />
  </div>
</div>

        <div className="col-span-2  row-span-2 col-start-3 border rounded-lg border-gray-700">
          <div className="box-4 p-5">
            <Image
              src={"/images/home/hero/ts-bridge.png"}
              className="img"
              width={300}
              height={200}
              alt="scout logo"
            />
            <div className="relative box-footer flex items-center">
              <p className="mt-auto">TS Bridge</p>
              <BsArrowUpRightCircle className="bottom-0 w-4 h-4 absolute left-[90%]" />
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-4">
          <div className="box-item box-item-7">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src="/videos/home/hero-3.mp4" type="video/mp4" />
            </video>
            <div className="relative box-footer flex items-center">
              <p className="">Stackholder</p>
              <BsArrowUpRightCircle className="bottom-80 w-4 h-4 absolute left-[85%]" />
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-3 mb-4">
          <div className="box-item box-item-6">
            <Image
              src={"/images/home/hero/coesmall.svg"}
              className="img"
              width={300}
              height={200}
              alt="scout logo"
            />
            <div className="relative font-medium text-sm flex items-center ">
              <p className="mt-auto">Centers of Excellence</p>
              <BsArrowUpRightCircle className="bottom-0 w-4 h-4 absolute left-[90%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 bg-[linear-gradient(184deg,_#2f274d_0.92%,_#423b58_96.59%)] border border-white/25 rounded-2xl">
        <div className="flex flex-col items-center justify-center pt-5">
          <Image
            src={"/images/home/logo/scout-logo.svg"}
            className="img"
            width={150}
            height={150}
            alt="scout logo"
          />
        </div>
        <div className="relative font-medium text-sm flex items-center p-4">
              <p className="mt-auto">Campus Innovation</p><span><BsArrowUpRightCircle className="bottom-0 w-4 absolute left-[90%]" /></span>
            </div>
      </div>
    </>
  );
};

export default index;