"use client";
import { useEffect, useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';
import { useAppContext } from '../context/AppContext';
import styles from './Header.module.css';

export default function Header() {
  const [session, setSession] = useState(null);
  const router = useRouter();
  const { setIsNavOpen, setIsCartOpen } = useAppContext();

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftNav}>
        <button className={styles.iconBtn} onClick={() => setIsNavOpen(true)}>
          <Menu size={24} color="#e0e0e0" />
        </button>
      </div>
      
      <Link href="/" className={styles.logo}>
        SIXZERO
      </Link>
      
      <div className={styles.rightNav}>
        {session ? (
          <>
            <Link href="/admin" className={styles.authLink}>마이페이지</Link>
            <button onClick={handleLogout} className={styles.authBtn}>로그아웃</button>
          </>
        ) : (
          <Link href="/login" className={styles.authLink}>로그인</Link>
        )}
        <button className={styles.iconBtn} onClick={() => setIsCartOpen(true)}>
          <ShoppingBag size={24} color="#e0e0e0" />
        </button>
      </div>
    </header>
  );
}
