"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useAppContext();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedPrice = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(totalPrice);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.5)', zIndex: 999
            }}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '100%', maxWidth: '400px',
              background: 'var(--color-bg)',
              zIndex: 1000,
              display: 'flex', flexDirection: 'column',
              borderLeft: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>CART</h2>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
              {cart.length === 0 ? (
                <p style={{ color: 'var(--color-accent)', textAlign: 'center', marginTop: '2rem' }}>장바구니가 비어 있습니다.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <img src={item.image_url} alt={item.title} style={{ width: '80px', height: '100px', objectFit: 'cover' }} />
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</h4>
                        <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Size: {item.size} | Qty: {item.quantity}</p>
                        <p style={{ fontSize: '0.9rem' }}>{new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(item.price)}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.size)}
                        style={{ background: 'none', border: 'none', color: '#ff5252', cursor: 'pointer' }}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>
                  <span>TOTAL</span>
                  <span>{formattedPrice}</span>
                </div>
                <button style={{
                  width: '100%', padding: '1.2rem', background: '#fff', color: '#000',
                  border: 'none', fontSize: '1rem', fontWeight: 600, letterSpacing: '2px', cursor: 'pointer'
                }}>
                  CHECKOUT
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
