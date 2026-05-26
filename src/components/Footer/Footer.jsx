import React from "react";
import Left from "./components/Left";
import Right from "./components/Right";

function Footer() {
  return (
    <div className="grid lg:grid-cols-2">
      <Right />
      <Left />
    </div>
  );
}

export default Footer;
