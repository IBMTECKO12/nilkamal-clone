// src/pages/Home.js
import React from 'react';
import Header from '../components/Header/Header';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import SaleBanner from '../components/SaleBanner/SaleBanner';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import CategorySection from '../components/CategorySection/CategorySection';
import BestSellers from '../components/BestSellers/BestSellers';
import BlogSection from '../components/BlogSection/BlogSection';
import AboutSection from '../components/AboutSection/AboutSection';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroBanner />
      <main>
        <SaleBanner />
        <ProductGrid />
        <CategorySection />
        <BestSellers />
        <BlogSection />
        <AboutSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;