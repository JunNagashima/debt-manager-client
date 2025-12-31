'use client';

import React from 'react';
import styles from './RequestCard.module.scss';

interface Request {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  amount: number;
  date: string;
  memo: string;
  status: 'pending' | 'approved' | 'rejected';
  approvedDate?: string;
}

interface RequestCardProps {
  request: Request;
  type: 'lent' | 'borrowed' | 'neutral';
  onClick: () => void;
}

export const RequestCard: React.FC<RequestCardProps> = ({
  request,
  type,
  onClick,
}) => {
  const getStatusLabel = (status: Request['status']) => {
    switch (status) {
      case 'pending':
        return type === 'lent' ? '相手の承認待ち' : '承認待ち';
      case 'approved':
        return '承認済み';
      case 'rejected':
        return '却下';
    }
  };

  return (
    <li
      className={`${styles['request-card']} ${
        request.status === 'pending' ? styles['request-card--pending'] : ''
      } ${request.status === 'rejected' ? styles['request-card--rejected'] : ''}`}
      onClick={onClick}
    >
      <div className={styles['request-card__header']}>
        <div className={styles['request-card__user']}>
          <div className={styles['request-card__avatar']}>
            {request.user.avatar}
          </div>
          <div className={styles['request-card__info']}>
            <p className={styles['request-card__name']}>{request.user.name}</p>
            <p className={styles['request-card__date']}>{request.date}</p>
          </div>
        </div>
        <div
          className={`${styles['request-card__amount']} ${
            type === 'lent'
              ? styles['request-card__amount--lent']
              : type === 'borrowed'
              ? styles['request-card__amount--borrowed']
              : ''
          }`}
        >
          ¥{request.amount.toLocaleString()}
        </div>
      </div>
      <div className={styles['request-card__body']}>
        <p className={styles['request-card__memo']}>{request.memo}</p>
      </div>
      <div className={styles['request-card__footer']}>
        <span
          className={`${styles['request-card__status']} ${
            styles[`request-card__status--${request.status}`]
          }`}
        >
          {getStatusLabel(request.status)}
        </span>
        {request.status === 'pending' ? (
          <span className={styles['request-card__action']}>
            {type === 'borrowed' ? '確認する →' : '詳細を見る →'}
          </span>
        ) : (
          <span className={styles['request-card__approved-date']}>
            {request.approvedDate}
          </span>
        )}
      </div>
    </li>
  );
};
