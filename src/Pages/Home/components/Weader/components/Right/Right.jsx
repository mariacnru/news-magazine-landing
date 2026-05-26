import React from "react";

function Right() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-5">
      <div className="w-full bg-[linear-gradient(180deg,#fc4508ed,#ffcc00ee),url(/Images/Weader/1.svg)] bg-cover bg-center p-5 rounded-2xl text-white">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="block font-DanaDemiBold">Ankara</span>
            <span className="text-sm">Tuesday 10:00 AM</span>
          </div>
          <div className="*:block *:text-end *:text-sm">
            <span>precipitation: 2%</span>
            <span>Humidity: 70%</span>
            <span>Wind: 3 Km/H</span>
          </div>
        </div>
        <div className="flex justify-center items-center h-30">
          <h3 className="text-5xl">16</h3>
          <img src="/Images/Weader/WeaderIcons/1.svg" alt="" />
        </div>
      </div>

      <div className="w-full bg-[linear-gradient(180deg,#007bffee,#00ddffee),url(/Images/Weader/2.svg)] bg-cover bg-center p-5 rounded-2xl text-white">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="block font-DanaDemiBold">Alaska</span>
            <span className="text-sm">Tuesday 10:00 AM</span>
          </div>
          <div className="*:block *:text-end *:text-sm">
            <span>precipitation: 2%</span>
            <span>Humidity: 70%</span>
            <span>Wind: 3 Km/H</span>
          </div>
        </div>
        <div className="flex justify-center items-center h-30">
          <h3 className="text-5xl">16</h3>
          <img src="/Images/Weader/WeaderIcons/1.svg" alt="" />
        </div>
      </div>

      <div className="w-full bg-[linear-gradient(180deg,#02ad3bee,#00ff55ee),url(/Images/Weader/3.svg)] bg-cover bg-center p-5 rounded-2xl text-white">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="block font-DanaDemiBold">Berlin</span>
            <span className="text-sm">Tuesday 10:00 AM</span>
          </div>
          <div className="*:block *:text-end *:text-sm">
            <span>precipitation: 2%</span>
            <span>Humidity: 70%</span>
            <span>Wind: 3 Km/H</span>
          </div>
        </div>
        <div className="flex justify-center items-center h-30">
          <h3 className="text-5xl">16</h3>
          <img src="/Images/Weader/WeaderIcons/1.svg" alt="" />
        </div>
      </div>

      <div className="w-full bg-[linear-gradient(180deg,#7c02adee,#b700ffee),url(/Images/Weader/4.svg)] bg-cover bg-center p-5 rounded-2xl text-white">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="block font-DanaDemiBold">Paris</span>
            <span className="text-sm">Tuesday 10:00 AM</span>
          </div>
          <div className="*:block *:text-end *:text-sm">
            <span>precipitation: 2%</span>
            <span>Humidity: 70%</span>
            <span>Wind: 3 Km/H</span>
          </div>
        </div>
        <div className="flex justify-center items-center h-30">
          <h3 className="text-5xl">16</h3>
          <img src="/Images/Weader/WeaderIcons/1.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Right;
