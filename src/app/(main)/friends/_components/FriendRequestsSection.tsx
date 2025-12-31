'use client';

import React from 'react';
import styles from './FriendRequestsSection.module.scss';

interface FriendRequestsSectionProps {
  onAcceptClick: () => void;
  onRejectClick: () => void;
}

interface FriendRequest {
  id: string;
  name: string;
  userId: string;
  avatar: string;
}

export const FriendRequestsSection: React.FC<FriendRequestsSectionProps> = ({
  onAcceptClick,
  onRejectClick,
}) => {
  const requests: FriendRequest[] = [
    {
      id: '1',
      name: '山本 太郎',
      userId: '@yamamoto_taro',
      avatar: '山',
    },
    {
      id: '2',
      name: '中村 さくら',
      userId: '@nakamura_s',
      avatar: '中',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>
          フレンド申請
          <span className={styles.section__badge}>{requests.length}</span>
        </h2>
      </div>
      <ul className={styles['friend-request-list']}>
        {requests.map((request) => (
          <li key={request.id} className={styles['friend-request-card']}>
            <div className={styles['friend-request-card__user']}>
              <div className={styles['friend-request-card__avatar']}>
                {request.avatar}
              </div>
              <div className={styles['friend-request-card__info']}>
                <p className={styles['friend-request-card__name']}>
                  {request.name}
                </p>
                <p className={styles['friend-request-card__id']}>
                  {request.userId}
                </p>
              </div>
            </div>
            <div className={styles['friend-request-card__actions']}>
              <button
                className={`${styles['friend-request-card__btn']} ${styles['friend-request-card__btn--reject']}`}
                onClick={onRejectClick}
                aria-label="却下"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <button
                className={`${styles['friend-request-card__btn']} ${styles['friend-request-card__btn--accept']}`}
                onClick={onAcceptClick}
                aria-label="承認"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
