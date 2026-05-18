import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Slider() {
  const prevItem = () => {
    console.log("prevItem");
  };

  const nextItem = () => {
    console.log("nextItem");
  };

  const data = [
    {
      id: 1,
      title: "هوش مصنوعی",
      descreption:
        "هوش مصنوعی یکی از مهم‌ترین فناوری‌های روز دنیاست که در تحلیل داده، پردازش زبان، خودروهای هوشمند و سیستم‌های خودکار کاربرد زیادی دارد.",
      img: "/Images/Hero/system.png",
    },
    // {
    //   id: 2,
    //   title: "خودروهای برقی",
    //   descreption:
    //     "خودروهای برقی با استفاده از باتری به جای سوخت‌های فسیلی کار می‌کنند و به دلیل کاهش آلودگی و هزینه نگهداری، محبوبیت زیادی پیدا کرده‌اند.",
    //   img: "/Images/Hero/system.png",
    // },
    // {
    //   id: 3,
    //   title: "اینترنت اشیا",
    //   descreption:
    //     "اینترنت اشیا به اتصال دستگاه‌های مختلف به اینترنت گفته می‌شود تا بتوانند داده‌ها را ارسال و دریافت کرده و به‌صورت هوشمند عمل کنند.",
    //   img: "/Images/Hero/system.png",
    // },
    // {
    //   id: 5,
    //   title: "ماشین‌های خودران",
    //   descreption:
    //     "ماشین‌های خودران با کمک سنسورها، دوربین‌ها و الگوریتم‌های پیشرفته می‌توانند بدون نیاز به راننده مسیر را تشخیص داده و حرکت کنند.",
    //   img: "/Images/Hero/system.png",
    // },
    // {
    //   id: 4,
    //   title: "رباتیک",
    //   descreption:
    //     "رباتیک ترکیبی از مهندسی، برنامه‌نویسی و هوش مصنوعی است که برای ساخت ماشین‌ها و ربات‌های هوشمند در صنعت و زندگی روزمره استفاده می‌شود.",
    //   img: "/Images/Hero/system.png",
    // },
  ];

  return (
    <div className="w-130 relative">
      <div className="w-full flex justify-between items-center absolute top-35 p-2 z-10">
        <div
          onClick={nextItem}
          className="bg-stone-100 p-2 rounded-xl text-gray-500"
        >
          <BiChevronRight size={20} />
        </div>
        <div
          onClick={prevItem}
          className="bg-stone-100 p-2 rounded-xl text-gray-500"
        >
          <BiChevronLeft size={20} />
        </div>
      </div>

      {data.map((item) => (
        <div key={item.id} className="relative overflow-hidden rounded-xl">
          <img src={item.img} alt="" />

          <div className="absolute bottom-0 backdrop-blur-xs bg-white/70 m-2 p-3 rounded-2xl">
            <h3 className="font-DanaDemiBold">{item.title}</h3>
            <p className="text-xs">{item.descreption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
