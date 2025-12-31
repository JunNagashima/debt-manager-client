import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from './layout.module.scss';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
