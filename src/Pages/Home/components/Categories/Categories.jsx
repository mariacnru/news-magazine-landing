import React, { useRef } from "react";
import categories from "../../../../Data/Categories";
import CategoryCard from "./components/CategoryCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Categories() {
  const scrollContainerRef = useRef(null);

  const scrollAmount = 150; // مقدار اسکرول به پیکسل

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount, // منفی برای اسکرول به چپ
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount, // مثبت برای اسکرول به راست
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative lg:inline hidden font-MorabbaMedium">
      <div
        ref={scrollContainerRef} // ref رو اینجا اضافه کردیم
        className="categories bg-stone-100 py-2 px-10 rounded-md flex gap-5 mt-5 overflow-x-scroll scrollbar-hide" // scrollbar-hide رو برای مخفی کردن اسکرول‌بار اضافه کردم (نیاز به نصب پکیج scrollbar-hide یا تنظیمات CSS داره)
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>

      <div
        onClick={handleScrollLeft}
        className="bg-stone-100 w-fit p-2 rounded-md absolute top-0 left-0 h-full flex justify-center items-center cursor-pointer z-10" // cursor-pointer و z-10 برای ظاهر بهتر
      >
        <BiChevronLeft size={20} />
      </div>

      <div
        onClick={handleScrollRight}
        className="bg-stone-100 w-fit p-2 rounded-md absolute top-0 right-0 h-full flex justify-center items-center cursor-pointer z-10" // cursor-pointer و z-10 برای ظاهر بهتر
      >
        <BiChevronRight size={20} />
      </div>
    </div>
  );
}

export default Categories;
