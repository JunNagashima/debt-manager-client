'use client';

import React from 'react';
import { OffsetCard } from './OffsetCard';
import styles from './OffsetTab.module.scss';

interface ReceivedTabProps {
  onApproveClick: () => void;
  onApprovedClick: () => void;
  onRejectedClick: () => void;
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

export const ReceivedTab: React.FC<ReceivedTabProps> = ({
  onApproveClick,
  onApprovedClick,
  onRejectedClick,
}) => {
  const pendingRequests: OffsetRequest[] = [
    {
      id: '1',
      user: { name: '鈴木 一郎', avatar: '鈴' },
      amount: 2500,
      date: '2025/12/20 申請',
      status: 'pending',
      preview: {
        before: { value: 2500, type: 'borrowed' },
        after: { value: 0, type: 'settled' },
      },
    },
  ];

  const approvedRequests: OffsetRequest[] = [
    {
      id: '2',
      user: { name: '高橋 健太', avatar: '高' },
      amount: 3000,
      date: '2025/12/15 完了',
      status: 'approved',
      approvedDate: '12/15 承認',
      preview: {
        before: { value: 3000, type: 'borrowed' },
        after: { value: 0, type: 'settled' },
      },
    },
  ];

  const rejectedRequests: OffsetRequest[] = [
    {
      id: '3',
      user: { name: '佐藤 花子', avatar: '佐' },
      amount: 5000,
      date: '2025/12/10 却下',
      status: 'rejected',
      approvedDate: '12/10 却下',
      preview: {
        before: { value: 5000, type: 'lent' },
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
              onClick={onApproveClick}
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
            {approvedRequests.length + rejectedRequests.length}件
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
          {rejectedRequests.map((request) => (
            <OffsetCard
              key={request.id}
              request={request}
              onClick={onRejectedClick}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};
