import React from "react";
import List from "./components/List";
import Input from "./components/Input";

function DescktopNavbar() {
  return (
    <div className="hidden lg:flex mt-7 mx-25">
      <div className="mx-auto flex w-full h-15 justify-between items-center">
        <Input />
        <List />
      </div>
    </div>
  );
}

export default DescktopNavbar;
