'use client';

import React from 'react';
import { RepaymentCard } from './RepaymentCard';
import styles from './RepaymentTab.module.scss';

interface ReceivedTabProps {
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

export const ReceivedTab: React.FC<ReceivedTabProps> = ({ onDetailClick }) => {
  const repayments: Repayment[] = [
    {
      id: '1',
      user: { name: '佐藤 花子', avatar: '佐' },
      amount: 3000,
      date: '2025/12/20',
      memo: 'ランチ代の返済',
      balance: { value: 6000, type: 'lent' },
    },
    {
      id: '2',
      user: { name: '田中 美咲', avatar: '田' },
      amount: 2500,
      date: '2025/12/18',
      memo: '映画代の返済',
      balance: { value: 6500, type: 'lent' },
    },
    {
      id: '3',
      user: { name: '高橋 健太', avatar: '高' },
      amount: 3000,
      date: '2025/12/15',
      memo: '飲み会代精算',
      balance: { value: 0, type: 'settled' },
    },
  ];

  return (
    <ul className={styles['repayment-list']}>
      {repayments.map((repayment) => (
        <RepaymentCard
          key={repayment.id}
          repayment={repayment}
          type="received"
          onClick={onDetailClick}
        />
      ))}
    </ul>
  );
};
