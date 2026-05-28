import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // لایوت اصلی (هدر، فوتر و ...)
    children: [
      {
        index: true, // ✅ این میشه صفحه Home
        element: <Home />,
      },
    ],
  },
]);

export default router;
