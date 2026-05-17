import React from "react";
import { RiMenuLine } from "react-icons/ri";
import Input from "./Input";

function Top({ setMenueFlag }) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div
        onClick={() => setMenueFlag(true)}
        className="flex justify-center items-center bg-stone-100 p-2 rounded-md cursor-pointer"
      >
        <RiMenuLine />
      </div>

      <Input />
    </div>
  );
}

export default Top;
