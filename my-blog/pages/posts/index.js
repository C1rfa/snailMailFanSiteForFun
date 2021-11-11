import React from "react";
import { getAllPosts } from "./../../util/post-util";

import AllPosts from "./../../components/all-postst";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 120,
  };
}

export default AllPostsPage;
