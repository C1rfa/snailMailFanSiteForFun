import React from "react";
import styles from "./posts-grid.module.css";

import PostItem from "./post-item.js";

const PostsGrid = ({ posts }) => {
  const items = posts.map((item) => <PostItem key={item.slug} post={item} />);

  return <ul className={styles.grid}>{items}</ul>;
};

export default PostsGrid;
