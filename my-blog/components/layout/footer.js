import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copymark}>
        {new Date().getFullYear()} for portfolio
      </div>
    </footer>
  );
};

export default Footer;
