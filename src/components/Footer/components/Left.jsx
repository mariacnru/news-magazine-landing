import React from "react";
import Titr from "./Titr";
import CommentBox from "./CommentBox";

function Left() {
  const comments = [
    {
      id: 1,
      name: "Ali",
      text: "گزارش‌های اخیر نشان‌دهنده روند صعودی در بازار سهام است.",
    },
    {
      id: 2,
      name: "Mary",
      text: "تحلیل‌ها حاکی از آن است که سیاست‌های جدید اقتصادی تاثیر مثبتی خواهد داشت.",
    },
    {
      id: 3,
      name: "Reza",
      text: "آخرین اخبار حاکی از توافقات جدید بین‌المللی در حوزه انرژی است.",
    },
    {
      id: 4,
      name: "Sara",
      text: "جامعه علمی نسبت به یافته‌های جدید در زمینه هوش مصنوعی ابراز امیدواری کرده است.",
    },
  ];

  return (
    <div className="hidden lg:grid grid-cols-2 gap-5 py-10 px-5">
      <div className="">
        <Titr titr={"کامنت های جدید"} />

        <div className="h-full flex flex-col gap-5">
          {comments.map((comment) => (
            <CommentBox key={comment.id} title={comment.name} description={comment.text} />
          ))}
        </div>
      </div>
      <div className="">
        <Titr titr={"دنبال کردن در اینستاگرام"} />

        <div className="grid grid-cols-3 gap-5">
          <div className="w-20 h-20 bg-sky-500 rounded-lg"></div>
          <div className="w-20 h-20 bg-logo-color rounded-lg"></div>
          <div className="w-20 h-20 bg-sky-500 rounded-lg"></div>
          <div className="w-20 h-20 bg-logo-color rounded-lg"></div>
          <div className="w-20 h-20 bg-sky-500 rounded-lg"></div>
          <div className="w-20 h-20 bg-logo-color rounded-lg"></div>
          <div className="w-20 h-20 bg-sky-500 rounded-lg"></div>
          <div className="w-20 h-20 bg-logo-color rounded-lg"></div>
          <div className="w-20 h-20 bg-sky-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Left;
