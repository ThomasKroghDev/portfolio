import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import Button from '../button/button.componet';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.textContent}>
          <h2>Connect with me.</h2>
          <p>
            Stay up-to-date with the latest news and announcements by following
            me on my social media channels. I post regular updates on my
            products and services, as well as useful tips and resources to help
            you get the most out of my platform. Join my community today
          </p>
        </div>
        <div className={styles.listContainer}>
          <h3>Services</h3>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Web Dev</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">QA Testing</a>
            </li>
          </ul>
        </div>
        <div className={styles.listContainer}>
          <h3>Blog</h3>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Tips &amp; Tricks</a>
            </li>
            <li>
              <a href="#">Latest Trends</a>
            </li>
            <li>
              <a href="#">Industry News</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCta}>
        <p>Join My Newsletter</p>
        <Button title="Join Now" />
      </div>
      <div className={styles.footerSocials}>
        <ul className={styles.socialsList}>
          <li>
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copy}>
        <p>© Thomas Krogh. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
