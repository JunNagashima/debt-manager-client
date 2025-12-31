'use client';

import React from 'react';
import styles from './BreakdownCard.module.scss';

export const BreakdownCard: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h3 className={styles.section__title}>残高の内訳</h3>
      </div>
      <div className={styles['breakdown-card']}>
        <div className={styles['breakdown-row']}>
          <div className={styles['breakdown-row__label']}>
            <span
              className={`${styles['breakdown-dot']} ${styles['breakdown-dot--lent']}`}
            ></span>
            あなたが立て替えた額
          </div>
          <div
            className={`${styles['breakdown-row__value']} ${styles['breakdown-row__value--lent']}`}
          >
            ¥12,000
          </div>
        </div>
        <div className={styles['breakdown-row']}>
          <div className={styles['breakdown-row__label']}>
            <span
              className={`${styles['breakdown-dot']} ${styles['breakdown-dot--borrowed']}`}
            ></span>
            相手が立て替えた額
          </div>
          <div
            className={`${styles['breakdown-row__value']} ${styles['breakdown-row__value--borrowed']}`}
          >
            ¥6,000
          </div>
        </div>
        <div className={styles['breakdown-divider']}></div>
        <div
          className={`${styles['breakdown-row']} ${styles['breakdown-row--total']}`}
        >
          <div className={styles['breakdown-row__label']}>差し引き残高</div>
          <div
            className={`${styles['breakdown-row__value']} ${styles['breakdown-row__value--lent']}`}
          >
            ¥6,000
          </div>
        </div>
      </div>
    </section>
  );
};
