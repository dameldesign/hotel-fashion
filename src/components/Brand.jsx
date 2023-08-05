import React from 'react';

import { option } from './content';


const Brand = () => {
    return (
        <section className=" flex flex-col 2xl:px-40 items-center gap-6 justify-between text-[--text-color] mx-auto py-10 p-6 ">
        <div className=" items-center justify-center w-full flex text-center lg:items-start lg:justify-start lg:flex lg:w-[95%] flex-col gap-6" > 
  
        <h1 className=" text-[--text-color] text-start flex md:items-start font-medium text-[32px] leading-[48px] xl:  lg:px-0 ">
        Trending Brand
        </h1>
        <p className="text-[18px] font-normal">
        Everything looks good with confidence and that confidence is what our brands give, a better you.
        </p>
         </div>
  
        {/* Grid of each individual item */}
        <div className=" w-full h-auto max-w-fit  p-5 pb-10 mx-auto gap-x-5  gap-y-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center">
          {option.map((item, index) => (
            <div
              className="rounded-2xl  flex-col border-solid mb-4 border-[#D8D8D8] py-4 px-3.5 w-[316px] h-auto flex justify-between items-start gap-5"
              key={index}
            >
              <div
                className="rounded-t-lg w-[288px] h-[216px] flex  items-center  mx-auto justify-center "
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className=" flex justify-between  flex-col w-[93%] h-[68%] pt-20">
  
                  <div className=" flex flex-row items-center  justify-between">
                    {/* left arrow */}
                    <div className="flex items-center justify-center rounded-full bg-white/50 w-[32px] h-[32px] ">
                      <svg
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.42854 15.5C9.31613 15.5012 9.20467 15.4818 9.10134 15.4431C8.998 15.4043 8.90508 15.3471 8.82855 15.275L1.11426 8.525C0.771402 8.225 0.771402 7.76 1.11426 7.46L8.82855 0.725C9.1714 0.425 9.70283 0.425 10.0457 0.725C10.3885 1.025 10.3885 1.49 10.0457 1.79L2.9314 8L10.0457 14.225C10.3885 14.525 10.3885 14.99 10.0457 15.29C9.87426 15.44 9.6514 15.515 9.44569 15.515L9.42854 15.5Z"
                          fill="#202020"
                        />
                      </svg>
                    </div>
  
                    {/* right arrow */}
                    <div className="flex items-center justify-center rounded-full bg-white/50 w-[32px] h-[32px] ">
                      <svg
                        width="12"
                        height="24"
                        viewBox="0 0 12 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.57144 19.5C2.45902 19.5012 2.34756 19.4818 2.24423 19.443C2.1409 19.4043 2.04797 19.347 1.97144 19.275C1.62858 18.975 1.62858 18.51 1.97144 18.21L9.08572 11.985L1.97144 5.77499C1.62858 5.47499 1.62858 5.00999 1.97144 4.70999C2.31429 4.40999 2.84572 4.40999 3.18858 4.70999L10.8857 11.475C11.2286 11.775 11.2286 12.24 10.8857 12.54L3.17144 19.275C3.00001 19.425 2.77715 19.5 2.57144 19.5Z"
                          fill="#202020"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* content */}
  
              <div className=" flex flex-col items-start justify-start text-start  h-auto w-full gap-2 text-[--text-color]">
                <h3 className=" font-medium text-[18px] text-[text-color]">
                {item.name}
                </h3>

                <p className=" font-normal text-base text-[--text-color] line-clamp-2">
                {item.message}
                </p>
  
              </div>
            </div>
          ))}
        </div>
  
        <div className=" px-5 lg:items-end lg:justify-end lg:flex lg:w-full">
          {" "}
          <button className="btn gap-3 flex items-center justify-center font-Poppins ">
            {" "}
            View All
            <svg
              width="6"
              height="11"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.699987 11.3C0.516654 11.1167 0.424988 10.8834 0.424988 10.6C0.424988 10.3167 0.516654 10.0834 0.699987 9.90005L4.59999 6.00005L0.699987 2.10005C0.516654 1.91672 0.424988 1.68338 0.424988 1.40005C0.424988 1.11672 0.516654 0.883382 0.699987 0.700048C0.883321 0.516715 1.11665 0.425049 1.39999 0.425049C1.68332 0.425049 1.91665 0.516715 2.09999 0.700048L6.69999 5.30005C6.79999 5.40005 6.87099 5.50838 6.91299 5.62505C6.95499 5.74172 6.97565 5.86672 6.97499 6.00005C6.97499 6.13338 6.95399 6.25838 6.91199 6.37505C6.86999 6.49172 6.79932 6.60005 6.69999 6.70005L2.09999 11.3C1.91665 11.4834 1.68332 11.575 1.39999 11.575C1.11665 11.575 0.883321 11.4834 0.699987 11.3Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </section>
    );
};

export default Brand;