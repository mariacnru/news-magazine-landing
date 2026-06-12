import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import navbar from "../../../../Data/Navbar";
import { BiChevronDown } from "react-icons/bi";

function Menue({ menueFlag, setMenueFlag }) {
  const [pagesFlag, setPagesFlag] = useState(false);
  const [categoriesFlag, setCategoriesFlag] = useState(false);

  return (
    <div
      className={`bg-white h-screen w-full fixed top-0 right-0 left-0 pt-3 px-8 transition-all duration-500 ease-in-out z-20 ${
        menueFlag ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
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
              size={20}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              pagesFlag ? "max-h-40" : "max-h-0"
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
              size={20}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              categoriesFlag ? "max-h-40" : "max-h-0"
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
