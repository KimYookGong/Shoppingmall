"use client";
import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductGallery.module.css';

export default function ProductGallery({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <section key={product.id} className={styles.section}>
          <ProductCard product={product} />
        </section>
      ))}
    </div>
  );
}
