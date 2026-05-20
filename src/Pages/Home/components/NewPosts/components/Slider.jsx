import React, { useEffect, useRef } from "react";

function Slider({ data, ref, setScrollAmount }) {
  const divRef = useRef(null);

  useEffect(() => {
    const element = divRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setScrollAmount(width);
      }
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [setScrollAmount]);

  return (
    <div
      ref={ref}
      className="newPosts my-10 sm:hidden flex gap-5 *:shrink-0 overflow-x-scroll py-5 px-2"
    >
      {data.map((post) => (
        <div
          ref={divRef}
          key={post.id}
          className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-3 bg-white p-3 rounded-md w-full shadow-md shadow-gray-200 sm:hover:shadow-xl transition-shadow cursor-pointer"
        >
          <div className="flex overflow-hidden rounded-xl">
            <img src={post.newsImg} alt="" className="rounded-xl- grow" />
          </div>
          <div className="space-y-5">
            <h3 className="text-sm font-DanaMedium">{post.title}</h3>
            <p className="line-clamp-2 text-xs text-gray-500">
              {post.description}
            </p>

            <div className="flex gap-2 bg-gray-100 p-3 rounded-xl">
              <img src={post.authorImg} alt="" className="rounded-xl" />
              <div className="flex flex-col justify-between text-xs">
                <span className="">{post.author}</span>
                <span className="">{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
