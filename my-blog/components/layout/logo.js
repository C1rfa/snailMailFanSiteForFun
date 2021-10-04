import React from "react";
import styles from "./logo.module.css";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <div className={styles.logo}>Snail Mail</div>
      </a>
    </Link>
  );
};

export default Logo;
