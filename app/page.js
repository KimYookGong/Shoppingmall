import styles from './page.module.css';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';
import { supabase } from '../lib/supabase';

export const revalidate = 0;

export default async function Home() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <main className={styles.main}>
      <Header />
      <ProductGallery products={products || []} />
    </main>
  );
}
