import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import NavbarMenuCloseBtn from './navbarMenuCloseBtn';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showNav]);
  return (
    <nav className={styles.navbar}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <a className={styles.mobileLogoLink} href="/">
          <p className={styles.logo}>Thomas Krogh</p>
        </a>
        <div className={styles['navbar-menu']} onClick={toggleNav}>
          {!showNav ? (
            <>
              <span dangerouslySetInnerHTML={{ __html: '&#9776;' }} />
            </>
          ) : (
            <NavbarMenuCloseBtn
              style={{ padding: '0', margin: '0' }}
              width={17}
              height={17}
              strokeColor={'#fff'}
            />
          )}
        </div>
      </div>
      <ul className={`${styles.navList} ${showNav ? styles.show : ''}`}>
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
