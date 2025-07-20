// src/components/HeroBanner/HeroBanner.js
import React from 'react';
import SlideshowBackground from '../SlideshowBackground/SlideshowBackground';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <SlideshowBackground>
      <div className={styles.bannerContent}>
        <h2 className={styles.saleTitle}>INDIA'S FAVOURITE FURNITURE SALE</h2>
        <p className={styles.saleDiscount}>Up to 60% Off</p>
        <button className={styles.shopButton}>Shop Now</button>
      </div>
    </SlideshowBackground>
  );
};

export default HeroBanner;