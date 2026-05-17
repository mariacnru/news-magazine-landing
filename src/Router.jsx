import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Categorie from "./pages/Categorie/Categorie";
import Single from "./pages/Single/Single";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // لایوت اصلی (هدر، فوتر و ...)
    children: [
      {
        index: true, // ✅ این میشه صفحه Home
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "categories",
        element: <Categorie />,
      },
      {
        path: "categories/:id",
        element: <Single />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
