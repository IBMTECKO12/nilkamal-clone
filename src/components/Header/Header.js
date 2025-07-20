// src/components/Header/Header.js
import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Nilkamal Logo" className={styles.logo} />
        <h1 className={styles.tagline}>India's Favourite Furniture</h1>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>Home</li>
          <li>Shop</li>
          <li>Rooms</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;