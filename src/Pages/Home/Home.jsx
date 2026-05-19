import React from "react";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import PopularPosts from "./components/PopularPosts/PopularPosts";
import NewPosts from "./components/NewPosts/NewPosts";

function Home() {
  return (
    <div>
      <Categories />
      <Hero />
      <PopularPosts />
      <NewPosts />
    </div>
  );
}

export default Home;
