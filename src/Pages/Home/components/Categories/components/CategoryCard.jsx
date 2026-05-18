import React from "react";

function CategoryCard({ title, bgColor }) {
  return (
    <div className={`${bgColor} py-2 px-8 text-xs rounded-lg`}>
      <span>{title}</span>
    </div>
  );
}

export default CategoryCard;
