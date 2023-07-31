import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* Footer Content */}
      <div className="bg-[#FFFDFE] pt-16 pb-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-60 items-center flex ">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-[--main-color] text-[18px] font-medium">Helpful Tips</h1>
            <div className="flex flex-col text-start text-base font-normal text-[--text-color] gap-2">
              <p>How it Works</p>
              <p>Rent Space</p>
              <p>Hotels Dashboard</p>
              <p>Trending Hotels</p>
              <p>Verified Brands</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-[--main-color] text-[18px] font-medium">Quicklinks</h1>
            <div className="flex flex-col text-start text-base font-normal text-[--text-color] gap-2">
              <p className="hover:ml-2 focus:ml-2">About Us</p>
              <p className="hover:ml-2 focus:ml-2">FAQs</p>
              <p className="hover:ml-2 focus:ml-2">Terms of Service</p>
              <p className="hover:ml-2 focus:ml-2">Privacy Policy</p>
              <p className="hover:ml-2 focus:ml-2">Cookie Policy</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-[--main-color] text-[18px] font-medium">Discover</h1>
            <div className="flex flex-col text-start text-base font-normal text-[--text-color] gap-2">
              <p className="hover:ml-2 focus:ml-2">City Guide</p>
              <p className="hover:ml-2 focus:ml-2">Blog</p>
              <p className="hover:ml-2 focus:ml-2">Reviews</p>
              <p className="hover:ml-2 focus:ml-2">Events</p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-start gap-4 ">
            <h1 className="text-[--text-color] text-start text-[18px] font-medium w-[19rem] sm:w-[400px]">
              Get updates about available spaces, weekly digest of our most important activities and more in your email
            </h1>
            <div className="flex flex-col text-start text-base font-normal text-[--text-color] gap-2">
              <div className="gap-2 flex-col sm:flex-row flex mb-2 sm:w-[400px]">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full sm:w-[372px] h-[40px] border border-solid px-2.5 py-1.5"
                />
                <a
                  href="/"
                  className="bg-[--main-color] py-2.5 px-6 text-sm font-normal text-white shadow-sm text-center"
                >
                 Subscribe
                </a>
              </div>
              <a href="mailto:theteam@hotelsfashion.com" className="text-[--text-color]">
                mailto:theteam@hotelsfashion.com
              </a>
              <div className="flex flex-row item-start p-0 justify-between gap-6 w-[200px]">
                {/* Social Media Icons */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6667 4.66674C22.6667 4.48993 22.5964 4.32036 22.4714 4.19533C22.3464 4.07031 22.1768 4.00007 22 4.00007H18.6667C16.9882 3.91646 15.3448 4.50059 14.0956 5.62484C12.8465 6.7491 12.093 8.32207 12 10.0001V13.6001H8.66667C8.48986 13.6001 8.32029 13.6703 8.19526 13.7953C8.07024 13.9204 8 14.0899 8 14.2667V17.7334C8 17.9102 8.07024 18.0798 8.19526 18.2048C8.32029 18.3298 8.48986 18.4001 8.66667 18.4001H12V27.3334C12 27.5102 12.0702 27.6798 12.1953 27.8048C12.3203 27.9298 12.4899 28.0001 12.6667 28.0001H16.6667C16.8435 28.0001 17.013 27.9298 17.1381 27.8048C17.2631 27.6798 17.3333 27.5102 17.3333 27.3334V18.4001H20.8267C20.9749 18.4022 21.1197 18.3548 21.238 18.2655C21.3563 18.1762 21.4415 18.0499 21.48 17.9067L22.44 14.4401C22.4665 14.3416 22.4701 14.2383 22.4504 14.1382C22.4308 14.0381 22.3884 13.9438 22.3266 13.8627C22.2647 13.7816 22.1851 13.7157 22.0938 13.6701C22.0025 13.6246 21.902 13.6006 21.8 13.6001H17.3333V10.0001C17.3665 9.67004 17.5215 9.36422 17.768 9.14233C18.0146 8.92044 18.335 8.79841 18.6667 8.80007H22C22.1768 8.80007 22.3464 8.72983 22.4714 8.60481C22.5964 8.47978 22.6667 8.31021 22.6667 8.1334V4.66674Z" fill="black"/>
</svg>

                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.88 9.78002C8.48 9.78002 9.76 8.48002 9.76 6.90002C9.76 5.32002 8.46 4.02002 6.88 4.02002C5.3 4.02002 4 5.32002 4 6.90002C4 8.48002 5.3 9.78002 6.88 9.78002ZM12.5 11.96V28H17.46V20.08C17.46 17.98 17.86 15.96 20.44 15.96C23.02 15.96 23.02 18.36 23.02 20.2V28H28V19.2C28 14.88 27.08 11.56 22.04 11.56C19.62 11.56 18 12.88 17.34 14.14H17.28V11.94H12.52L12.5 11.96ZM4.4 11.96H9.38V28H4.4V11.96Z" fill="black"/>
</svg>
                  {/* ... Social Media Icon SVG Code ... */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4 2.66675H21.6C25.8667 2.66675 29.3333 6.13341 29.3333 10.4001V21.6001C29.3333 23.6511 28.5186 25.6181 27.0683 27.0684C25.618 28.5187 23.651 29.3334 21.6 29.3334H10.4C6.13334 29.3334 2.66667 25.8668 2.66667 21.6001V10.4001C2.66667 8.34907 3.48143 6.38207 4.93171 4.93179C6.38199 3.48151 8.349 2.66675 10.4 2.66675ZM10.1333 5.33341C8.8603 5.33341 7.6394 5.83913 6.73923 6.7393C5.83905 7.63948 5.33334 8.86038 5.33334 10.1334V21.8667C5.33334 24.5201 7.48001 26.6667 10.1333 26.6667H21.8667C23.1397 26.6667 24.3606 26.161 25.2608 25.2609C26.161 24.3607 26.6667 23.1398 26.6667 21.8667V10.1334C26.6667 7.48008 24.52 5.33341 21.8667 5.33341H10.1333ZM23 7.33342C23.442 7.33342 23.866 7.50901 24.1785 7.82157C24.4911 8.13413 24.6667 8.55805 24.6667 9.00008C24.6667 9.44211 24.4911 9.86603 24.1785 10.1786C23.866 10.4912 23.442 10.6667 23 10.6667C22.558 10.6667 22.1341 10.4912 21.8215 10.1786C21.5089 9.86603 21.3333 9.44211 21.3333 9.00008C21.3333 8.55805 21.5089 8.13413 21.8215 7.82157C22.1341 7.50901 22.558 7.33342 23 7.33342ZM16 9.33342C17.7681 9.33342 19.4638 10.0358 20.7141 11.286C21.9643 12.5363 22.6667 14.232 22.6667 16.0001C22.6667 17.7682 21.9643 19.4639 20.7141 20.7141C19.4638 21.9644 17.7681 22.6667 16 22.6667C14.2319 22.6667 12.5362 21.9644 11.286 20.7141C10.0357 19.4639 9.33334 17.7682 9.33334 16.0001C9.33334 14.232 10.0357 12.5363 11.286 11.286C12.5362 10.0358 14.2319 9.33342 16 9.33342ZM16 12.0001C14.9391 12.0001 13.9217 12.4215 13.1716 13.1717C12.4214 13.9218 12 14.9392 12 16.0001C12 17.0609 12.4214 18.0784 13.1716 18.8285C13.9217 19.5787 14.9391 20.0001 16 20.0001C17.0609 20.0001 18.0783 19.5787 18.8284 18.8285C19.5786 18.0784 20 17.0609 20 16.0001C20 14.9392 19.5786 13.9218 18.8284 13.1717C18.0783 12.4215 17.0609 12.0001 16 12.0001Z" fill="#202020"/>
</svg>
                  {/* ... Social Media Icon SVG Code ... */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.9467 7.99992C28.92 8.46659 27.8133 8.77325 26.6667 8.91992C27.84 8.21325 28.7467 7.09325 29.1733 5.74659C28.0667 6.41325 26.84 6.87992 25.5467 7.14659C24.4933 5.99992 23.0133 5.33325 21.3333 5.33325C18.2 5.33325 15.64 7.89325 15.64 11.0533C15.64 11.5066 15.6933 11.9466 15.7867 12.3599C11.04 12.1199 6.81334 9.83992 4.00001 6.38659C3.50668 7.22659 3.22668 8.21325 3.22668 9.25325C3.22668 11.2399 4.22668 12.9999 5.77334 13.9999C4.82668 13.9999 3.94668 13.7333 3.17334 13.3333V13.3733C3.17334 16.1466 5.14668 18.4666 7.76001 18.9866C6.92098 19.2162 6.04014 19.2481 5.18668 19.0799C5.54882 20.2166 6.25806 21.2111 7.2147 21.9238C8.17134 22.6365 9.32727 23.0315 10.52 23.0533C8.49818 24.6538 5.99201 25.519 3.41334 25.5066C2.96001 25.5066 2.50668 25.4799 2.05334 25.4266C4.58668 27.0533 7.60001 27.9999 10.8267 27.9999C21.3333 27.9999 27.1067 19.2799 27.1067 11.7199C27.1067 11.4666 27.1067 11.2266 27.0933 10.9733C28.2133 10.1733 29.1733 9.15992 29.9467 7.99992Z" fill="#202020"/>
</svg>
                  {/* ... Social Media Icon SVG Code ... */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#010101] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-white font-normal text-base flex items-center h-[40px] w-screen gap-3">
        <p>Hotels Fashion</p>
        <p>&copy;{new Date().getFullYear()}.</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
