import { useState } from "react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto" >
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="/">
              <img className="w-auto h-6 sm:h-7" src={logo} alt="" />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 8h16M4 16h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <a
                href="/"
                className="px-3 py-2 mx-3 mt-2 text-[--text-color] transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Hotel
              </a>
              <a
                href="/"
                className="px-3 py-2 mx-3 mt-2 text-[--text-color] transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Brand
              </a>
              <a
                href="./Brand.jsx"
                className="px-3 py-2 mx-3 mt-2 text-[--text-color] transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                About Us
              </a>
              <a
                href="/"
                className="px-3 py-2 mx-3 mt-2 text-[--text-color] transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <select className=" bg-transparent border-none text-base text-[--text-color]">
                  <option value="" disabled selected>
                    <p className="text-[--text-color] text-base">How it Works</p>
                  </option>
                  <option value="option1"> 1 Week</option>
                  <option value="option2"> 2 Week</option>
                  <option value="option3">3 Week</option>
                </select>
              </a>
              <a
                href="/"
                className="px-3 py-2 mx-3 mt-2 text-[--text-color] transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Pricing
              </a>
              <a
                href="/"
                className="px-3 py-2 mx-3 mt-2 text-[--text-color] transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center mt-4 gap-3 lg:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-[--text-color] dark:hover:text-gray-400 focus:text-[--text-color] dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1088_17"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1088_17)">
                    <path
                      d="M0 0L0.5 1.375L0 2.8125V4.25L2 7.625L0 11V13L2 16L0 19V21L2 24.375L0 27.75V32L1.375 31.5L2.8125 32H4.25L7.625 30L11 32H13L16 30L19 32H21L24.375 30L27.75 32H32L31.5 30.625L32 29.1875V27.75L30 24.375L32 21V19L30 16L32 13V11L30 7.625L32 4.25V0L30.625 0.5L29.1875 0H27.75L24.375 2L21 0H19L16 2L13 0H11L7.625 2L4.25 0H0Z"
                      fill="#EEEEEE"
                    />
                    <path
                      d="M21 0V6.75L27.75 0H21ZM32 4.25L25.25 11H32V4.25ZM0 11H6.75L0 4.25V11ZM4.25 0L11 6.75V0H4.25ZM11 32V25.25L4.25 32H11ZM0 27.75L6.75 21H0V27.75ZM32 21H25.25L32 27.75V21ZM27.75 32L21 25.25V32H27.75Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M0 0V2.8125L8.1875 11H11L0 0ZM13 0V13H0V19H13V32H19V19H32V13H19V0H13ZM29.1875 0L21 8.1875V11L32 0H29.1875ZM11 21L0 32H2.8125L11 23.8125V21ZM21 21L32 32V29.1875L23.8125 21H21Z"
                      fill="#D80027"
                    />
                  </g>
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>
                <h3 className="mx-2 text-[--text-color] dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
