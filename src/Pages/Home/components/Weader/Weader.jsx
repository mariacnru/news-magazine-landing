import React from "react";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";

function Weader() {
  return (
    <div className="flex justify-center items-center bg-gray-100 md:bg-white lg:bg-gray-100 py-15 px-30 my-10">
      {/* <Left /> */}
      <Right />
    </div>
  );
}

export default Weader;
