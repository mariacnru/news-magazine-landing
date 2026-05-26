import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false); // State for fade animation

  const data = [
    {
      id: 1,
      title: "هوش مصنوعی",
      descreption:
        "هوش مصنوعی یکی از مهم‌ترین فناوری‌های روز دنیاست که در تحلیل داده، پردازش زبان، خودروهای هوشمند و سیستم‌های خودکار کاربرد زیادی دارد.",
      img: "/Images/Hero/system.png",
    },
    {
      id: 2,
      title: "خودروهای برقی",
      descreption:
        "خودروهای برقی با استفاده از باتری به جای سوخت‌های فسیلی کار می‌کنند و به دلیل کاهش آلودگی و هزینه نگهداری، محبوبیت زیادی پیدا کرده‌اند.",
      img: "/Images/Papularposts/1.png",
    },
    {
      id: 3,
      title: "اینترنت اشیا",
      descreption:
        "اینترنت اشیا به اتصال دستگاه‌های مختلف به اینترنت گفته می‌شود تا بتوانند داده‌ها را ارسال و دریافت کرده و به‌صورت هوشمند عمل کنند.",
      img: "/Images/Papularposts/2.png",
    },
    {
      id: 5,
      title: "ماشین‌های خودران",
      descreption:
        "ماشین‌های خودران با کمک سنسورها، دوربین‌ها و الگوریتم‌های پیشرفته می‌توانند بدون نیاز به راننده مسیر را تشخیص داده و حرکت کنند.",
      img: "/Images/Papularposts/3.png",
    },
    {
      id: 4,
      title: "رباتیک",
      descreption:
        "رباتیک ترکیبی از مهندسی، برنامه‌نویسی و هوش مصنوعی است که برای ساخت ماشین‌ها و ربات‌های هوشمند در صنعت و زندگی روزمره استفاده می‌شود.",
      img: "/Images/Papularposts/4.png",
    },
  ];

  const prevItem = () => {
    //در اینجا prev همان ایندکس آیتم فعلی است.

    // شرط ( prev === 0 ): آیا ما در حال حاضر روی اولین آیتم (ایندکس ۰) هستیم؟
    // اگر بله (data.length - 1): چون عقب‌تر از صفر نداریم، باید به آخرین آیتم لیست بپریم. ایندکس آخرین آیتم همیشه یکی کمتر از طول لیست است (length - 1).
    // اگر خیر (prev - 1): ما در میان لیست هستیم، پس فقط کافیست یک واحد از ایندکس فعلی کم کنیم تا به آیتم قبلی برویم.

    setFade(true); // Start fade out
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
      setFade(false); // Start fade in after index change
    }, 300); // Match duration of transition
  };

  const nextItem = () => {
    // شرط ( prev === data.length - 1 ): آیا ما در حال حاضر روی آخرین آیتم هستیم؟
    // اگر بله (0): چون جلوتر از آخرین آیتم نداریم، باید به اولین آیتم (ایندکس ۰) برگردیم تا حلقه تکرار شود.
    // اگر خیر (prev + 1): ما هنوز به آخر نرسیده‌ایم، پس یک واحد به ایندکس فعلی اضافه می‌کنیم تا به آیتم بعدی برویم.

    setFade(true); // Start fade out
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      setFade(false); // Start fade in after index change
    }, 300); // Match duration of transition
  };

  const currentItem = data[currentIndex];

  return (
    <div className="relative overflow-hidden w-[94dvw] lg:w-134 lg:h-81.5 shrink-0 lg:shrink">
      {/* buttons */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between items-center px-2 z-10">
        <div
          onClick={nextItem}
          className="bg-stone-100 p-2 rounded-xl text-gray-500 cursor-pointer"
        >
          <BiChevronRight size={20} />
        </div>

        <div
          onClick={prevItem}
          className="bg-stone-100 p-2 rounded-xl text-gray-500 cursor-pointer"
        >
          <BiChevronLeft size={20} />
        </div>
      </div>

      {/* single item display with fade animation */}
      <div className="w-full h-full">
        <div
          className={`relative overflow-hidden rounded-xl flex flex-col justify-center items-center w-full h-full transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={currentItem.img}
            alt={currentItem.title} // Added alt text for accessibility
            className="w-full h-full object-cover"
          />

          <div className="slider-content w-11/12 m-4 absolute bottom-0 backdrop-blur-xs bg-white/70 p-3 rounded-2xl">
            <h3 className="font-DanaDemiBold">{currentItem.title}</h3>
            <p className="text-xs line-clamp-1 sm:line-clamp-2">
              {currentItem.descreption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
