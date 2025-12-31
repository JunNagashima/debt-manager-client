'use client';

import React from 'react';
import { RequestCard } from './RequestCard';
import styles from './ReceivedTab.module.scss';

type FilterType = 'all' | 'pending' | 'approved' | 'rejected';

interface ReceivedTabProps {
  filter: FilterType;
  onApproveClick: () => void;
  onApprovedClick: () => void;
  onRejectedClick: () => void;
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

export const ReceivedTab: React.FC<ReceivedTabProps> = ({
  filter,
  onApproveClick,
  onApprovedClick,
  onRejectedClick,
}) => {
  const pendingRequests: Request[] = [
    {
      id: '1',
      user: { name: '佐藤 花子', avatar: '佐' },
      amount: 3000,
      date: '2025/12/19',
      memo: 'ランチ代',
      status: 'pending',
    },
    {
      id: '2',
      user: { name: '田中 美咲', avatar: '田' },
      amount: 1500,
      date: '2025/12/18',
      memo: 'カフェ代',
      status: 'pending',
    },
  ];

  const approvedRequests: Request[] = [
    {
      id: '3',
      user: { name: '鈴木 一郎', avatar: '鈴' },
      amount: 2500,
      date: '2025/12/15',
      memo: '飲み物代',
      status: 'approved',
      approvedDate: '12/15 承認',
    },
    {
      id: '4',
      user: { name: '佐藤 花子', avatar: '佐' },
      amount: 4500,
      date: '2025/12/10',
      memo: '映画チケット代',
      status: 'approved',
      approvedDate: '12/10 承認',
    },
  ];

  const rejectedRequests: Request[] = [
    {
      id: '5',
      user: { name: '高橋 健太', avatar: '高' },
      amount: 1000,
      date: '2025/12/05',
      memo: '交通費',
      status: 'rejected',
      approvedDate: '12/06 却下',
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
  const filteredRejected = getFilteredRequests(rejectedRequests, 'rejected');

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
                type="borrowed"
                onClick={onApproveClick}
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
                type="borrowed"
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
            <span className={styles.section__count}>
              {filteredRejected.length}件
            </span>
          </div>
          <ul className={styles['request-list']}>
            {filteredRejected.map((request) => (
              <RequestCard
                key={request.id}
                request={request}
                type="neutral"
                onClick={onRejectedClick}
              />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
