"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  // Format price
  const formattedPrice = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(product.price);

  return (
    <div className={styles.cardContainer}>
      <motion.div 
        className={styles.imageWrapper}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <img src={product.image_url} alt={product.title} className={styles.image} />
        <div className={styles.overlay}></div>
        {product.stock <= 0 && <div className={styles.soldOutBadge}>SOLD OUT</div>}
      </motion.div>

      <motion.div 
        className={styles.infoWrapper}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <div className={styles.headerRow}>
          <span className={styles.category}>{product.category}</span>
          <span className={styles.price}>{formattedPrice}</span>
        </div>
        
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        
        <div className={styles.metaRow}>
          <div className={styles.sizeWrapper}>
            <span className={styles.metaLabel}>SIZE: </span>
            <span className={styles.metaValue}>{product.size}</span>
          </div>
          <div className={styles.stockWrapper}>
            <span className={styles.metaLabel}>STOCK: </span>
            <span className={styles.metaValue}>{product.stock > 0 ? `${product.stock} left` : 'Out of stock'}</span>
          </div>
        </div>

        <button className={styles.buyBtn} disabled={product.stock <= 0}>
          <span className={styles.btnText}>{product.stock > 0 ? 'DISCOVER' : 'UNAVAILABLE'}</span>
          <div className={styles.btnGlow}></div>
        </button>
      </motion.div>
    </div>
  );
}
