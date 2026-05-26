import React from "react";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import PopularPosts from "./components/PopularPosts/PopularPosts";
import NewPosts from "./components/NewPosts/NewPosts";
import TrendyPosts from "./components/TrendyPosts/TrendyPosts";
import Weader from "./components/Weader/Weader";

function Home() {
  return (
    <div>
      <Categories />
      <Hero />
      <PopularPosts />
      <NewPosts />
      <TrendyPosts />
      <Weader />
    </div>
  );
}

export default Home;
