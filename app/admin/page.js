import Link from 'next/link';

export default function AdminPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '8rem', paddingLeft: '3rem', paddingRight: '3rem' }} className="nylon-metal">
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', letterSpacing: '2px' }}>MY PAGE / ADMIN</h1>
      <p style={{ color: 'var(--color-accent)', marginBottom: '2rem' }}>
        환영합니다! 보호된 라우트입니다. 이곳에서는 계정 정보 및 설정 관리가 가능합니다.
      </p>
      <Link href="/" style={{ padding: '0.8rem 1.5rem', background: '#e0e0e0', color: '#121212', textDecoration: 'none', fontWeight: 'bold' }}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
