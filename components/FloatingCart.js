"use client";
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function FloatingCart() {
  const { cart, setIsCartOpen } = useAppContext();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsCartOpen(true)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#1e1e1e',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        zIndex: 50,
      }}
    >
      <ShoppingBag color="#fff" size={24} />
      {totalQuantity > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: '#ff5252',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {totalQuantity}
        </motion.div>
      )}
    </motion.button>
  );
}
