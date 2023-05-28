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
          <p className={styles.paragraph}>
            Welcome! I'm a passionate frontend web developer with a focus on web
            page design and accessibility. With expertise in React, Next.js, and
            CSS libraries, I specialize in crafting engaging and user-friendly
            experiences. My goal is to collaborate with small to medium-sized
            companies, delivering exceptional results tailored to their unique
            needs.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80'
              }
              alt="Gray and black laptop computer on a surface"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>What do I do?</h2>
          <p>
            I specialize in building captivating websites and web applications,
            while ensuring accessibility and optimal user experience.
            Additionally, I offer graphic design services to complement your
            brand identity. With a keen focus on advertising and marketing,
            including SEO and SEM, I can help you establish a strong online
            presence. Let's work together to create and manage engaging content
            that resonates with your audience.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
              alt="Close-up of a black circuit board"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>When did I start?</h2>
          <p>
            My journey into web development began in 2021 during the height of
            the COVID-19 pandemic. Initially, I enrolled in a Google Ads course
            and discovered my passion for web development. Eager to pursue this
            new path, I sought guidance from a seasoned web developer who
            mentored me. Since then, I've been working on numerous projects
            independently, continuously honing my skills and staying up-to-date
            with the latest industry practices.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80'
              }
              alt="Silver MacBook Pro on a brown wooden table"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>Where can you contact me?</h2>
          <p>
            I'd love to connect with you! Feel free to reach out to me via email
            at{' '}
            <a href="mailto:thomas.krogh.dev@gmai.com">
              thomas.krogh.dev@gmail.com
            </a>{' '}
            or by phone at <a href="tel:1-801-347-9876">1-801-347-9876</a>. You
            can also find me on various social media platforms:
          </p>
          <div>
            <p>Let's connect on:</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/thomas-krogh-0b1b3b1b9/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/thomas.krogh.7">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/thomas_krogh_dev/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
              alt="Tilt-shift JavaScript code on a computer screen"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>
        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>Why should you contact me?</h2>
          <p>
            When you choose to work with me, you'll benefit from my strong work
            ethic, unwavering dedication, and genuine passion for web
            development. I prioritize collaboration and flexibility, ensuring
            that your project's unique requirements are met. Moreover, my
            services are affordably priced, and I'm open to finding a mutually
            beneficial arrangement. Let's embark on a journey together and bring
            your ideas to life!
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={
                'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
              }
              alt="Laptop computer on a brown marble table"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.subContainer}>
          <h2 className={styles.subHeading}>How can I help you?</h2>

          <p>
            I am here to assist you with your web development, web design, and
            graphic design needs. Whether you require a visually stunning
            website, a seamless web application, or compelling graphic designs,
            I've got you covered. Additionally, I specialize in advertising and
            marketing strategies, including content creation and management.
            Let's collaborate to achieve your digital goals.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default About;
