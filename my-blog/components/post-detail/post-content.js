import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import PostHeader from "./post-header";
import styles from "./post-content.module.css";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown plugins={[gfm]}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
