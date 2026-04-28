import styles from './page.module.css';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import { supabase } from '../lib/supabase';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching products:', error);
    return (
      <main className={styles.main}>
        <Header />
        <div style={{ textAlign: 'center', padding: '100px 20px', color: '#ff6b6b' }}>
          <h2>데이터를 불러올 수 없습니다.</h2>
          <p style={{ marginTop: '10px', color: '#a0a0a0' }}>Vercel 환경 변수(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)가 올바르게 설정되었는지 확인해 주세요.</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Header />
      {products && products.length > 0 ? (
        <ProductGallery products={products} />
      ) : (
        <div style={{ textAlign: 'center', padding: '100px 20px', color: '#a0a0a0' }}>
          <h2>등록된 상품이 없습니다.</h2>
        </div>
      )}
    </main>
  );
}
