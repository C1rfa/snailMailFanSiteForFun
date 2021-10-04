import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./post-item.module.css";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${image}`;

  return (
    <li className={styles.post}>
      <Link href="#">
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={300}
              layout="responsive"
            ></Image>
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
