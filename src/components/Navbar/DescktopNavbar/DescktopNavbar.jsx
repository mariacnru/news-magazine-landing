import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router";

function DescktopNavbar() {
  return (
    <div className="md:flex w-full mt-7">
      <ul className="flex gap-7 text-sm">
        <NavLink to={"about-us"}>درباره ما</NavLink>
        <NavLink>ارتباط با ما</NavLink>
        <NavLink className="flex items-center gap-1">
          صفحات
          <span className="text-gray-500">
            <BiChevronDown size={15} />
          </span>
        </NavLink>
        <NavLink to={"categories"} className="flex items-center gap-1">
          دسته بندی ها
          <span className="text-gray-500">
            <BiChevronDown size={15} />
          </span>
        </NavLink>
        <NavLink to={"/"} className="text-logo-color font-semibold">
          Mega.news
        </NavLink>
      </ul>
    </div>
  );
}

export default DescktopNavbar;
