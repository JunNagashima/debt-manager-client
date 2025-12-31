'use client';

import React from 'react';
import styles from './Summary.module.scss';

export const Summary: React.FC = () => {
  console.log('Summary component rendered');

  return (
    <section className={styles.summary}>
      <p className={styles.summary__title}>今月の残高</p>
      <div className={styles.summary__grid}>
        <div className={styles.summary__item}>
          <p className={styles.summary__label}>
            <span className={`${styles.summary__dot} ${styles['summary__dot--lent']}`}></span>
            受け取り予定
          </p>
          <p className={`${styles.summary__amount} ${styles['summary__amount--lent']}`}>
            ¥12,500
          </p>
        </div>
        <div className={styles.summary__divider}></div>
        <div className={styles.summary__item}>
          <p className={styles.summary__label}>
            <span className={`${styles.summary__dot} ${styles['summary__dot--borrowed']}`}></span>
            お支払い予定
          </p>
          <p className={`${styles.summary__amount} ${styles['summary__amount--borrowed']}`}>
            ¥3,200
          </p>
        </div>
      </div>
    </section>
  );
};
