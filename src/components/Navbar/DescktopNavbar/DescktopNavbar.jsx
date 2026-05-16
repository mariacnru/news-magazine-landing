import React from "react";
import List from "./components/List";
import Input from "./components/Input";

function DescktopNavbar() {
  return (
    <div className="hidden lg:flex w-full h-15 justify-between items-center">
      <Input />
      <List />
    </div>
  );
}

export default DescktopNavbar;
