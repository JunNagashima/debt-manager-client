'use client';

import React from 'react';
import { RepaymentCard } from './RepaymentCard';
import styles from './RepaymentTab.module.scss';

interface PaidTabProps {
  onDetailClick: () => void;
}

interface Repayment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  amount: number;
  date: string;
  memo: string;
  balance: {
    value: number;
    type: 'lent' | 'borrowed' | 'settled';
  };
}

export const PaidTab: React.FC<PaidTabProps> = ({ onDetailClick }) => {
  const repayments: Repayment[] = [
    {
      id: '1',
      user: { name: '鈴木 一郎', avatar: '鈴' },
      amount: 2000,
      date: '2025/12/19',
      memo: 'カフェ代の返済',
      balance: { value: 2500, type: 'borrowed' },
    },
    {
      id: '2',
      user: { name: '佐藤 花子', avatar: '佐' },
      amount: 1200,
      date: '2025/12/10',
      memo: '交通費の返済',
      balance: { value: 6000, type: 'lent' },
    },
  ];

  return (
    <ul className={styles['repayment-list']}>
      {repayments.map((repayment) => (
        <RepaymentCard
          key={repayment.id}
          repayment={repayment}
          type="paid"
          onClick={onDetailClick}
        />
      ))}
    </ul>
  );
};
