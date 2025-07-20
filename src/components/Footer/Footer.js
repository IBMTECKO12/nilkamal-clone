// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const popularCategories = [
    'Queen Size Beds', 'King Size Beds', 'Coffee Tables', 'Dining Sets', 
    'Recliners', 'Sofa cum Beds', 'Cabinets', 'Book Shelves', 'TV Unit', 
    'Wardrobes', 'Outdoor Furniture', 'Mattresses', 'Study Tables', 
    'Dining Room Furniture', 'Office Furniture', 'Bed Room Furniture', 
    'Dining Table', 'Beds', 'Sofas'
  ];

  const cities = [
    'Agartala', 'Agra', 'Allahabad', 'Ambikapur', 'Asansol', 'Aurangabad', 
    'Balugaan', 'Barrackpore', 'Barulpur', 'Bhagalpur', 'Bhilai', 'Bhopal', 
    'Bhubaneshwar', 'Bhugaan', 'Bilaspur', 'Boisar', 'Bolangir', 'Bolpur', 
    'Brahmapur', 'Central Noida', 'Chandigarh', 'Chittoor', 'Coimbatore', 
    'Dehradun', 'Dibrugarh', 'Dimapur', 'Faridabad', 'Ghaziabad', 
    'Greater Noida', 'Gurugaram', 'Guwahati', 'Hajipur', 'Halawani', 
    'Haridwar', 'Hosur', 'Indore', 'Jabalpur', 'Jaipur', 'Jhansi', 'Jorhat', 
    'Katihar', 'Kokrajhar', 'Kolhapur', 'Korba', 'Kulgam', 'Lakhimpur', 
    'Lucknow', 'Malda', 'Moshi', 'Muradabad', 'Muzaffarpur', 'Nagaan', 
    'Nagpur', 'Nashik', 'Osmanabad', 'Palampur', 'Patna', 'Puducherry', 
    'Raipur', 'Ranjganj', 'Rayagada', 'Roorkee', 'Sagar', 'Shahjahanpur', 
    'Siliguri', 'Siwan', 'Solapur', 'Tadepalligudem', 'Tilaknagar', 
    'Tinsukia', 'Tirupati', 'Varanasi', 'Vellore', 'Waidhan', 'Wakad', 
    'Zirakpur'
  ];

  const paymentMethods = [
    'VISA', 'MasterCard', 'Maestro', 'AMEX', 'EP-HM LLP19', 
    'GPay', 'NET Banking', 'EMI'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Furniture</h3>
          <ul className={styles.footerLinks}>
            <li>About Us</li>
            <li>Help</li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Support</h3>
          <ul className={styles.footerLinks}>
            <li>1800 1219 115 (10am-7pm, 7 days a week)</li>
            <li>furniture.enquiry@nilkamal.com</li>
            <li>77/78, Nilkamal House, 14th Street, MIDC Road, Andheri (East), Mumbai - 400 093</li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            {/* Social icons would go here */}
            <span>FB</span>
            <span>IG</span>
            <span>TW</span>
            <span>YT</span>
          </div>
        </div>
        
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Popular Categories</h3>
          <div className={styles.categoryTags}>
            {popularCategories.map((category, index) => (
              <span key={index} className={styles.tag}>{category}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.footerMiddle}>
        <h3 className={styles.citiesTitle}>Cities We Deliver To</h3>
        <div className={styles.citiesList}>
          {cities.map((city, index) => (
            <span key={index} className={styles.city}>{city}</span>
          ))}
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          Copyright © 2025 Nilkamal Furniture. All Rights Reserved.
        </div>
        
        <div className={styles.paymentMethods}>
          <h4>We Accept Secure Payment</h4>
          <div className={styles.paymentIcons}>
            {paymentMethods.map((method, index) => (
              <span key={index} className={styles.paymentMethod}>{method}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;