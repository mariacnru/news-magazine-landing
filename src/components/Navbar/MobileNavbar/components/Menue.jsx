import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import navbar from "../../../../Data/Navbar";
import { NavLink } from "react-router";
import { BiChevronDown } from "react-icons/bi";

function Menue({ menueFlag, setMenueFlag }) {
  const [pagesFlag, setPagesFlag] = useState(false);
  const [categoriesFlag, setCategoriesFlag] = useState(false);

  return (
    <div
      className={`${menueFlag ? "top-0" : "-top-84"} bg-white h-screen w-full pt-3 px-8 absolute right-0 left-0 transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        <div
          onClick={() => setMenueFlag(false)}
          className="flex justify-center items-center bg-stone-100 p-2 rounded-md cursor-pointer"
        >
          <RiCloseLine />
        </div>
        <span className="text-logo-color font-semibold text-sm">MAGA.news</span>
      </div>

      <ul className="text-sm font-MorabbaLight mt-2 *:font-semibold *:p-2 *:bg-stone-100 *:rounded-md space-y-2">
        <li>درباره ما</li>
        <li>ارتباط با ما</li>
        <li className="w-full">
          <div
            onClick={() => setPagesFlag(!pagesFlag)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span>صفحات</span>
            <BiChevronDown
              className={`transition-transform duration-300 ${
                pagesFlag ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              pagesFlag ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <ul className="space-y-2 pr-4 text-sm text-gray-600 font-light">
              <li className="">
                <span className="hover:text-logo-color transition-colors cursor-pointer">
                  صفحه ساب منو
                </span>
              </li>
              <li className="">
                <span className="hover:text-logo-color transition-colors cursor-pointer">
                  صفحه ساب منو
                </span>
              </li>
              <li className="">
                <span className="hover:text-logo-color transition-colors cursor-pointer">
                  صفحه ساب منو
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li className="w-full">
          <div
            onClick={() => setCategoriesFlag(!categoriesFlag)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span>دسته بندی</span>
            <BiChevronDown
              className={`transition-transform duration-300 ${
                categoriesFlag ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              categoriesFlag ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <ul className="space-y-2 pr-4 text-sm text-gray-600 font-light">
              <li className="">
                <span className="hover:text-logo-color transition-colors cursor-pointer">
                  دسته بندی ساب منو
                </span>
              </li>
              <li className="">
                <span className="hover:text-logo-color transition-colors cursor-pointer">
                  دسته بندی ساب منو
                </span>
              </li>
              <li className="">
                <span className="hover:text-logo-color transition-colors cursor-pointer">
                  دسته بندی ساب منو
                </span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menue;
