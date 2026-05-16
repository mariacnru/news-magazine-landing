import React from "react";
import MobileNavbr from "./MobileNavbar/MobileNavbr";
import DescktopNavbar from "./DescktopNavbar/DescktopNavbar";
import TabletNavbar from "./TabletNavbar/TabletNavbar";

function Navbar() {
  return (
    <div className="w-full">
      <DescktopNavbar />
      <TabletNavbar />
      <MobileNavbr />
    </div>
  );
}

export default Navbar;
