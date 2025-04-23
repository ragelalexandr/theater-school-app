// components/Navbar.tsx
import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/logo.svg" alt="Логотип" className={styles.logo} />
      <ul className={styles.menu}>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Курсы</a></li>
        <li><a href="#">Билеты</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
      <button className={styles.loginBtn}>
        <img src="/login-icon.svg" alt="Войти" className={styles.loginIcon} />
      </button>
    </nav>
  );
}

