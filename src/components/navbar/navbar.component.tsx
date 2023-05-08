import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a className={styles.logoLink} href="/">
            <p className={styles.logo}>Thomas Krogh</p>
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/">
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/about">
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/contact">
            Contact
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/portfolio">
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
