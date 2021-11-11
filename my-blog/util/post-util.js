import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export const getPostData = (postID) => {
  const postSlug = postID.replace(/\.md$/, "");
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return { slug: postSlug, ...data, content };
};

export const getPostFiles = () => {
  return fs.readdirSync(postsDir);
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir);
  return postFiles
    .map((item) => getPostData(item))
    .sort((a, b) => a.date > b.date);
};

export const getFeaturePosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((item) => item.isFeatured);
};
