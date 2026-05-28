import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router";
import navbar from "../../../../Data/Navbar";

function List() {
  return (
    <ul className="flex h-full items-center gap-7 text-sm font-MorabbaLight">
      {navbar.map((item) => (
        <li key={item.id} className="relative group pb-2">
          <NavLink className="hover:text-logo-color transition-colors">
            <span
              className={`${
                item.title === "Mega.news"
                  ? "text-logo-color font-semibold"
                  : ""
              } ${
                item.title === "دسته بندی ها" || item.title === "صفحات"
                  ? "flex items-center gap-1"
                  : ""
              }`}
            >
              {item.title}

              {item.submenue && (
                <span className="inline text-gray-500">
                  <BiChevronDown size={15} />
                </span>
              )}
            </span>
          </NavLink>

          {item.submenue && (
            <ul className="border-t-4 border-custom-color font-Dana absolute top-full right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white shadow-md rounded-b-md min-w-45 p-2 z-50 transition-opacity">
              {item.submenue.map((sub) => (
                <li
                  key={sub.id}
                  className="px-3 py-2 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                >
                  {sub.title}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default List;
