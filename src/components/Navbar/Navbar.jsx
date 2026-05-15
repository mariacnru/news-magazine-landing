import React from "react";
import MobileNavbr from "./MobileNavbar/MobileNavbr";
import DescktopNavbar from "./DescktopNavbar/DescktopNavbar";

function Navbar() {
  return (
    <div className="w-full">
      <DescktopNavbar />
      <MobileNavbr />
    </div>
  );
}

export default Navbar;
