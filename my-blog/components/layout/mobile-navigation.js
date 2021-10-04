import styles from "./mobile-navigation.module.css";

import React from "react";
import Link from "next/link";

const MobileNavigation = () => {
  const burgerRef = React.useRef();
  const navRef = React.useRef();

  const onClickHandler = () => {
    burgerRef.current.classList.toggle(styles.isopen);
    navRef.current.classList.toggle(styles.isopen);
  };

  return (
    <div className={styles.container}>
      <button ref={burgerRef} className={styles.open} onClick={onClickHandler}>
        <span className={styles.burger}></span>
      </button>
      <nav className={styles.nav} ref={navRef}>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
