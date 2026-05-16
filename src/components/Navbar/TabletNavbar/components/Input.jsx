import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";

function Input() {
  const [value, setValue] = useState("");

  return (
    <label className="w-full mt-2 p-1 text-xs flex justify-between items-center bg-gray-100 px-2 rounded-lg">
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
  );
}

export default Input;
