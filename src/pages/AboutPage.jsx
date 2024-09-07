// pages/AboutPage.jsx
import React from 'react';
import Description from '../components/Description';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  const aboutPageDetails = {
    title: 'Title 2',
    description: 'description 2',
  };

  return (
    <div className={styles.aboutPage}>
      <h1>About Page</h1>
      <Description details={aboutPageDetails} />
    </div>
  );
};

export default AboutPage;
