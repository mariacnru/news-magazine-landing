import React from "react";

function Top() {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <span className="block text-2xl font-DanaDemiBold">تهران</span>
        <span className="text-sm text-gray-500">سه شنیه</span>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col items-center *:text-sm *:text-gray-500">
          <span>precipitation: 2%</span>
          <span>Humidity: 70%</span>
          <span>Wind: 3 Km/H</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-start">
            <span className="">c</span>
            <span className="text-3xl">29</span>
          </div>
          <img
            src="/news-magazine-landing/Images/Weader/WeaderIcons/1.svg"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
