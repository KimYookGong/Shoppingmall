"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function NavigationDrawer() {
  const { isNavOpen, setIsNavOpen, selectedCategory, setSelectedCategory } = useAppContext();

  const categories = ['전체', '테크니컬 아우터', '헤리티지 데님', '액세서리'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsNavOpen(false);
  };

  return (
    <AnimatePresence>
      {isNavOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsNavOpen(false)}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.5)', zIndex: 999
            }}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, left: 0, bottom: 0,
              width: '100%', maxWidth: '300px',
              background: 'var(--color-bg)',
              zIndex: 1000,
              display: 'flex', flexDirection: 'column',
              borderRight: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>MENU</h2>
              <button onClick={() => setIsNavOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: selectedCategory === category ? '#fff' : 'var(--color-accent)',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    fontWeight: selectedCategory === category ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => { if(selectedCategory !== category) e.currentTarget.style.color = '#e0e0e0'} }
                  onMouseOut={(e) => { if(selectedCategory !== category) e.currentTarget.style.color = 'var(--color-accent)'} }
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
