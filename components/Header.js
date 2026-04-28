"use client";
import { ShoppingBag, Menu } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.iconBtn}>
        <Menu size={24} color="#e0e0e0" />
      </button>
      <div className={styles.logo}>ANTIGRAVITY</div>
      <button className={styles.iconBtn}>
        <ShoppingBag size={24} color="#e0e0e0" />
      </button>
    </header>
  );
}
