import React from "react";
import { getPostData, getPostFiles } from "./../../util/post-util";
import PostContent from "./../../components/post-detail/post-content";

const PostDetailPage = ({ post }) => {
  return <PostContent post={post} />;
};

export function getStaticProps({ params }) {
  const data = getPostData(params.slug);

  return {
    props: {
      post: data,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles().map((item) => item.replace(/\.md$/, ""));

  return {
    paths: postFileNames.map((item) => ({ params: { slug: item } })),
    fallback: false,
  };
}

export default PostDetailPage;
