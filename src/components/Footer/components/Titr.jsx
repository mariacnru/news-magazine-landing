import React from "react";

function Titr({ titr }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <div className="bg-logo-color h-3 w-1 rounded-full"></div>
      <h3 className="font-MorabbaMedium">{titr}</h3>
    </div>
  );
}

export default Titr;
