import React from "react";

function Card({ title, descreption, img }) {
  return (
    <div className="w-60 rounded-xl overflow-hidden relative flex shrink-0">
      <img src={img} alt="" className="h-full" />
      <div className="absolute backdrop-filter backdrop-blur-lg bg-white/70 bottom-0 m-2 rounded-xl p-2">
        <h2 className="line-clamp-1 font-DanaMedium">{title}</h2>
        <p className="line-clamp-1 text-xs pt-1">{descreption}</p>
      </div>
    </div>
  );
}

export default Card;
