'use client';

import React from 'react';
import { OffsetCard } from './OffsetCard';
import styles from './OffsetTab.module.scss';

interface SentTabProps {
  onPendingClick: () => void;
  onApprovedClick: () => void;
}

interface OffsetRequest {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  amount: number;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
  approvedDate?: string;
  preview: {
    before: { value: number; type: 'lent' | 'borrowed' };
    after: { value: number; type: 'lent' | 'borrowed' | 'settled' };
  };
}

export const SentTab: React.FC<SentTabProps> = ({
  onPendingClick,
  onApprovedClick,
}) => {
  const pendingRequests: OffsetRequest[] = [
    {
      id: '1',
      user: { name: '田中 美咲', avatar: '田' },
      amount: 4000,
      date: '2025/12/19 申請',
      status: 'pending',
      preview: {
        before: { value: 6500, type: 'lent' },
        after: { value: 2500, type: 'lent' },
      },
    },
  ];

  const approvedRequests: OffsetRequest[] = [
    {
      id: '2',
      user: { name: '鈴木 一郎', avatar: '鈴' },
      amount: 1500,
      date: '2025/11/28 完了',
      status: 'approved',
      approvedDate: '11/28 承認',
      preview: {
        before: { value: 1500, type: 'borrowed' },
        after: { value: 0, type: 'settled' },
      },
    },
  ];

  return (
    <div>
      {/* 承認待ちセクション */}
      <section className={styles.section}>
        <div className={styles.section__header}>
          <h3 className={styles.section__title}>
            <span
              className={`${styles['status-dot']} ${styles['status-dot--pending']}`}
            ></span>
            承認待ち
          </h3>
          <span className={styles.section__count}>
            {pendingRequests.length}件
          </span>
        </div>
        <ul className={styles['offset-list']}>
          {pendingRequests.map((request) => (
            <OffsetCard
              key={request.id}
              request={request}
              onClick={onPendingClick}
            />
          ))}
        </ul>
      </section>

      {/* 完了済みセクション */}
      <section className={styles.section}>
        <div className={styles.section__header}>
          <h3 className={styles.section__title}>
            <span
              className={`${styles['status-dot']} ${styles['status-dot--approved']}`}
            ></span>
            完了済み
          </h3>
          <span className={styles.section__count}>
            {approvedRequests.length}件
          </span>
        </div>
        <ul className={styles['offset-list']}>
          {approvedRequests.map((request) => (
            <OffsetCard
              key={request.id}
              request={request}
              onClick={onApprovedClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
