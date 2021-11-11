import React from "react";
import { getFeaturePosts } from "./../util/post-util";

import Hero from "./../components/hero";
import FeaturedPosts from "./../components/featured-posts";

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturePosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 120,
  };
}

export default HomePage;
