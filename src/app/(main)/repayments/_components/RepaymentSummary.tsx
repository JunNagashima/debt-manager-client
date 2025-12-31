'use client';

import React from 'react';
import styles from './RepaymentSummary.module.scss';

export const RepaymentSummary: React.FC = () => {
  return (
    <section className={styles['repayment-summary']}>
      <div className={styles['repayment-summary__item']}>
        <div className={`${styles['repayment-summary__icon']} ${styles['repayment-summary__icon--received']}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 19V5M5 12l7 7 7-7" />
          </svg>
        </div>
        <div className={styles['repayment-summary__content']}>
          <p className={styles['repayment-summary__label']}>今月受け取った</p>
          <p className={`${styles['repayment-summary__amount']} ${styles['repayment-summary__amount--lent']}`}>
            ¥8,500
          </p>
        </div>
      </div>
      <div className={styles['repayment-summary__divider']}></div>
      <div className={styles['repayment-summary__item']}>
        <div className={`${styles['repayment-summary__icon']} ${styles['repayment-summary__icon--paid']}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7-7 7 7" />
          </svg>
        </div>
        <div className={styles['repayment-summary__content']}>
          <p className={styles['repayment-summary__label']}>今月支払った</p>
          <p className={`${styles['repayment-summary__amount']} ${styles['repayment-summary__amount--borrowed']}`}>
            ¥3,200
          </p>
        </div>
      </div>
    </section>
  );
};
