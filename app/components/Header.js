"use client";

import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className={styles.header}>
      <div className={styles.logo}><img src='/LOGO.PNG' className={styles.logo}
      /></div>
      <div className={styles.welcomeMessage}>Bem-vindo de volta, Marcus</div>
      <div className={styles.date}>{currentDate}</div>
    </header>
  );
};

export default Header;
