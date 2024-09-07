// pages/MainPage.jsx
import React from 'react';
import Description from '../components/Description';
import styles from './MainPage.module.css';

const MainPage = () => {
  const mainPageDetails = {
    title: 'Title',
    description: 'description',
  };

  return (
    <div className={styles.mainPage}>
      <h1>Main Page</h1>
      <Description details={mainPageDetails} />
    </div>
  );
};

export default MainPage;
