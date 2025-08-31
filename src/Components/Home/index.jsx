import React, { useState, useRef, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";

import "./index.css";

const images = [
  {
    src: image2,
    id: 2,
  },
  {
    src: image3,
    id: 3,
  },
  {
    src: image4,
    id: 4,
  },
  {
    src: image5,
    id: 5,
  },
  {
    src: image6,
    id: 6,
  },
  {
    src: image7,
    id: 7,
  },
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef();

  // Close popover if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <section className="home grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-15 py-4 gap-0 lg:gap-10">
        <div className="logo-section relative flex flex-col items-center justify-center">
          {/* Left Arrow */}
          <button className="absolute left-1 top-1/2 -translate-y-1/2">
            <SlArrowLeft size={30} className="text-gray-500" />
          </button>

          {/* Image */}
          <img
            src={image1}
            alt="Logo"
            className="h-[350px] w-[380px] lg:h-[600px] lg:w-[600px] mb-4"
          />

          {/* Right Arrow */}
          <button className="absolute right-1 top-1/2 -translate-y-1/2">
            <SlArrowRight size={30} />
          </button>
        </div>

        <div className="flex flex-col mt-0 lg:mt-10">
          <div>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 mb-2 lg:mb-3">
              <h1 className="text-4xl">Manuka</h1>
              <h1 className="text-4xl">Honey</h1>
            </div>
            <h1 className="text-4xl">
              UMF
              <sup className="align-super text-[10px] ml-[1px]">TM</sup>
              <span className="text-5xl"> 24+</span>
            </h1>
            <h1 className="text-4xl mt-2 lg:mt-3">
              MGO
              <span className="text-5xl"> 1122+</span>
            </h1>
          </div>
          <div className="relative" ref={popoverRef}>
            {/* Trigger button */}
            <div
              className="flex items-center w-fit bg-[#666666]/15 gap-2 my-10 px-4 py-2 rounded-full cursor-pointer"
              style={{ color: "#666666" }}
              onClick={() => setOpen(!open)}
            >
              <AiOutlineExclamationCircle />
              <span>What is UMF and MGO?</span>
            </div>

            {/* Popover box */}
            {open && (
              <div className="absolute left-0 mt-[-25px] w-full lg:w-[70%] bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                {/* Arrow */}
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>

                <div className="p-4 space-y-3">
                  {/* UMF Section */}
                  <div className="bg-gray-100 rounded-md p-4">
                    <h2 className="font-bold">UMF</h2>
                    <p className="text-sm text-gray-600">
                      UMF is the strength and purity rating of Manuka honey.
                    </p>
                    <div className="flex gap-1 lg:gap-3 mt-3 text-sm font-semibold">
                      <span className="text-orange-500 border-b-3">10+</span>
                      <span className="text-red-500 border-b-3">15+</span>
                      <span className="text-pink-500 border-b-3">20+</span>
                      <span className="text-purple-500 border-b-3">24+</span>
                      <span className="text-blue-500 border-b-3">26+</span>
                      <span className="text-green-500 border-b-3">28+</span>
                      <span className="text-teal-500 border-b-3">30+</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      The higher the number, the greater the potency and rarity
                      of Manuka honey.
                    </p>
                  </div>

                  {/* MGO Section */}
                  {/* MGO Section */}
                  <div className="bg-gray-100 rounded-md p-4">
                    <h2 className="font-bold">MGO</h2>
                    <p className="text-sm text-gray-600">
                      MGO is the key natural compound that gives Manuka honey
                      its special antibacterial strength.
                    </p>
                    <div className="flex gap-1 lg:gap-3 mt-3 text-sm font-semibold">
                      <span className="text-orange-500 border-b-3">263+</span>
                      <span className="text-red-500 border-b-3">514+</span>
                      <span className="text-pink-500 border-b-3">829+</span>
                      <span className="text-purple-500 border-b-3">1122+</span>
                      <span className="text-blue-500 border-b-3">1282+</span>
                      <span className="text-green-500 border-b-3">1450+</span>
                      <span className="text-teal-500 border-b-3">1620+</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      The higher the number, the higher the antibacterial
                      properties in the honey.
                    </p>
                  </div>
                </div>
                {/* Close Button */}
                <div className="flex justify-center pb-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="border-b cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-0.5 text-yellow-500 ml-auto">
              {/* Render 5 hearts */}
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <IoMdHeart key={i} />
                ))}

              {/* Review text */}
              <span
                className="ml-2 text-sm text-gray-700"
                style={{ letterSpacing: "2px" }}
              >
                825 Reviews
              </span>
            </div>
            <p className="text-lg" style={{ color: "#313131" }}>
              The Optimiser
            </p>
            <p className="text-lg mt-4 lg:mt-8" style={{ color: "#313131" }}>
              For those times in life when quality comes first. This pure UMF™
              24+ Manuka Honey is powerfully active, sourced from wild and
              rugged locations around Aotearoa New Zealand and great for almost
              all uses. It has a full, delicious flavour and your body will love
              you for it.
            </p>
            <ul className="grid grid-cols-3 lg:grid-cols-6 gap-2 mt-4 lg:mt-6">
              {images.map((image) => (
                <li key={image.id} className="inline-block mr-2 mt-4">
                  <img
                    src={image.src}
                    style={{ height: "70px", width: "70px" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
