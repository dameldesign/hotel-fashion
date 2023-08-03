import React from "react";

// Import the image from the assets folder
import pink from "../assets/pinkbg.png";

const navigation = [
  {
    name: "Manager, The Vineyard",
    text: "Our collaboration with Hotels Fashion has been a game-changer for us. The unique and beautifully designed products showcased in our hotel have received an overwhelmingly positive response from our guests.",
  },
  {
    name: "Manager, Tobams Colors",
    text: "Hotels Fashion has provided an incredible platform for me to showcase my designs to a wider audience. The exposure and recognition I have gained through their hotel partnerships have been invaluable. They truly appreciate the work of designers",
  },
  {
    name: "Manager, Collxx",
    text: "Our collaboration with Hotels Fashion has been a game-changer for us. The unique and beautifully designed products showcased in our hotel have received an overwhelmingly positive response from our guests.",
  },
];

const Testimonials = () => {
  return (
    <div
      className="w-screen h-auto px-6  py-20 flex mx-auto items-center justify-center "
      style={{ backgroundImage: `url(${pink})`, backgroundSize: "cover" }}
    >
      <div className=" flex flex-col items-center justify-between gap-12">
        <h1 className=" font-normal text-[--main-text] text-[32px] leading-[48px]">
          What Our Clients Are Saying About Us
        </h1>
        <div className="container  px-4 md:px-8 lg:px-16 xl:gap-8 flex items-center justify-center">
          <div className="grid  place-content-center grid-cols-1 md:grid-cols-2 md:gap-y-6 xl:grid-cols-3 xl:gap-y-20  gap-16 ">
            {navigation.map((item, index) => (
              <div key={index} className="bg-white w-[340px] h-auto   xl:w-[400px] xl:h-[253px] p-6 border rounded-lg shadow-md">
                <div className="flex flex-row items-center justify-between w-full mb-5">
                  <h2 className=" text-[--main-color] font-bold text-base">{item.name}</h2>

                  <svg
                    width="100"
                    height="20"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.14319 1.42372C9.53185 0.777902 10.4681 0.777901 10.8568 1.42372L13.0731 5.10651C13.2128 5.33853 13.4405 5.504 13.7043 5.56509L17.8918 6.53491C18.6261 6.70498 18.9154 7.59545 18.4213 8.16466L15.6036 11.4106C15.4261 11.6151 15.3391 11.8828 15.3625 12.1526L15.7342 16.4347C15.7994 17.1857 15.0419 17.736 14.3478 17.442L10.3901 15.7653C10.1408 15.6596 9.85924 15.6596 9.60991 15.7653L5.65216 17.442C4.95813 17.736 4.20065 17.1857 4.26582 16.4347L4.63745 12.1526C4.66087 11.8828 4.57387 11.6151 4.39637 11.4106L1.57871 8.16466C1.0846 7.59545 1.37393 6.70498 2.10824 6.53491L6.29567 5.56509C6.55948 5.504 6.78723 5.33853 6.92685 5.10652L9.14319 1.42372Z"
                      fill="#FFCB45"
                    />
                    <path
                      d="M29.1432 1.42372C29.5319 0.777902 30.4681 0.777901 30.8568 1.42372L33.0731 5.10651C33.2128 5.33853 33.4405 5.504 33.7043 5.56509L37.8918 6.53491C38.6261 6.70498 38.9154 7.59545 38.4213 8.16466L35.6036 11.4106C35.4261 11.6151 35.3391 11.8828 35.3625 12.1526L35.7342 16.4347C35.7994 17.1857 35.0419 17.736 34.3478 17.442L30.3901 15.7653C30.1408 15.6596 29.8592 15.6596 29.6099 15.7653L25.6522 17.442C24.9581 17.736 24.2006 17.1857 24.2658 16.4347L24.6375 12.1526C24.6609 11.8828 24.5739 11.6151 24.3964 11.4106L21.5787 8.16466C21.0846 7.59545 21.3739 6.70498 22.1082 6.53491L26.2957 5.56509C26.5595 5.504 26.7872 5.33853 26.9269 5.10652L29.1432 1.42372Z"
                      fill="#FFCB45"
                    />
                    <path
                      d="M49.1432 1.42372C49.5319 0.777902 50.4681 0.777901 50.8568 1.42372L53.0731 5.10651C53.2128 5.33853 53.4405 5.504 53.7043 5.56509L57.8918 6.53491C58.6261 6.70498 58.9154 7.59545 58.4213 8.16466L55.6036 11.4106C55.4261 11.6151 55.3391 11.8828 55.3625 12.1526L55.7342 16.4347C55.7994 17.1857 55.0419 17.736 54.3478 17.442L50.3901 15.7653C50.1408 15.6596 49.8592 15.6596 49.6099 15.7653L45.6522 17.442C44.9581 17.736 44.2006 17.1857 44.2658 16.4347L44.6375 12.1526C44.6609 11.8828 44.5739 11.6151 44.3964 11.4106L41.5787 8.16466C41.0846 7.59545 41.3739 6.70498 42.1082 6.53491L46.2957 5.56509C46.5595 5.504 46.7872 5.33853 46.9269 5.10652L49.1432 1.42372Z"
                      fill="#FFCB45"
                    />
                    <path
                      d="M69.1432 1.42372C69.5319 0.777902 70.4681 0.777901 70.8568 1.42372L73.0731 5.10651C73.2128 5.33853 73.4405 5.504 73.7043 5.56509L77.8918 6.53491C78.6261 6.70498 78.9154 7.59545 78.4213 8.16466L75.6036 11.4106C75.4261 11.6151 75.3391 11.8828 75.3625 12.1526L75.7342 16.4347C75.7994 17.1857 75.0419 17.736 74.3478 17.442L70.3901 15.7653C70.1408 15.6596 69.8592 15.6596 69.6099 15.7653L65.6522 17.442C64.9581 17.736 64.2006 17.1857 64.2658 16.4347L64.6375 12.1526C64.6609 11.8828 64.5739 11.6151 64.3964 11.4106L61.5787 8.16466C61.0846 7.59545 61.3739 6.70498 62.1082 6.53491L66.2957 5.56509C66.5595 5.504 66.7872 5.33853 66.9269 5.10652L69.1432 1.42372Z"
                      fill="#FFCB45"
                    />
                    <path
                      d="M89.1432 1.42372C89.5319 0.777902 90.4681 0.777901 90.8568 1.42372L93.0731 5.10651C93.2128 5.33853 93.4405 5.504 93.7043 5.56509L97.8918 6.53491C98.6261 6.70498 98.9154 7.59545 98.4213 8.16466L95.6036 11.4106C95.4261 11.6151 95.3391 11.8828 95.3625 12.1526L95.7342 16.4347C95.7994 17.1857 95.0419 17.736 94.3478 17.442L90.3901 15.7653C90.1408 15.6596 89.8592 15.6596 89.6099 15.7653L85.6522 17.442C84.9581 17.736 84.2006 17.1857 84.2658 16.4347L84.6375 12.1526C84.6609 11.8828 84.5739 11.6151 84.3964 11.4106L81.5787 8.16466C81.0846 7.59545 81.3739 6.70498 82.1082 6.53491L86.2957 5.56509C86.5595 5.504 86.7872 5.33853 86.9269 5.10652L89.1432 1.42372Z"
                      fill="#FFCB45"
                    />
                  </svg>
                </div>
                <p className=" font-normal text-base text-[#3F3F3F]">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
        <button className="btn gap-3 flex items-center justify-center font-Poppins "> View All
        <svg width="6" height="11" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.699987 11.3C0.516654 11.1167 0.424988 10.8834 0.424988 10.6C0.424988 10.3167 0.516654 10.0834 0.699987 9.90005L4.59999 6.00005L0.699987 2.10005C0.516654 1.91672 0.424988 1.68338 0.424988 1.40005C0.424988 1.11672 0.516654 0.883382 0.699987 0.700048C0.883321 0.516715 1.11665 0.425049 1.39999 0.425049C1.68332 0.425049 1.91665 0.516715 2.09999 0.700048L6.69999 5.30005C6.79999 5.40005 6.87099 5.50838 6.91299 5.62505C6.95499 5.74172 6.97565 5.86672 6.97499 6.00005C6.97499 6.13338 6.95399 6.25838 6.91199 6.37505C6.86999 6.49172 6.79932 6.60005 6.69999 6.70005L2.09999 11.3C1.91665 11.4834 1.68332 11.575 1.39999 11.575C1.11665 11.575 0.883321 11.4834 0.699987 11.3Z" fill="white"/>
</svg>

        </button>
      </div>
    </div>
  );
};

export default Testimonials;
