
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Khang H. Nguyen</h1>
        <p className={styles.heroSubtitle}>Software Engineer | Quant Enthusiast | Mathematician</p>
        <a href="#contact" className={styles.heroButton}>Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
