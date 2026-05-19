import React from "react";
import Card from "./components/Card";
import Slider from "./components/Slider";

function Hero() {
  const data = [
    {
      id: 1,
      title: "چطور موسیقی دنس (رقص) بسازیم؟",
      img: "/Images/Hero/femail.png",
      descreption:
        "اگه با بیت‌تورنت کار می‌کنی و دنبال راه امن گشتنی، این روش رو امتحان کن. هر دو سایت معروف بیت‌تورنت، یعنی The Pirate Bay و KickAssTorrents، یه سری علامت دارن که نشون می‌ده کدوم فایل‌ها رو کاربراشون تأیید کرده. با دانلود از این منابع، ریسک کمتری داری",
    },
    {
      id: 2,
      title: "راهنمای رانندگی ایمن",
      img: "/Images/Hero/car.png",
      descreption:
        "چه حس خوبی آدم وقتی توی جاده باز و خلوت رانندگی می‌کنه! اما اگه تازه‌کار باشی، شاید یه کم استرس بگیری وقتی پشت فرمون می‌شینی. اشکالی نداره. درسته که ممکنه هر کسی دچار حادثه بشه، ولی کارهایی هست که می‌تونی انجام بدی تا رانندگیت ایمن‌تر بشه و احتمال اتفاق‌های ناخواسته رو کم کنی.",
    },
  ];

  return (
    <div className="flex justify-center gap-2 mt-5">
      <div className="hidden lg:flex gap-2">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      <Slider />
    </div>
  );
}

export default Hero;
