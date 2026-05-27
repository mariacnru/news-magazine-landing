import React, { useRef } from "react";
import Card from "./components/Card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function TrendyPosts() {
  const trendyPosts = [
    {
      id: 1,
      title: "افزایش قیمت جهانی نفت و تاثیر آن بر اقتصاد",
      summary:
        "با افزایش تنش‌ها در بازار جهانی انرژی، قیمت نفت به بالاترین سطح خود در شش ماه اخیر رسید.",
      category: "اقتصاد",
      authorImg: "/Images/Authors/2.svg",

      author: "رضا محمدی",
      views: 9850,
      comments: 64,
      date: "5 اکتبر 2022",
      image: "/Images/TrendyPosts/1.webp",
    },
    {
      id: 2,
      title: "هوش مصنوعی چگونه بازار کار را تغییر می‌دهد؟",
      summary:
        "کارشناسان معتقدند پیشرفت سریع هوش مصنوعی می‌تواند ساختار بسیاری از مشاغل را در سال‌های آینده دگرگون کند.",
      category: "تکنولوژی",
      authorImg: "/Images/Authors/1.svg",
      author: "مریم احمدی",
      views: 18730,
      comments: 142,
      date: "22 سپتامبر 2022",
      image: "/Images/TrendyPosts/2.webp",
    },
    {
      id: 3,
      title: "افزایش قیمت جهانی نفت و تاثیر آن بر اقتصاد",
      summary:
        "با افزایش تنش‌ها در بازار جهانی انرژی، قیمت نفت به بالاترین سطح خود در شش ماه اخیر رسید.",
      category: "اقتصاد",
      authorImg: "/Images/Authors/2.svg",

      author: "رضا محمدی",
      views: 9850,
      comments: 64,
      date: "5 اکتبر 2022",
      image: "/Images/TrendyPosts/3.webp",
    },
    {
      id: 4,
      title: "معرفی بهترین گوشی‌های هوشمند سال 2026",
      summary:
        "در این گزارش نگاهی داریم به قدرتمندترین و محبوب‌ترین گوشی‌های هوشمند معرفی‌شده در سال جاری.",
      category: "دیجیتال",
      authorImg: "/Images/Authors/3.svg",

      author: "سارا کریمی",
      views: 21340,
      comments: 198,
      date: "12 نوامبر 2022",
      image: "/Images/TrendyPosts/4.webp",
    },
    {
      id: 5,
      title: "پیشرفت‌های جدید در صنعت رباتیک پزشکی",
      summary:
        "ربات‌های جراحی با دقت بالا در حال تغییر شیوه درمان بیماران در بیمارستان‌های پیشرفته هستند.",
      category: "علم و فناوری",
      authorImg: "/Images/Authors/4.svg",

      author: "حسین تقوی",
      views: 11200,
      comments: 73,
      date: "5 اکتبر 2022",
      image: "/Images/TrendyPosts/1.webp",
    },
    {
      id: 6,
      title: "معرفی بهترین گوشی‌های هوشمند سال 2026",
      summary:
        "در این گزارش نگاهی داریم به قدرتمندترین و محبوب‌ترین گوشی‌های هوشمند معرفی‌شده در سال جاری.",
      category: "دیجیتال",
      authorImg: "/Images/Authors/2.svg",

      author: "سارا کریمی",
      views: 21340,
      comments: 198,
      date: "12 نوامبر 2022",
      image: "/Images/TrendyPosts/2.webp",
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollAmount = 200; // مقدار اسکرول به پیکسل

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
    <div className="my-20 mx-4 md:mx-8 lg:mx-25 relative overflow-hidden pl-10">
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-logo-color rounded-full"></div>
          <h2 className="font-MorabbaMedium">پست های ترند</h2>
        </div>

        <div className="flex gap-2 *:bg-gray-100 sm:*:bg-gray-200 *:p-2 *:rounded-md *:cursor-pointer *:hover:bg-gray-200/50 *:transition-colors">
          <div onClick={handleScrollRight}>
            <BiChevronRight size={20} />
          </div>
          <div onClick={handleScrollLeft}>
            <BiChevronLeft size={20} />
          </div>
        </div>
      </div>

      <div className="bg-white md:bg-gray-100 lg:bg-white w-2xs h-full absolute -left-50 blur-xl"></div>

      <div
        ref={scrollContainerRef}
        className="popularPosts flex justify-between gap-5 overflow-x-scroll mt-10 p-3"
      >
        {trendyPosts.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default TrendyPosts;
