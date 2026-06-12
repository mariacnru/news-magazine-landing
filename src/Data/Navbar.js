const navbar = [
  {
    id: 1,

    title: "درباره ما",
  },
  { id: 2, title: "ارتباط با ما" }, // Added 'to'
  {
    id: 3,

    title: "صفحات",
    submenue: [
      { id: 1, title: "صفحه ساب منو" },
      { id: 2, title: "صفحه ساب منو" },
      { id: 3, title: "صفحه ساب منو" },
    ],
  }, // Added 'to'
  {
    id: 4,

    title: "دسته بندی ها",
    submenue: [
      { id: 1, title: "دسته بندی ساب منو" },
      { id: 2, title: "دسته بندی ساب منو" },
      { id: 3, title: "دسته بندی ساب منو" },
    ],
  },
  { id: 5, title: "Mega.news" }, // Added 'to'
];

export default navbar;
