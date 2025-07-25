// src/components/AboutSection/AboutSection.js
import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>About Nilkamal</h2>
      <div className={styles.aboutContent}>
        <p>
          Nilkamal's association with Furniture needs no introduction. Nilkamal is the world's largest manufacturer of moulded furniture & India's favourite furniture brand with 50 stores & 3,000+ distributors. Our furniture has eternally been a part of Indian home's interiors, knowingly or unknowingly taking space in the form of a simple plastic chair in your living room or an entire furniture set in your bedrooms or offices adding both emotion and charm to your sheen interiors.
        </p>
        <p>
          Nilkamal's expertise in wooden Furniture is expanding with a strong network of approximately 20,000+ dealers spread across the country. From the fast-paced metro cities to the deepest regions in India, Nilkamal aims to bring quality and budget friendly furniture to everyone. With plethora of trending yet quality products, Nilkamal has been providing the best furnishing experience to its customers.
        </p>
        <p>
          So what are you waiting for? Begin your best furnishing experience with our one-stop-shop only at Nilkamal furniture.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;