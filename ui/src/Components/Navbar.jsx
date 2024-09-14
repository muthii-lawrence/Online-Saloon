import { React, useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav class="bg-[#da1b9e] md:h56px] items-center dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-400">
      <div class="md:max-w-[85%] w-full flex flex-wrap items-center mx-auto md:p-4 md:justify-around justify-between h-[56px]">
        <a href="/">
          <span class="flex items-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </span>
        </a>
        <div class=" md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="/login">
            {" "}
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Offer Services
            </button>{" "}
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <input
            type="text"
            className="border-2 border-gray-400 px-4 py-1 outline-none focus:ring-1 focus:border-blue-400"
            placeholder="Search"
          />
        </div>
        <div>Your Beauty Partner</div>
      </div>
    </nav>
  );
};

export default Navbar;
