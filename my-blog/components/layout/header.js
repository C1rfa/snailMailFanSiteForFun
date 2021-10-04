import React from "react";
import styles from "./header.module.css";

import useScreen from "./../../hooks/useScreen";

import Logo from "./logo";
import MobileNavigation from "./mobile-navigation";
import Navigation from "./navigation";

const Header = () => {
  const isMobile = useScreen();

  return (
    <header className={styles.header}>
      <Logo />
      {isMobile ? <MobileNavigation /> : <Navigation />}
    </header>
  );
};

export default Header;
