import React from "react";
import { FiMenu } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { PiBag } from "react-icons/pi";

import headerLogo from "../../assets/headerLogo.png";

import "./index.css";

const Header = () => {
  return (
    <>
      <header className="hidden lg:flex justify-between items-center px-4 lg:px-15 py-3">
        <div className="flex border border-gray-500 rounded-full px-6 py-3">
          <h1 className="text-xs logo-name">WHICH MANUKA IS FOR ME?</h1>
        </div>
        <ul className="flex items-center gap-15">
          <li>Shop</li>
          <li>Explore</li>
        </ul>
        <div className="flex flex-col  items-center">
          <img src={headerLogo} alt="header-logo" className="h-10 w-20 mb-2" />
          <h1 className="logo-heading text-sm lg:text-lg font-bold mb-0">
            NEW ZEALAND
          </h1>
          <h1 className="logo-heading text-sm lg:text-lg font-bold mt-0">
            HONEY CO.
          </h1>
        </div>
        <ul className="flex items-center gap-15">
          <li>About</li>
          <li>Rewards</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-3 ">
          <GoPerson className="h-5 w-5" />
          <GoSearch className="h-5 w-5" />
          <div className="relative">
            <PiBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full px-1 py-0.5 font-semibold">
              0
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Section  */}
      <header className="relative flex items-center justify-between lg:hidden top-0 px-4 lg:px-15 py-8">
        <div>
          <FiMenu className="h-5 w-5" />
        </div>

        <div className="absolute left-1/2 top-4 -translate-x-1/2 flex flex-col items-center">
          <img src={headerLogo} alt="header-logo" className="h-5 w-10 mb-1" />
          <h1 className="logo-heading-mobile text-xs font-semibold tracking-widest">
            NEW ZEALAND
          </h1>
          <h1 className="logo-heading-mobile text-xs font-semibold tracking-widest">
            HONEY CO.
          </h1>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <GoPerson className="h-5 w-5" />
          <GoSearch className="h-5 w-5" />
          <div className="relative">
            <PiBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full px-2 py-0.5 font-semibold">
              0
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
