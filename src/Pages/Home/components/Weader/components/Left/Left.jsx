import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";

function Left() {
  return (
    <div className="bg-white py-10 px-5 rounded-2xl">
      <Top />
      <Bottom />
    </div>
  );
}

export default Left;
