import React from "react";

function CategoryCard({ title, bgColor }) {
  return (
    <div className="border border-white/30 bg-white/30 backdrop-blur-lg py-2 px-8 text-xs rounded-lg">
      <span>{title}</span>
    </div>
  );
}

export default CategoryCard;
