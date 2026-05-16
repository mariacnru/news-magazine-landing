import React from "react";
import { RiBookmarkLine, RiMenuLine } from "react-icons/ri";

function Top({ setMenueFlag }) {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-stone-100 p-2 rounded-md">
        <RiBookmarkLine />
      </div>

      <div className="flex items-center gap-5">
        <span className="text-logo-color font-semibold text-sm mt-1">
          MAGA.news
        </span>
        <div
          onClick={() => setMenueFlag(true)}
          className="flex justify-center items-center bg-stone-100 p-2 rounded-md cursor-pointer"
        >
          <RiMenuLine />
        </div>
      </div>
    </div>
  );
}

export default Top;
