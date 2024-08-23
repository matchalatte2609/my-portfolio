// src/components/ProjectCard.tsx
import React from 'react';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
