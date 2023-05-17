import Layout from '@/components/layout/layout.component';
import React from 'react';
import styles from '@/styles/About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <h1>About</h1>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>Who am I?</h2>
          <p>
            I'm am a frontend web developer focused on web page design and
            accessibility. I specialize in React and Next.js and css libraries.
            I mainly intend to work with small to medium sized companies.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80'
              }
              alt="gray and black laptop computer on surface"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>What do I do?</h2>
          <p>
            I build websites and web applications. I also do some graphic
            design. Keen focus on accessibility and user experience. Advertising
            and marketing with a focus on SEO and SEM. content creation and
            content management.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
              alt="close up of a black circuit board"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>when did i start</h2>
          <p>
            I started in the year 2021 at the height of the covid-19 pandemic. I
            entered a Google Ads course and found that I really enjoyed the web
            development aspect of the course. I then decided to pursue a career
            in web development. I was mentored under a professional web
            developer and have been working on my own projects ever since.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80'
              }
              alt="silver macbook pro on brown wooden table"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>where you can contact me</h2>
          <p>
            You can contact me via email:
            <a href="mailto:thomas.krogh.dev@gmai.com">
              <span>My Email Address</span>
            </a>
          </p>
          <p>
            You can also contact me via phone:
            <a href="tel:1-801-347-9876">
              <span>My Phone Number</span>
            </a>
          </p>
          <div>
            <p> You can also contact me via social media:</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/thomas-krogh-0b1b3b1b9/">
                  <span>My LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/thomas.krogh.7">
                  <span>My Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thomas_krogh_dev/">
                  <span>My Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
              alt="tilt shift javascript code on computer screen"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>why should you contact me</h2>
          <p>
            I am a hard worker and I am very passionate about what I do. I am
            also very easy to work with and I am very flexible. I am also very
            affordable and I am willing to work with you to find a price that
            works for both of us.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
              }
              alt="laptop computer on brown marble table"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>how can i help you</h2>

          <p>
            I can help you with your web development needs. I can help you with
            your web design needs. I can help you with your graphic design
            needs. I can help you with your advertising and marketing needs. I
            can help you with your content creation and content management
            needs.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default About;
