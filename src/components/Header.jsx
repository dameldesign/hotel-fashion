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
        <p className="font-medium text-[18px] animate-pulse">Pop Ups In Top Class Hotels Around The World</p>

        {/* search bar */}
        <div className=" items-center flex justify-center flex-col lg:flex-row ">
          <div>
            <div class="flex flex-col mt-8 space-y-3 items-center sm:-mx-0 sm:flex-row sm:justify-center h-auto w-auto sm:space-y-0">
              <div className=" flex flex-col sm:flex-row   md:gap-0">
                <div className="lg:pr-[369px] py-5 pl-5  pr-8 border-r-3.5 outline-none border-solid border-gray-300 text-gray-700 bg-white mb-2 md:mb-0  flex items-center gap-3  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
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

                  <input id="email" type="text" placeholder="Find a space" className=" bg-white outline-none active:bg-white" />
                </div>

                <div className=" py-5 px-5   text-gray-700 bg-white  flex items-center gap-3  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">

                <select className="border flex rounded-lg p-2 gap-3 w-full outline-none text-gray-700">
            <option value="" disabled selected className="w-[114px] text-gray-700 bg-slate-400">
               Duration
            </option>
            <option value="option1"> 1 Week</option>
            <option value="option2"> 2 Week</option>
            <option value="option3">3 Week</option>
          </select>
                </div>


              </div>

              <button class="px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[--main-color] rounded-md hover:bg-red-800 focus:bg-blue-600 focus:outline-none sm:mx-2">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.77 30.8919C26.0739 33.0461 22.6553 34.0862 19.2163 33.7986C15.7774 33.511 12.579 31.9174 10.2783 29.3453C7.97748 26.7732 6.74892 23.4177 6.84489 19.9681C6.94086 16.5184 8.35409 13.2364 10.7943 10.7962C13.2345 8.35598 16.5165 6.94275 19.9662 6.84678C23.4158 6.75081 26.7713 7.97937 29.3434 10.2801C31.9156 12.5809 33.5091 15.7793 33.7967 19.2182C34.0843 22.6572 33.0442 26.0758 30.89 28.7719L41.202 39.0819C41.3494 39.2192 41.4676 39.3848 41.5496 39.5688C41.6315 39.7528 41.6756 39.9514 41.6792 40.1528C41.6827 40.3542 41.6457 40.5543 41.5702 40.7411C41.4948 40.9279 41.3825 41.0975 41.2401 41.24C41.0976 41.3824 40.928 41.4947 40.7412 41.5701C40.5544 41.6456 40.3544 41.6826 40.153 41.6791C39.9515 41.6755 39.7529 41.6314 39.5689 41.5494C39.3849 41.4675 39.2193 41.3493 39.082 41.2019L28.77 30.8919ZM12.92 27.7679C11.4521 26.2998 10.4523 24.4295 10.047 22.3934C9.64174 20.3573 9.84914 18.2468 10.643 16.3285C11.4369 14.4102 12.7816 12.7703 14.5072 11.6161C16.2328 10.4618 18.2619 9.84505 20.3379 9.84366C22.414 9.84226 24.4439 10.4563 26.171 11.6082C27.8982 12.7602 29.2451 14.3982 30.0416 16.3154C30.838 18.2326 31.0483 20.3429 30.6457 22.3796C30.2432 24.4162 29.2459 26.2878 27.78 27.7579L27.77 27.7679L27.76 27.7759C25.7902 29.7411 23.1208 30.8441 20.3383 30.8426C17.5558 30.8412 14.8877 29.7353 12.92 27.7679Z" fill="white"/>
</svg>

              </button>

              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
