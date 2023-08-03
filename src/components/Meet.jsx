import React from "react";
import nine from "../assets/nine.png";

const Meet = () => {
  return (
    <div className=" flex-col  py-8 lg:px-10 items-center mx-auto justify-between w-full h-auto md:flex-row">
      <h1 className="px-4 text-[--text-color] font-medium text-[32px] leading-[48px] md:mb-6 text-start lg:px-0 ">
        Meet Our Verified Exclusive Brands
      </h1>
      <div className=" flex bg-[#FFEFF6]  flex-col lg:flex-row  items-center w-full lg:gap-20">
        <img src={nine} alt="" className="w-70% z-40 w-[100%] lg:w-auto lg:h-[440px]"  />
        <div className="text-center w-50% gap-8 flex flex-col px-4 py-6 md:px-20 mx-auto md:items-start xl:items-center xl:pr-30 ">
          <p className="text-[--text-color] font-normal text-[20px]">
            Exceptional Brands
          </p>
          <p className="text-[--text-color] font-normal text-[20px]">
            Exclusive Brands
          </p>
          <p className="text-[--text-color] font-normal text-[20px]">
            Verified for Quality Services
          </p>
          <span className=" bg-white rounded-md px-[24px] py-[12px] md:mt-10 flex flex-row items-center justify-center  text-base text-[--main-color] gap-2 font-normal">
            Learn More
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20.16C7.488 20.16 3.84 16.512 3.84 12C3.84 7.488 7.488 3.84 12 3.84C16.512 3.84 20.16 7.488 20.16 12C20.16 16.512 16.512 20.16 12 20.16ZM12 4.8C8.016 4.8 4.8 8.016 4.8 12C4.8 15.984 8.016 19.2 12 19.2C15.984 19.2 19.2 15.984 19.2 12C19.2 8.016 15.984 4.8 12 4.8Z"
                fill="#811141"
              />
              <path
                d="M11.856 16.656L11.184 15.984L15.168 12L11.184 8.01599L11.856 7.34399L16.512 12L11.856 16.656Z"
                fill="#811141"
              />
              <path
                d="M7.67999 11.52H15.84V12.48H7.67999V11.52Z"
                fill="#811141"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Meet;
