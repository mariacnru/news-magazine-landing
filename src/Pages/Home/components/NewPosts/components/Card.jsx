import React from "react";

function Card({ title, description, newsImg, authorImg, author, date }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-3 bg-white p-3 rounded-md w-full shadow-[0px_0px_15px_gray] shadow-gray-200 hover:shadow-xl transition-shadow cursor-pointer">
      <div className="flex overflow-hidden rounded-xl">
        <img src={newsImg} alt="" className="rounded-xl- grow" />
      </div>
      <div className="space-y-5">
        <h3 className="text-sm font-DanaMedium">{title}</h3>
        <p className="line-clamp-2 text-xs text-gray-500">{description}</p>

        <div className="flex gap-2 bg-gray-100 p-3 rounded-xl">
          <img src={authorImg} alt="" className="rounded-xl" />
          <div className="flex flex-col justify-between text-xs">
            <span className="">{author}</span>
            <span className="">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
