import React from 'react';
import type { Metadata } from 'next';
import { Zen_Maru_Gothic } from 'next/font/google';
import '../styles/globals.scss';

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'わりかんノート',
  description: '効率的な債務管理をサポートします',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={zenMaruGothic.className}>
      <body>{children}</body>
    </html>
  );
}
