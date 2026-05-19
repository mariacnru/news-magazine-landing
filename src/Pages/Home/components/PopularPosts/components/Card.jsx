import React from "react";

function Card({ title, summary, author, date, image, authorImg }) {
  return (
    <div className="w-85 h-100 bg-white rounded-xl shadow-[0px_0px_13px_#d9d9d9] p-2 flex flex-col justify-between shrink-0 gap-5">
      <img src={image} alt="" className="rounded-2xl w-full h-fit" />
      <h3 className="text-nowrap font-MorabbaMedium">{title}</h3>
      <p className="text-sm text-gray-500">{summary}</p>
      <div className="bg-gray-100 p-4 rounded-xl">
        <div className="flex gap-3">
          <img src={authorImg} alt="" className="rounded-lg" />
          <div className="flex flex-col justify-between">
            <span className="text-sm">{author}</span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Card;
