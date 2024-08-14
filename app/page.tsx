import React from 'react';
import styles from './styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Your Name</h1>
        <p className={styles.tagline}>Software Engineer | Developer | Designer</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.text}>
          Brief introduction about yourself. Highlight your experience, skills, and what you're passionate about.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <ul className={styles.list}>
          <li>Project 1 - A short description of your project.</li>
          <li>Project 2 - A short description of your project.</li>
          <li>Project 3 - A short description of your project.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.text}>
          Feel free to reach out to me at <a className={styles.link} href="mailto:your-email@example.com">your-email@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
