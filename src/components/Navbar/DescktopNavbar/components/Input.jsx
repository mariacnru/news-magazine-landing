import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { RiBookmarkLine, RiSearch2Line } from "react-icons/ri";

function Input() {
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center gap-2">
      <div className="text-gray-500 bg-gray-200 p-2.5 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer">
        <RiBookmarkLine size={20} />
      </div>

      <label className="w-2xs p-1 text-xs flex justify-between items-center bg-gray-200 px-2.5 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">
            <FaEllipsisV />
          </span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="جستجوی هر چیزی"
            className="font-MorabbaLight p-2 focus:outline-0"
          />
        </div>

        <span className="">
          <RiSearch2Line size={15} />
        </span>
      </label>
    </div>
  );
}

export default Input;
