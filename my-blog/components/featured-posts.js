import React from "react";
import styles from "./featured-posts.module.css";

import PostsGrid from "./posts-grid";

const FeaturedPosts = (props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
