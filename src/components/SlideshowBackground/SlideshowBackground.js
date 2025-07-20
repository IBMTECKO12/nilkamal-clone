import React, { useState, useEffect } from 'react';
import styles from './SlideshowBackground.module.css';
import slide1 from '../../assets/images/slideshow/slide1.jpeg';
import slide2 from '../../assets/images/slideshow/slide2.jpeg';
import slide3 from '../../assets/images/slideshow/slide3.jpeg';
import slide4 from '../../assets/images/slideshow/slide4.jpeg';
import slide5 from '../../assets/images/slideshow/slide5.jpeg';

const SlideshowBackground = ({ children }) => {
  // Array of background images (replace with your actual image paths)
  const images = [slide1, slide2, slide3, slide4, slide5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className={styles.slideshowContainer}
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]})` 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Navigation Dots */}
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideshowBackground;