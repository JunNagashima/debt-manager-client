'use client';

import React from 'react';
import styles from './RepaymentCard.module.scss';

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

interface RepaymentCardProps {
  repayment: Repayment;
  type: 'received' | 'paid';
  onClick: () => void;
}

export const RepaymentCard: React.FC<RepaymentCardProps> = ({
  repayment,
  type,
  onClick,
}) => {
  const getBalanceText = (balance: Repayment['balance']) => {
    if (balance.value === 0) return '¥0 清算済み';
    if (balance.type === 'lent') return `¥${balance.value.toLocaleString()} 貸し`;
    return `¥${balance.value.toLocaleString()} 借り`;
  };

  return (
    <li className={styles['repayment-card']} onClick={onClick}>
      <div className={styles['repayment-card__main']}>
        <div className={styles['repayment-card__user']}>
          <div className={styles['repayment-card__avatar']}>
            {repayment.user.avatar}
          </div>
          <div className={styles['repayment-card__info']}>
            <p className={styles['repayment-card__name']}>
              {repayment.user.name}
            </p>
            <p className={styles['repayment-card__date']}>{repayment.date}</p>
          </div>
        </div>
        <div
          className={`${styles['repayment-card__amount']} ${
            type === 'received'
              ? styles['repayment-card__amount--received']
              : styles['repayment-card__amount--paid']
          }`}
        >
          <span className={styles['repayment-card__direction']}>
            {type === 'received' ? '受取' : '支払'}
          </span>
          ¥{repayment.amount.toLocaleString()}
        </div>
      </div>
      <div className={styles['repayment-card__detail']}>
        <p className={styles['repayment-card__memo']}>{repayment.memo}</p>
        <div className={styles['repayment-card__balance']}>
          残高:{' '}
          <span
            className={`${styles['repayment-card__balance-value']} ${
              styles[`repayment-card__balance-value--${repayment.balance.type}`]
            }`}
          >
            {getBalanceText(repayment.balance)}
          </span>
        </div>
      </div>
    </li>
  );
};
