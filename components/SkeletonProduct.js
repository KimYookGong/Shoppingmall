import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductGallery.module.css';

export default function SkeletonProduct() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '1200px', padding: '2rem' }}>
          <motion.div 
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
            style={{ width: '400px', height: '600px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px' }}
          />
          <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.div 
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror', delay: 0.2 }}
              style={{ width: '80%', height: '3rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px' }}
            />
            <motion.div 
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror', delay: 0.4 }}
              style={{ width: '40%', height: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px' }}
            />
            <motion.div 
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror', delay: 0.6 }}
              style={{ width: '100%', height: '5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
