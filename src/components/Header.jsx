import React from "react";

// Import the image from the assets folder
import pink from "../assets/background.jpg";

const Header = () => {
  return (
    <header
      className="w-screen h-[640px] px-6  py-20 flex mx-auto items-center justify-center "
      style={{ backgroundImage: `url(${pink})`, backgroundSize: "cover" }}
    >
      <div className=" flex flex-col items-center text-center justify-between text-white gap-3 md:gap-6">
        <h1 className="  leading-[50px] xl:leading-[84px] font-semibold text-[46px] lg:text-[56px]">
          FIND A HOME FOR YOUR DESIGNS
        </h1>
        <p>pop ups in top class hotels around the world</p>

        {/* search bar */}
        <div className=" items-center justify-center flex-col lg:flex-row ">
          <div>
            <div class="flex flex-col mt-8 space-y-3 sm:-mx-0 sm:flex-row sm:justify-center h-auto w-full sm:space-y-0">
              <div className=" flex flex-col sm:flex-row gap-2 md:gap-0">
                <div className="px-6 py-3 text-gray-700 bg-white border flex items-center gap-3 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.385 15.4461C13.037 16.5232 11.3277 17.0432 9.60817 16.8994C7.88868 16.7556 6.28952 15.9588 5.13913 14.6728C3.98874 13.3867 3.37446 11.709 3.42244 9.98415C3.47043 8.25932 4.17704 6.61834 5.39716 5.39822C6.61727 4.17811 8.25826 3.4715 9.98309 3.42351C11.7079 3.37553 13.3857 3.98981 14.6717 5.1402C15.9578 6.29058 16.7545 7.88975 16.8983 9.60924C17.0422 11.3287 16.5221 13.038 15.445 14.3861L20.601 19.5411C20.6747 19.6097 20.7338 19.6925 20.7748 19.7845C20.8158 19.8765 20.8378 19.9758 20.8396 20.0765C20.8414 20.1772 20.8228 20.2773 20.7851 20.3707C20.7474 20.4641 20.6913 20.5489 20.62 20.6201C20.5488 20.6913 20.464 20.7475 20.3706 20.7852C20.2772 20.8229 20.1772 20.8414 20.0765 20.8397C19.9758 20.8379 19.8765 20.8158 19.7845 20.7748C19.6925 20.7339 19.6097 20.6748 19.541 20.6011L14.385 15.4461ZM6.46 13.8841C5.72604 13.15 5.22615 12.2149 5.02351 11.1968C4.82087 10.1788 4.92457 9.1235 5.32151 8.16437C5.71845 7.20523 6.39081 6.38529 7.25361 5.80817C8.11642 5.23105 9.13094 4.92265 10.169 4.92195C11.207 4.92125 12.2219 5.22828 13.0855 5.80424C13.9491 6.3802 14.6226 7.19924 15.0208 8.15784C15.419 9.11644 15.5241 10.1716 15.3229 11.1899C15.1216 12.2082 14.623 13.144 13.89 13.8791L13.885 13.8841L13.88 13.8881C12.8951 14.8707 11.5604 15.4222 10.1692 15.4214C8.77792 15.4207 7.44385 14.8678 6.46 13.8841Z"
                      fill="#666666"
                      fill-opacity="0.65"
                    />
                  </svg>

                  <input id="email" type="text" placeholder="Find a space" className="" />
                </div>

                <input
                  id="text"
                  type="text"
                  class="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2"
                  placeholder="Duration"
                />
              </div>

              <button class="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
