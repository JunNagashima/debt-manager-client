'use client';

import React from 'react';
import styles from './DetailSummary.module.scss';

export const DetailSummary: React.FC = () => {
  return (
    <section className={styles['detail-summary']}>
      <div className={styles['detail-summary__avatar']}>佐</div>
      <h2 className={styles['detail-summary__name']}>佐藤 花子</h2>
      <p className={styles['detail-summary__id']}>@sato_hanako</p>
      <div className={styles['detail-summary__balance']}>
        <p className={styles['detail-summary__label']}>現在の残高</p>
        <p className={`${styles['detail-summary__amount']} ${styles['detail-summary__amount--lent']}`}>
          <span className={styles['detail-summary__prefix']}>あなたが貸している</span>
          ¥6,000
        </p>
      </div>
    </section>
  );
};
