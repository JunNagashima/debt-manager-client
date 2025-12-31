'use client';

import React from 'react';
import styles from './Timeline.module.scss';

interface TimelineProps {
  filter: 'all' | 'advance' | 'repayment';
  onTransactionClick: () => void;
}

interface Transaction {
  id: string;
  type: 'advance-out' | 'advance-in' | 'repayment-out' | 'repayment-in';
  typeLabel: string;
  date: string;
  description: string;
  amount: string;
  amountType: 'lent' | 'borrowed';
  status: 'pending' | 'confirmed' | 'rejected';
  statusLabel: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  filter,
  onTransactionClick,
}) => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'advance-out',
      typeLabel: '立替（あなた→相手）',
      date: '12/19',
      description: 'ランチ代',
      amount: '+¥3,000',
      amountType: 'lent',
      status: 'pending',
      statusLabel: '承認待ち',
    },
    {
      id: '2',
      type: 'repayment-in',
      typeLabel: '返済（相手→あなた）',
      date: '12/15',
      description: '映画代の返済',
      amount: '+¥1,800',
      amountType: 'lent',
      status: 'confirmed',
      statusLabel: '確定済み',
    },
    {
      id: '3',
      type: 'advance-in',
      typeLabel: '立替（相手→あなた）',
      date: '12/10',
      description: 'カフェ代',
      amount: '-¥1,200',
      amountType: 'borrowed',
      status: 'confirmed',
      statusLabel: '確定済み',
    },
  ];

  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__group}>
        <div className={styles.timeline__date}>2025年12月</div>
        <ul className={styles.timeline__list}>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={`${styles.timeline__item} ${
                styles[`timeline__item--${transaction.type}`]
              }`}
              onClick={onTransactionClick}
            >
              <div className={styles.timeline__dot}></div>
              <div className={styles.timeline__content}>
                <div className={styles.timeline__header}>
                  <span className={styles.timeline__type}>
                    {transaction.typeLabel}
                  </span>
                  <span className={styles.timeline__time}>
                    {transaction.date}
                  </span>
                </div>
                <p className={styles.timeline__desc}>
                  {transaction.description}
                </p>
                <p
                  className={`${styles.timeline__amount} ${
                    styles[`timeline__amount--${transaction.amountType}`]
                  }`}
                >
                  {transaction.amount}
                </p>
                <span
                  className={`${styles.timeline__status} ${
                    styles[`timeline__status--${transaction.status}`]
                  }`}
                >
                  {transaction.statusLabel}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button className={styles['btn-load-more']}>
        もっと見る
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
};
