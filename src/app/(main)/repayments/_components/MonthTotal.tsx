'use client';

import React from 'react';
import styles from './MonthTotal.module.scss';

type TabType = 'received' | 'paid';

interface MonthTotalProps {
  activeTab: TabType;
}

export const MonthTotal: React.FC<MonthTotalProps> = ({ activeTab }) => {
  return (
    <div className={styles['month-total']}>
      {activeTab === 'received' ? (
        <div className={styles['month-total__row']}>
          <span className={styles['month-total__label']}>今月の受取合計</span>
          <span
            className={`${styles['month-total__value']} ${styles['month-total__value--lent']}`}
          >
            ¥8,500
          </span>
        </div>
      ) : (
        <div className={styles['month-total__row']}>
          <span className={styles['month-total__label']}>今月の支払合計</span>
          <span
            className={`${styles['month-total__value']} ${styles['month-total__value--borrowed']}`}
          >
            ¥3,200
          </span>
        </div>
      )}
    </div>
  );
};
