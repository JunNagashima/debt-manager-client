'use client';

import React from 'react';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  onClick: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ onClick }) => {
  return (
    <section className={styles['profile-card']} onClick={onClick}>
      <div className={styles['profile-card__avatar']}>
        <span className={styles['profile-card__avatar-text']}>🌸</span>
        <button className={styles['profile-card__avatar-edit']}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
      </div>
      <div className={styles['profile-card__info']}>
        <p className={styles['profile-card__name']}>山田 花子</p>
        <p className={styles['profile-card__id']}>@yamada_hanako</p>
      </div>
      <svg
        className={styles['profile-card__arrow']}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </section>
  );
};
