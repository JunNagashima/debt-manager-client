'use client';

import React from 'react';
import { RequestCard } from './RequestCard';
import styles from './ReceivedTab.module.scss';

type FilterType = 'all' | 'pending' | 'approved' | 'rejected';

interface SentTabProps {
  filter: FilterType;
  onPendingClick: () => void;
  onApprovedClick: () => void;
}

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

export const SentTab: React.FC<SentTabProps> = ({
  filter,
  onPendingClick,
  onApprovedClick,
}) => {
  const pendingRequests: Request[] = [
    {
      id: '1',
      user: { name: '鈴木 一郎', avatar: '鈴' },
      amount: 2000,
      date: '2025/12/20',
      memo: 'タクシー代',
      status: 'pending',
    },
  ];

  const approvedRequests: Request[] = [
    {
      id: '2',
      user: { name: '佐藤 花子', avatar: '佐' },
      amount: 3500,
      date: '2025/12/17',
      memo: 'ディナー代',
      status: 'approved',
      approvedDate: '12/17 承認',
    },
    {
      id: '3',
      user: { name: '田中 美咲', avatar: '田' },
      amount: 6500,
      date: '2025/12/12',
      memo: 'プレゼント代',
      status: 'approved',
      approvedDate: '12/13 承認',
    },
  ];

  const getFilteredRequests = (
    requests: Request[],
    status: Request['status']
  ) => {
    if (filter === 'all' || filter === status) {
      return requests;
    }
    return [];
  };

  const filteredPending = getFilteredRequests(pendingRequests, 'pending');
  const filteredApproved = getFilteredRequests(approvedRequests, 'approved');

  return (
    <div>
      {/* 承認待ちセクション */}
      {(filter === 'all' || filter === 'pending') && (
        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__title}>
              <span
                className={`${styles['status-dot']} ${styles['status-dot--pending']}`}
              ></span>
              承認待ち
            </h2>
            <span className={styles.section__count}>
              {filteredPending.length}件
            </span>
          </div>
          <ul className={styles['request-list']}>
            {filteredPending.map((request) => (
              <RequestCard
                key={request.id}
                request={request}
                type="lent"
                onClick={onPendingClick}
              />
            ))}
          </ul>
        </section>
      )}

      {/* 承認済みセクション */}
      {(filter === 'all' || filter === 'approved') && (
        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__title}>
              <span
                className={`${styles['status-dot']} ${styles['status-dot--approved']}`}
              ></span>
              承認済み
            </h2>
            <span className={styles.section__count}>
              {filteredApproved.length}件
            </span>
          </div>
          <ul className={styles['request-list']}>
            {filteredApproved.map((request) => (
              <RequestCard
                key={request.id}
                request={request}
                type="lent"
                onClick={onApprovedClick}
              />
            ))}
          </ul>
        </section>
      )}

      {/* 却下セクション */}
      {(filter === 'all' || filter === 'rejected') && (
        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__title}>
              <span
                className={`${styles['status-dot']} ${styles['status-dot--rejected']}`}
              ></span>
              却下
            </h2>
            <span className={styles.section__count}>0件</span>
          </div>
          <div className={styles['empty-state']}>
            <p className={styles['empty-state__text']}>
              却下された申請はありません
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
