'use client';

import React from 'react';
import styles from './PendingRequestsSection.module.scss';

interface PendingRequestsSectionProps {
  onCancelClick: () => void;
}

interface PendingRequest {
  id: string;
  name: string;
  userId: string;
  avatar: string;
}

export const PendingRequestsSection: React.FC<PendingRequestsSectionProps> = ({
  onCancelClick,
}) => {
  const requests: PendingRequest[] = [
    {
      id: '1',
      name: '木村 健一',
      userId: '@kimura_k',
      avatar: '木',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>申請中</h2>
        <span className={styles.section__count}>{requests.length}件</span>
      </div>
      <ul className={styles['friend-pending-list']}>
        {requests.map((request) => (
          <li key={request.id} className={styles['friend-pending-card']}>
            <div className={styles['friend-pending-card__user']}>
              <div className={styles['friend-pending-card__avatar']}>
                {request.avatar}
              </div>
              <div className={styles['friend-pending-card__info']}>
                <p className={styles['friend-pending-card__name']}>
                  {request.name}
                </p>
                <p className={styles['friend-pending-card__id']}>
                  {request.userId}
                </p>
              </div>
            </div>
            <div className={styles['friend-pending-card__status']}>
              <span className={styles['friend-pending-card__badge']}>
                承認待ち
              </span>
              <button
                className={styles['friend-pending-card__cancel']}
                onClick={onCancelClick}
              >
                取り消す
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
