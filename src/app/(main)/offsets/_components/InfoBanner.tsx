'use client';

import React from 'react';
import styles from './InfoBanner.module.scss';

export const InfoBanner: React.FC = () => {
  return (
    <section className={styles['info-banner']}>
      <div className={styles['info-banner__icon']}>⚖️</div>
      <div className={styles['info-banner__content']}>
        <p className={styles['info-banner__title']}>相殺とは？</p>
        <p className={styles['info-banner__desc']}>
          お互いの貸し借りを差し引きして、残高をまとめて精算できます
        </p>
      </div>
    </section>
  );
};
