import React from "react";
import { IoMdRefresh } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.jpg";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image14.png";
import image15 from "../../assets/image15.png";
import image16 from "../../assets/image16.png";
import image17 from "../../assets/image17.png";
import image18 from "../../assets/image18.png";
import image19 from "../../assets/image19.png";
import image20 from "../../assets/image20.png";
import image21 from "../../assets/image21.png";
import image22 from "../../assets/image22.png";
import image23 from "../../assets/image23.png";
import image24 from "../../assets/image24.png";
import image25 from "../../assets/image25.png";

import "./index.css";

const imagesList = [
  {
    src: image15,
    id: 1,
  },
  {
    src: image16,
    id: 2,
  },
  {
    src: image17,
    id: 3,
  },
  {
    src: image18,
    id: 4,
  },
  {
    src: image19,
    id: 5,
  },
  {
    src: image20,
    id: 6,
  },
  {
    src: image21,
    id: 7,
  },
];

const Products = () => {
  return (
    <>
      <section className="products grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 px-4 lg:px-15 py-10 pt-10 items-start">
        <div className="grid grid-cols-2 gap-3">
          {/* Top left */}
          <div className="col-span-1">
            <img src={image8} className="w-full h-full object-cover" />
          </div>

          {/* Top right */}
          <div className="col-span-1">
            <img src={image9} className="w-full h-full object-cover " />
          </div>

          {/* Middle big image */}
          <div className="col-span-2">
            <img src={image10} className="w-full h-[250px] object-cover" />
          </div>

          {/* Bottom row - 4 small images */}
          <div className="col-span-1">
            <img src={image11} className="w-full h-full object-cover " />
          </div>

          <div className="col-span-1">
            <img src={image12} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-1">
            <img
              src={image13}
              className="w-full h-[100px] lg:h-[220px] object-cover"
            />
          </div>

          <div className="col-span-1">
            <img
              src={image14}
              className="w-full h-[100px] lg:h-[220px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6 lg:mt-0">
          <h3
            className="text-sm font-medium mb-2"
            style={{ color: "#313131", letterSpacing: "1.5px" }}
          >
            SIZE (SELECT ONE)
          </h3>
          <p className="text-gray-600 text-lg">Variant: 125g | 4.4oz</p>
          <ul className="grid grid-cols-3 lg:grid-cols-4 gap-2 mt-4 lg:mt-6">
            {imagesList.map((image) => (
              <li
                key={image.id}
                className={`flex items-center justify-center h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] ${
                  image.id === 1 ? "border border-[#E87722] rounded-2xl" : ""
                }`}
              >
                <img
                  className="h-[130px] w-[130px] object-contain"
                  src={image.src}
                  alt="product"
                />
              </li>
            ))}
          </ul>

          {/* PAYMENT OPTIONS */}
          <div className="mt-6 lg:mt-10">
            <h3
              className="text-sm font-medium mb-2"
              style={{ color: "#313131", letterSpacing: "1.5px" }}
            >
              PAYMENT OPTIONS (SELECT ONE)
            </h3>
            <div
              className="mb-6 p-5 lg:p-10 bg-[#f2f2f2] rounded-lg mt-4"
              //   style={{ backgrounColor: "#F2F2F2" }}
            >
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex justify-center items-center px-6 py-3 rounded-full border w-full lg:w-1/2 text-white bg-yellow-400 border-yellow-500 ">
                  <p className="text-center text-base"> One-time purchase</p>
                  <p className=" text-center">$55.88 USD</p>
                </div>
                <div className="flex justify-center items-center px-6 py-3 rounded-full border w-full lg:w-1/2 bg-white border-yellow-500 ">
                  <p className="text-center text-base text-[#313131]">
                    {" "}
                    Subscribe & Save 20%
                  </p>
                  <p className="text-center text-[#313131]">$55.88 USD</p>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <IoMdRefresh size={20} className="mr-1" />
                <p className="text-sm text-[#313131]">
                  What is a Subscription?
                </p>
              </div>
            </div>
          </div>

          {/* QUANTITY OPTIONS */}
          <div className="mt-4 lg:mt-8">
            <h3
              className="text-sm font-medium mb-2"
              style={{ color: "#313131", letterSpacing: "1.5px" }}
            >
              SELECT QUANTITY
            </h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-white px-10 py-3 rounded-full bg-[#F1B434]">
                <button className="">
                  <FiMinus />
                </button>
                <span className="px-4">1</span>
                <button className="">
                  <FiPlus />
                </button>
              </div>
              <button className="bg-[#313131] text-white px-6 py-3 rounded-full flex-1">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* BUNDLE SECTION */}
          <div className="hidden lg:block bg-[#F2F2F2] p-4 lg:p-6 mt-6">
            <div className="flex justify-center items-center mb-4">
              <SlArrowLeft size={20} className="text-gray-500 mr-4" />
              <h3 className="text-lg font-semibold">Beauty Bundle</h3>
              <SlArrowRight size={20} className="ml-4" />
            </div>

            <div className="flex gap-4 mb-4">
              <div className="text-center">
                <img
                  src={image22}
                  alt="UMF 20+"
                  className="h-20  bg-white rounded-lg"
                />
                <p className="mt-2 text-sm">UMF 20+</p>
                <select className="border rounded px-2 py-1 text-sm mt-1">
                  <option>250g</option>
                  <option>500g</option>
                </select>
              </div>
              <span className="text-xl my-auto">+</span>
              <div className="text-center">
                <img
                  src={image23}
                  alt="UMF 24+"
                  className="h-20  bg-white rounded-lg"
                />
                <p className="mt-2 text-sm">UMF 24+</p>
                <select className="border rounded px-2 py-1 text-sm mt-1">
                  <option>250g</option>
                  <option>500g</option>
                </select>
              </div>
              <span className="text-xl my-auto">+</span>
              <div className="text-center">
                <img
                  src={image24}
                  alt="Wooden Spoon"
                  className="h-20 bg-white rounded-lg"
                />
                <p className="mt-2 text-sm">Wooden Spoon</p>
              </div>

              <div className="text-center my-auto ml-auto flex-1">
                <div className="flex item-center gap-1">
                  <p className="text-gray-500 text-sm line-through mt-0.5">
                    $478.75 USD
                  </p>
                  <p className="text-md">
                    $430.88 USD{" "}
                    <span className="text-sm text-green-600">Save 10%</span>
                  </p>
                </div>
                <button className="bg-black text-white px-6 py-3 rounded-full mt-3 w-full">
                  ADD BUNDLE TO CART
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block mt-6 lg:mt-10">
            {/* Colourclub Points */}
            <div className="flex items-center gap-2">
              <img src={image25} alt="colourclub" className="h-10 w-10" />
              <p className="text-sm" style={{ color: "#313131" }}>
                Colourclub members earn up to{" "}
                <span className="text-orange-500 mx-2 p-2 rounded-full bg-white font-semibold">
                  56
                </span>{" "}
                reward points when buying this item. Sign up or log in
              </p>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-2 gap-4 my-6 lg:mt-10">
              <div>
                <p
                  className="uppercase text-sm text-[#313131] font-medium my-2"
                  style={{ letterSpacing: "1.5px" }}
                >
                  Delivery
                </p>
                <p className="text-[#313131] text-sm">
                  FREE DELIVERY ON ORDERS OVER $30
                </p>
              </div>
              <div>
                <p
                  className="uppercase text-sm text-[#313131] font-medium my-2"
                  style={{ letterSpacing: "1.5px" }}
                >
                  Estimated Delivery Date:
                </p>
                <p className="text-[#313131] text-sm">Jun 9 - Jun 13</p>
              </div>
            </div>

            {/* Afterpay */}
            <div className="border-y pt-3 pb-5">
              <p
                className="uppercase text-sm text-[#313131] font-medium my-2"
                style={{ letterSpacing: "1.5px" }}
              >
                after pay
              </p>
              <p className="flex items-center gap-2 text-sm text-[#313131]">
                or 4 interest-free payments of{" "}
                <span className="font-medium">$13.97</span> with
                <span className="bg-green-500 text-white font-bold px-2 py-1 rounded-sm">
                  $
                </span>
                <span className="font-semibold text-base">Afterpay</span>
                <AiOutlineExclamationCircle
                  className="text-gray-500"
                  size={20}
                />
              </p>
            </div>
          </div>

          {/* SCALE */}
          <div className="hidden lg:block mt-6 lg:mt-10">
            {/* UMF Scale */}
            <div>
              <h3
                className="uppercase text-sm mb-3 text-[#313131]"
                style={{ letterSpacing: "1.5px" }}
              >
                UMF™ Scale
              </h3>
              <div className="flex items-center gap-6 text-sm text-[#313131]">
                <span className="border-b-2 border-orange-400 pb-1">
                  UMF™ 10+
                </span>
                <span className="border-b-2 border-red-500 pb-1">UMF™ 15+</span>
                <span className="border-b-2 border-pink-500 pb-1">
                  UMF™ 20+
                </span>
                <span className="border-b-4 border-purple-600 font-bold text-purple-600 pb-1">
                  UMF™ 24+
                </span>
                <span className="border-b-2 border-sky-500 pb-1">UMF™ 26+</span>
                <span className="border-b-2 border-green-500 pb-1">
                  UMF™ 28+
                </span>
                <span className="border-b-2 border-blue-700 pb-1">
                  UMF™ 30+
                </span>
              </div>
            </div>

            {/* Taste Profile */}
            <div className="mt-6">
              <h3 className="uppercase text-sm text-[#313131] mb-5">
                Taste Profile
              </h3>
              <div className="relative w-full">
                {/* Gradient line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-orange-400 via-pink-500 via-purple-600 via-green-500 to-blue-700" />
                {/* Indicator dot */}
                <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-gray-800 rounded-full" />
                </div>
              </div>
              {/* Labels */}
              <div className="flex justify-between text-sm text-[#313131] mt-2">
                <span>Clean &amp; Intense</span>
                <span>Bold &amp; Intense</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
