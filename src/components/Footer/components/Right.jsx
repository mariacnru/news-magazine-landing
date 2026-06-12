import React from "react";
import Titr from "./Titr";
import { RiInstagramLine, RiMailFill, RiTwitterFill } from "react-icons/ri";

function Right() {
  return (
    <div className="bg-gray-100 md:bg-white lg:bg-gray-100 rounded-l-3xl">
      <ul className="grid xs:grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 p-10">
        <li>
          <Titr titr={"MEGA.news"} />
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            repellat aperiam? Cumque exercitationem vero nemo repellendus aut
            eaque iusto sit eveniet, adipisci corporis aliquid laudantium qui
            fugiat rem quo id. Commodi facere necessitatibus laudantium eum,
            voluptates similique voluptas reprehenderit vitae?
          </p>
        </li>
        <li>
          <Titr titr={"دسته بندی ها"} />
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-logo-color transition-colors cursor-pointer"
              >
                فرهنگ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-logo-color transition-colors cursor-pointer"
              >
                مد
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-logo-color transition-colors cursor-pointer"
              >
                غذا
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-logo-color transition-colors cursor-pointer"
              >
                تکنولوژی
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-logo-color transition-colors cursor-pointer"
              >
                ماشین ها
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-logo-color transition-colors cursor-pointer"
              >
                موسیقی
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Titr titr={"شبکه های اجتماعی"} />

          <div className="flex items-center gap-3">
            <button className="flex justify-center items-center gap-2 text-white bg-linear-30 from-[#ff7563] to-[#f55d9c] py-2 px-4 text-xs rounded-xl">
              <RiInstagramLine />
              <span>instagram</span>
            </button>

            <button className="flex justify-center items-center gap-2 text-white bg-linear-30 from-sky-300 to-sky-500 p-2 text-xs rounded-xl">
              <RiTwitterFill size={20} />
              <span>twitter</span>
            </button>
          </div>
        </li>
        <li>
          <Titr titr={"روزنامه"} />

          <label className="text-gray-500 flex justify-between items-center py-3 px-2 bg-white md:bg-gray-100 lg:bg-white rounded-xl">
            <input
              type="text"
              placeholder="ایمیل خود را بنویسید ..."
              className="text-xs focus:outline-0"
            />
            <RiMailFill />
          </label>
        </li>
      </ul>

      <div className="flex justify-between items-center text-xs bg-gray-200 p-2 rounded-l-md text-gray-700 my-10 ml-10">
        <div>
          <h3>Privacy Policy | Terms & Condations</h3>
        </div>
        <div>
          <h3>All Copyright (C) 2026 Recived</h3>
        </div>
      </div>
    </div>
  );
}

export default Right;
