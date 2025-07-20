// src/components/BestSellers/BestSellers.js
import React from 'react';
import styles from './BestSellers.module.css';
import image1 from '../../assets/images/products/Nilkamal Willy 3 Door Wardrobe without Mirror (New Wenge).jpeg';
import image2 from '../../assets/images/products/Nilkamal Sutlej 4 Seater Dining Set (Antique Cherry).jpeg';
import image3 from '../../assets/images/products/Nilkamal Sierra 1 Seater Rocker & Swivel Recliner Sofa (Brown).jpeg';

const bestSellers = [
  {
    id: 1,
    name: 'Nilkamal Willy 3 Door Wardrobe Without Mirror (New Wenge)',
    price: '₹14,990',
    originalPrice: '₹25,000',
    rating: 5,
    reviews: 117,
    image: image1,
    alt: "Nilkamal Willy 3 Door Wardrobe without Mirror"
  },
  {
    id: 2,
    name: 'Nilkamal Sutlej 4 Seater Dining Set (Antique Cherry)',
    price: '₹15,990',
    originalPrice: '₹47,900',
    rating: 5,
    reviews: 2,
    image: image2,
    alt: "Nilkamal Sutlej 4 Seater Dining Set"
  },
  {
    id: 3,
    name: 'Nilkamal Sierra 1 Seater Manual Recliner Sofa (Brown)',
    price: '₹16,990',
    originalPrice: '₹40,100',
    rating: 5,
    reviews: 51,
    image: image3,
    alt: "Nilkamal Sutlej 4 Seater Dining Set"
  }
];

const BestSellers = () => {
  return (
    <section className={styles.bestSellers}>
      <h2 className={styles.sectionTitle}>BEST SELLER</h2>
      <div className={styles.productsContainer}>
        {bestSellers.map(product => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img 
                src={product.image} 
                alt={product.alt}
                className={styles.productImage}
                loading="lazy"
                />
            </div>
            <h3 className={styles.productName}>{product.name}</h3>
            <div className={styles.rating}>
              {Array(product.rating).fill().map((_, i) => (
                <span key={i} className={styles.star}>⭐</span>
              ))}
              <span className={styles.reviews}>({product.reviews} reviews)</span>
            </div>
            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>{product.price}</span>
              <span className={styles.originalPrice}>{product.originalPrice}</span>
            </div>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      <h2 className={styles.sectionTitle}>Premium Plastic Furniture</h2>
      <div className={styles.plasticCategories}>
        <div className={styles.plasticCategory}>Plastic Chairs</div>
        <div className={styles.plasticCategory}>Plastic Tables</div>
      </div>
    </section>
  );
};

export default BestSellers;