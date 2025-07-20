// src/components/SaleBanner/SaleBanner.js
import React from 'react';
import styles from './SaleBanner.module.css';

const SaleBanner = () => {
  return (
    <section className={styles.saleBanner}>
      <div className={styles.bannerItem}>
        <h3>Beds starting from ₹11,900</h3>
        <button className={styles.shopNowButton}>Shop Now &gt;</button>
      </div>
      <div className={styles.bannerItem}>
        <h3>New Launches</h3>
        <button className={styles.viewAllButton}>View All</button>
      </div>
    </section>
  );
};

export default SaleBanner;