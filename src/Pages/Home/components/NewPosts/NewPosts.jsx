import React, { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import newPosts from "../../../../Data/NewPosts";
import Card from "./components/Card";
import Slider from "./components/Slider";

function NewPosts() {
  const [data, setData] = useState(newPosts);
  const scrollContainerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const nextItem = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount - 50,
        behavior: "smooth",
      });
    }
  };

  const prevItem = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount + 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-25 bg-white py-5">
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-logo-color rounded-full"></div>
          <h2 className="font-MorabbaMedium">پست های جدید</h2>
        </div>

        <div className="bg-gray-200 text-xs hidden sm:flex items-center gap-2 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors cursor-pointer">
          <span>نمایش همه</span>
          <BiChevronLeft size={15} />
        </div>

        <div className="sm:hidden flex gap-5">
          <div onClick={prevItem} className="bg-gray-100 p-2 rounded-md">
            <BiChevronRight size={20} />
          </div>
          <div onClick={nextItem} className="bg-gray-100 p-2 rounded-md">
            <BiChevronLeft size={20} />
          </div>
        </div>
      </div>

      <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        {data.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>

      <Slider
        ref={scrollContainerRef}
        setScrollAmount={setScrollAmount}
        data={data}
      />
    </div>
  );
}

export default NewPosts;
