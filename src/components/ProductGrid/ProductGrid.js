import React from 'react';
import styles from './ProductGrid.module.css';
import image1 from '../../assets/images/products/Nilkamal Verona High Back Office Chair (Black).jpeg';
import image2 from '../../assets/images/products/Nilkamal Sierra 1 Seater Rocker & Swivel Recliner Sofa (Brown).jpeg';
import image3 from '../../assets/images/products/Nilkamal Giza Plus Mid Back Office Chair (Black).jpeg';
import image4 from '../../assets/images/products/Nilkamal William Book Case (Oak Grey).jpeg';

const products = [
  {
    id: 1,
    name: 'Nilkamal Verona High Back Office Chair (Black)',
    price: '₹6,490',
    originalPrice: '₹10,000',
    discount: '35% OFF',
    isNew: true,
    image: image1,
    alt: "Nilkamal Verona High Back Office Chair"
  },
  {
    id: 2,
    name: 'Nilkamal Sierra 1 Seater Rocker & Swivel Recliner Sofa (Brown)',
    price: '₹22,990',
    originalPrice: '₹31,000',
    discount: '25% OFF',
    isNew: true,
    image: image2,
    alt: "Nilkamal Sierra 1 Seater Rocker & Swivel Recliner Sofa"
  },
  {
    id: 3,
    name: 'Nilkamal Giza Plus Mid Back Office Chair (Black)',
    price: '₹4,900',
    originalPrice: '₹ 8,000',
    discount: '38% OFF',
    isNew: true,
    image: image3,
    alt: "Nilkamal Giza Plus Mid Back Office Chair"
  },
  {
    id: 4,
    name: 'Nilkamal William Book Case (Oak Grey)',
    price: '₹6,900',
    originalPrice: '₹ 14,000',
    discount: '50% OFF',
    isNew: true,
    image: image4,
    alt: "Nilkamal William Book Case"
  }
];

const ProductGrid = () => {
  return (
    <section className={styles.productGrid}>
      <h2 className={styles.sectionTitle}>New Launches</h2>
      <div className={styles.productsContainer}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            {product.isNew && <span className={styles.newBadge}>NEW LAUNCH</span>}
            <div className={styles.discountBadge}>{product.discount}</div>
            <div className={styles.imageContainer}>
              <img 
                src={product.image} 
                alt={product.alt}
                className={styles.productImage}
                loading="lazy"
              />
            </div>
            <h3 className={styles.productName}>{product.name}</h3>
            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>{product.price}</span>
              <span className={styles.originalPrice}>{product.originalPrice}</span>
            </div>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;