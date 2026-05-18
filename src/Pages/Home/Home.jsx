import React from "react";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import PopularPosts from "./components/PopularPosts/PopularPosts";

function Home() {
  return (
    <div>
      <Categories />
      <Hero />
      <PopularPosts />
    </div>
  );
}

export default Home;
