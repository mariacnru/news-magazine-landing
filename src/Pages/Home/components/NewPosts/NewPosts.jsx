import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import newPosts from "../../../../Data/NewPosts";
import Card from "./components/Card";

function NewPosts() {
  const [data, setData] = useState(newPosts);

  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-logo-color rounded-full"></div>
          <h2 className="font-MorabbaMedium">پست های جدید</h2>
        </div>

        <div className="bg-gray-200 text-xs flex items-center gap-2 text-gray-700 py-2 px-4 rounded-md cursor-pointer">
          <span>نمایش همه</span>
          <BiChevronLeft size={15} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        {data.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default NewPosts;
