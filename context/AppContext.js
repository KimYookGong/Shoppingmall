"use client";
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const addToCart = (product, size) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, size) => {
    setCart((prev) => prev.filter(item => !(item.id === id && item.size === size)));
  };

  return (
    <AppContext.Provider value={{
      cart, addToCart, removeFromCart,
      isCartOpen, setIsCartOpen,
      isNavOpen, setIsNavOpen,
      selectedCategory, setSelectedCategory
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
