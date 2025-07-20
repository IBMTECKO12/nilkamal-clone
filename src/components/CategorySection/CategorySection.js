// src/components/CategorySection/CategorySection.js
import React from 'react';
import styles from './CategorySection.module.css';

const categories = [
  'Living Room',
  'Dining Room',
  'Bed Room',
  'Study Room',
  'Kids Furniture',
  'Kitchen'
];

const hotCollections = ['Mozart Collection'];

const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.sectionTitle}>Shop By Room</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            {category}
          </div>
        ))}
      </div>
      
      <h2 className={styles.sectionTitle}>Hot Collection</h2>
      <div className={styles.hotCollections}>
        {hotCollections.map((collection, index) => (
          <div key={index} className={styles.collectionCard}>
            {collection}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;