'use client';

import React from 'react';
import styles from './HistorySummary.module.scss';

interface HistorySummaryProps {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  isNextDisabled: boolean;
}

export const HistorySummary: React.FC<HistorySummaryProps> = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  isNextDisabled,
}) => {
  const formatMonth = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  return (
    <section className={styles['history-summary']}>
      <div className={styles['history-summary__header']}>
        <button
          className={styles['history-summary__nav']}
          onClick={onPrevMonth}
          aria-label="前月"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h2 className={styles['history-summary__month']}>
          {formatMonth(currentMonth)}
        </h2>
        <button
          className={styles['history-summary__nav']}
          onClick={onNextMonth}
          disabled={isNextDisabled}
          aria-label="次月"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className={styles['history-summary__stats']}>
        <div className={styles['history-summary__stat']}>
          <span className={styles['history-summary__stat-label']}>
            取引件数
          </span>
          <span className={styles['history-summary__stat-value']}>12件</span>
        </div>
        <div className={styles['history-summary__stat']}>
          <span className={styles['history-summary__stat-label']}>
            受取合計
          </span>
          <span
            className={`${styles['history-summary__stat-value']} ${styles['history-summary__stat-value--lent']}`}
          >
            +¥15,800
          </span>
        </div>
        <div className={styles['history-summary__stat']}>
          <span className={styles['history-summary__stat-label']}>
            支払合計
          </span>
          <span
            className={`${styles['history-summary__stat-value']} ${styles['history-summary__stat-value--borrowed']}`}
          >
            -¥8,200
          </span>
        </div>
      </div>
    </section>
  );
};
