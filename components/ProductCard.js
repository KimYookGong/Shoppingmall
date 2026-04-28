"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.cardContainer}>
      <motion.div 
        className={styles.imageWrapper}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* We use an img tag for simplicity, next/image could also be used */}
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.overlay}></div>
      </motion.div>

      <motion.div 
        className={styles.infoWrapper}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <span className={styles.category}>{product.category}</span>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.buyBtn}>
          <span className={styles.btnText}>DISCOVER</span>
          <div className={styles.btnGlow}></div>
        </button>
      </motion.div>
    </div>
  );
}
