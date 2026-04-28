"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useAppContext();
  const [size, setSize] = useState('M'); // default size

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, size);
    onClose();
  };

  const formattedPrice = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(product.price);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          background: 'var(--color-surface)',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff',
            cursor: 'pointer', zIndex: 10, padding: '0.5rem', borderRadius: '50%'
          }}
        >
          <X size={24} />
        </button>

        {/* Left: Image */}
        <div style={{ flex: 1, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
          <img 
            src={product.image_url} 
            alt={product.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Right: Info */}
        <div style={{ flex: 1, padding: '3rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
            {product.category}
          </span>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>{product.title}</h2>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#fff' }}>{formattedPrice}</p>
          
          <p style={{ color: 'var(--color-text)', lineHeight: 1.6, marginBottom: '2rem' }}>
            {product.description}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', letterSpacing: '1px', color: 'var(--color-accent)' }}>SELECT SIZE</label>
            <select 
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={{
                width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem',
                outline: 'none', appearance: 'none', cursor: 'pointer'
              }}
            >
              <option value="S" style={{ background: '#1e1e1e' }}>S</option>
              <option value="M" style={{ background: '#1e1e1e' }}>M</option>
              <option value="L" style={{ background: '#1e1e1e' }}>L</option>
              <option value="XL" style={{ background: '#1e1e1e' }}>XL</option>
            </select>
          </div>

          <button 
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            style={{
              background: '#e0e0e0', color: '#121212', border: 'none', padding: '1.2rem',
              fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
              marginTop: 'auto', transition: 'background 0.3s'
            }}
            onMouseOver={(e) => { if(product.stock > 0) e.currentTarget.style.background = '#fff'} }
            onMouseOut={(e) => { if(product.stock > 0) e.currentTarget.style.background = '#e0e0e0'} }
          >
            {product.stock > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
