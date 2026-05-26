import React from "react";

function CommentBox({ title, description }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <span className="block font-DanaDemiBold">{title}</span>
      <span className="text-xs text-gray-500 line-clamp-1">{description}</span>
    </div>
  );
}

export default CommentBox;
