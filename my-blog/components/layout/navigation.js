import React from "react";
import styles from "./navigation.module.css";

import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Link href="/posts">Posts</Link>
        </li>
        <li className={styles.item}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
