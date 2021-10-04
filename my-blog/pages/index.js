import React from "react";

import Hero from "./../components/hero";
import FeaturedPosts from "./../components/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "first",
    title: "Lush",
    image: "lush-cover.jpg",
    excerpt: "first album",
    date: "2018-06-08",
  },
  {
    slug: "first",
    title: "Lush",
    image: "lush-cover.jpg",
    excerpt: "first album",
    date: "2018-06-08",
  },
  {
    slug: "first",
    title: "Lush",
    image: "lush-cover.jpg",
    excerpt: "first album",
    date: "2018-06-08",
  },
  {
    slug: "first",
    title: "Lush",
    image: "lush-cover.jpg",
    excerpt: "first album",
    date: "2018-06-08",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
