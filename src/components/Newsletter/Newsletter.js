// src/components/Newsletter/Newsletter.js
import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h3 className={styles.newsletterTitle}>Join Our Newsletter To Receive Updates On Product Announcements And Sales.</h3>
      <div className={styles.newsletterForm}>
        <input type="email" placeholder="Enter your email address..." className={styles.emailInput} />
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;