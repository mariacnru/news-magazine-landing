import React, { useRef } from "react";
import categories from "../../../../Data/Categories";
import CategoryCard from "./components/CategoryCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Categories() {
  const scrollContainerRef = useRef(null);

  const scrollAmount = 150;

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="lg:inline hidden font-MorabbaMedium w-full">
      <div className="relative mx-4 md:mx-8 lg:mx-25">
        {/* کانتینر اسکرول‌شونده */}
        <div
          ref={scrollContainerRef}
          className="categories bg-linear-90 from-purple-500  to-logo-color py-2 px-10 rounded-md flex gap-5 mt-5 overflow-x-scroll scrollbar-hide"
        >
          {categories.map((category, id) => (
            <CategoryCard key={id} {...category} />
          ))}
        </div>

        {/* دکمه‌های ناوبری - الان داخل relative قرار دارند */}
        <div className="flex justify-between items-center absolute top-0 inset-x-0 h-full pointer-events-none">
          <div
            onClick={handleScrollRight}
            className="bg-stone-50 text-gray-500 w-fit h-full p-2 flex justify-center items-center cursor-pointer z-10 pointer-events-auto hover:bg-stone-300 transition-colors"
          >
            <BiChevronRight size={24} />
          </div>

          <div
            onClick={handleScrollLeft}
            className="bg-stone-50 text-gray-500 w-fit h-full p-2 flex justify-center items-center cursor-pointer z-10 pointer-events-auto hover:bg-stone-300 transition-colors"
          >
            <BiChevronLeft size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
