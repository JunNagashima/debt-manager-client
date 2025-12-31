'use client';

import React from 'react';
import styles from './MonthFilter.module.scss';

interface MonthFilterProps {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  isNextDisabled: boolean;
}

export const MonthFilter: React.FC<MonthFilterProps> = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  isNextDisabled,
}) => {
  const formatMonth = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  return (
    <div className={styles['month-filter']}>
      <button
        className={styles['month-filter__btn']}
        onClick={onPrevMonth}
        aria-label="前月"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <span className={styles['month-filter__current']}>
        {formatMonth(currentMonth)}
      </span>
      <button
        className={styles['month-filter__btn']}
        onClick={onNextMonth}
        disabled={isNextDisabled}
        aria-label="次月"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};
