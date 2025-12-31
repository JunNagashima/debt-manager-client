'use client';

import React from 'react';
import styles from './DetailActions.module.scss';

interface DetailActionsProps {
  onAdvanceClick: () => void;
  onRepaymentClick: () => void;
}

export const DetailActions: React.FC<DetailActionsProps> = ({
  onAdvanceClick,
  onRepaymentClick,
}) => {
  return (
    <section className={styles['detail-actions']}>
      <button
        className={`${styles.btn} ${styles['btn--primary']}`}
        onClick={onAdvanceClick}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        立替を申請
      </button>
      <button
        className={`${styles.btn} ${styles['btn--secondary']}`}
        onClick={onRepaymentClick}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
        返済を記録
      </button>
    </section>
  );
};
