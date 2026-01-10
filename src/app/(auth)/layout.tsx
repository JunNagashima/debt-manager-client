import Link from 'next/link';
import styles from './auth.module.scss';
import '@/styles/globals.scss';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.appAuth}>
      <header className={styles.authHeader}>
        <div className={styles.authLogo}>
          <h1 className={styles.authLogoTitle}>わりかんノート</h1>
        </div>
        <p className={styles.authLogoTagline}>友達との貸し借りを、かんたんに。</p>
      </header>

      <main className={styles.authMain}>
        {children}
      </main>

      <footer className={styles.authFooter}>
        <Link href="/terms">利用規約</Link>
        <span>・</span>
        <Link href="/privacy">プライバシーポリシー</Link>
      </footer>
    </div>
  );
}
