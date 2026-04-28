"use client";
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import styles from './ProductGallery.module.css';

export default function ProductGallery({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <section 
          key={product.id} 
          className={styles.section} 
          onClick={() => setSelectedProduct(product)}
          style={{ cursor: 'pointer' }}
        >
          <ProductCard product={product} />
        </section>
      ))}

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
