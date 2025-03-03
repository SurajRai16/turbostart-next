"use client";
import { useState } from "react";

// network  Card
type Props = {
  img: string;
  name: string;
  designation?: string;
  linkedIn?: string;
  company?: string;
};

export const NetworkCard = ({
  img,
  name,
  designation,
  linkedIn,

  company,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div>
        <div
          className="mb-5 pt-10  z-10 image-container w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="mx-auto flex rounded-full image h-auto w-64"
            src={img}
            alt={name}
          />
          {linkedIn && isHovered && (
            <div className="linkedin-icon-container">
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/social/linkedin-blue.png"
                  className="w-18  h-18"
                  alt={name}
                />
              </a>
            </div>
          )}
        </div>
        <div className=" z-50">
          {/* {linkedIn !== "#" ? (
              //  optioin 1
  
              <div className="flex justify-center">
                <a href={linkedIn} target="_blank">
                  <img src={linkedInBlue} className="w-18  h-18" alt={name} />
                </a>
              </div>
            ) : (
              //  optioin 1
              // <div className="lineup-image-hover">
              //   <div className="line-up-hover-content flex justify-center mt-[-45px] network-linkedin">
              //     <a href={linkedIn} target="_blank">
              //       <img src={linkedInBlue} className="w-18  h-18" alt={name} />
              //     </a>
              //   </div>
              // </div>
              <div className="p-5"></div>
            )} */}
          <div className="text-center mb-4">
            <h6 className="text-lg font-semibold leading-7">{name}</h6>
            <p
              className="text-sm text-[#888] leading-5"
              dangerouslySetInnerHTML={{ __html: `${designation} ` }}
            ></p>
            <p className="text-sm text-[#888] leading-5">{company}</p>
          </div>
        </div>
      </div>
    </>
  );
};
