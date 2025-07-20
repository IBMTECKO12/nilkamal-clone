// src/components/BlogSection/BlogSection.js
import React from 'react';
import styles from './BlogSection.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'Design Ideas: Homes',
    excerpt: 'Interior particularly when constraints of...',
    readMoreLink: '#'
  },
  {
    id: 2,
    title: 'Ravish Wardrobe Colour Combinations For Your...',
    excerpt: "So, you're thinking of a bedroom refresh? Or maybe you're on the hunt, ready to bu...",
    readMoreLink: '#'
  }
];

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Blog</h2>
        <button className={styles.viewAllButton}>View All</button>
      </div>
      
      <div className={styles.blogPosts}>
        {blogPosts.map(post => (
          <div key={post.id} className={styles.blogPost}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <a href={post.readMoreLink} className={styles.readMoreLink}>Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;