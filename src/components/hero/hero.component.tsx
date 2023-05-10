import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.leftContent} ${styles.gridItem}`}>
        <h2 className={styles.header}>Thomas Krogh, </h2>
        <p className={styles.subTitle}>Web Developer</p>
        <p className={styles.tagline}>
          Hi, I'm Thomas Krogh, and I am the frontend development expert you
          need to bring your website to life. With years of experience under my
          belt, I have become proficient in crafting visually stunning websites
          that function flawlessly.
        </p>
        <p className={styles.tagline}>
          So if you're looking for a frontend developer who can deliver
          top-notch results, look no further than me. I am ready to collaborate
          with you and take your website to the next level.
        </p>
        <Link className={styles.heroLink} href={'/services'}>
          Learn More
        </Link>
      </div>
      <div className={`${styles.rightContent} ${styles.gridItem}`}>
        <Image
          src={
            'https://images.unsplash.com/photo-1446889727648-8c23e3039b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=949&q=80'
          }
          alt="worm eye view of palm trees on a clear day"
          fill
        />
      </div>
    </div>
  );
}

export default Hero;
