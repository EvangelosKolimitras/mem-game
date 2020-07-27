import React from "react";
import styles from "./Header.module.css";
import logo from "./img/logo.png";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 id="header__logo">
        <img
          className={`${styles.header__logo_img}`}
          src={logo}
          alt="Memory game logo"
        />
      </h1>
    </header>
  );
}
