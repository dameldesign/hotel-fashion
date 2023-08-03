import { useState } from "react";
import logo from "../assets/Rectangle 298.png";

const navigation = [
  { name: "Hotel", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Brand", href: "#", icon: "" },
  // { name: 'How it Works', href: '#' },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Banner() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white no-underline">
      <header className="inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-11">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 no-underline">
              <span className="sr-only">Your Company</span>
              <img className="h-6 w-auto" src={logo} alt="" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-normal text-black no-underline"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Login */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900 no-underline"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Modal */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                {/* Mobile Menu Logo */}
                <a
                  href="/"
                  className="-m-1.5 p-1.5"
                  onClick={() => setMobileMenuOpen(false)} // Close sidebar when clicked
                >
                  <span className="sr-only no-underline">Your Company</span>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </a>

                {/* Close Menu Button (X icon) */}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)} // Close sidebar when clicked
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Mobile Menu Login */}
                <div className="py-6 lg:hidden">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

