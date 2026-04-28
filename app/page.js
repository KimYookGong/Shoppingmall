"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import SkeletonProduct from '../components/SkeletonProduct';
import { supabase } from '../lib/supabase';
import { useAppContext } from '../context/AppContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedCategory } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let query = supabase.from('products').select('*').order('id');
        
        if (selectedCategory !== '전체') {
          query = query.eq('category', selectedCategory);
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <main className={styles.main}>
      <Header />
      
      {/* Category Indicator */}
      <div style={{ position: 'fixed', top: '7rem', left: '3rem', zIndex: 10, pointerEvents: 'none' }}>
        <h1 style={{ fontSize: '1rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
          {selectedCategory}
        </h1>
      </div>

      {error ? (
        <div style={{ textAlign: 'center', paddingTop: '40vh', color: '#ff6b6b', height: '100vh' }}>
          <h2>데이터를 불러올 수 없습니다.</h2>
          <p style={{ marginTop: '10px', color: '#a0a0a0' }}>네트워크 연결을 확인해 주세요.</p>
        </div>
      ) : loading ? (
        <SkeletonProduct />
      ) : products && products.length > 0 ? (
        <ProductGallery products={products} />
      ) : (
        <div style={{ textAlign: 'center', paddingTop: '40vh', color: '#a0a0a0', height: '100vh' }}>
          <h2>해당 카테고리에 등록된 상품이 없습니다.</h2>
        </div>
      )}
    </main>
  );
}
