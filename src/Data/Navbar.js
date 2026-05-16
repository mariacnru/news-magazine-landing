const navbar = [
  {
    id: 1,
    to: "/about-us",
    title: "درباره ما",
  },
  { id: 2, to: "/contact-us", title: "ارتباط با ما" }, // Added 'to'
  {
    id: 3,
    to: "/pages",
    title: "صفحات",
    submenue: [
      { id: 1, title: "صفحه ساب منو" },
      { id: 2, title: "صفحه ساب منو" },
      { id: 3, title: "صفحه ساب منو" },
    ],
  }, // Added 'to'
  {
    id: 4,
    to: "/categories",
    title: "دسته بندی ها",
    submenue: [
      { id: 1, title: "دسته بندی ساب منو" },
      { id: 2, title: "دسته بندی ساب منو" },
      { id: 3, title: "دسته بندی ساب منو" },
    ],
  },
  { id: 5, to: "/", title: "Mega.news" }, // Added 'to'
];

export default navbar;
