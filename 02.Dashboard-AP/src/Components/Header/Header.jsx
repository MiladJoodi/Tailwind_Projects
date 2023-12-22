import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (

      <header className="w-full shadow-lg bg-white items-center h-16 rounded-2xl z-40">
        <div className="relative z-20 flex flex-column  justify-center h-full px-3 mx-auto">
          <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
            <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
              <div className="relative flex items-center w-full lg:w-64 h-full">
                <CiSearch className="h-5 w-5 absolute right-0 z-20 hidden mr-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" />
                <input
                  type="text"
                  placeholder="جستجو"
                  className="block w-full py-2 pr-10 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90"
                />
              </div>
            </div>
            <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
              <a href="#" className="block relative">
                <img src="./images/joodi.jpg" className="w-12 h-12 rounded-full mx-auto object-cover" />
              </a>
            </div>
          </div>
        </div>
      </header>

  );
}

export default Header;
