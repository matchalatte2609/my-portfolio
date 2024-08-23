import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import ProjectCard from './src/components/ProjectCard';
import styles from './styles/Home.module.css';


const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.text}>
          <p>Hey there! I'm an undergrad who’s fallen head-over-heels for software development. I mean, who wouldn’t love spending hours debugging code only to realize you missed a semicolon, right? My coding journey has been a thrilling rollercoaster of HTML, CSS, and JavaScript, with a few Git battles thrown in for good measure.</p>
      
          <p>When I’m not busy convincing my code to work, I’m usually dreaming up the next big thing in web development (or, you know, just making sure my latest project doesn’t break). I thrive in collaborative environments—because two heads (and four hands) are definitely better when you’re knee-deep in code.</p>
          
          <p>I’m all about learning new tricks, tackling real-world challenges, and building cool stuff that actually works (most of the time). Whether I’m working solo or with a team, I’m here to make the web a little bit better—and have a good laugh along the way.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectGrid}>
          <ProjectCard
            title="Project Alpha"
            description="A comprehensive e-commerce platform built with React and Node.js."
            link="https://github.com/yourusername/project-alpha"
          />
          <ProjectCard
            title="Project Beta"
            description="A mobile-friendly weather forecasting app using React Native and OpenWeather API."
            link="https://github.com/yourusername/project-beta"
          />
          <ProjectCard
            title="Project Gamma"
            description="An AI-powered chatbot for customer support built with Python and TensorFlow."
            link="https://github.com/yourusername/project-gamma"
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.text}>
          Feel free to reach out to me at <a className={styles.link} href="mailto:john.doe@example.com">john.doe@example.com</a> for any collaboration or project inquiries.
        </p>
      </section>



    </div>
  );
};

export default HomePage;
