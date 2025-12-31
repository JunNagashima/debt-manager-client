'use client';

import React from 'react';
import styles from './OffsetCandidates.module.scss';

interface OffsetCandidatesProps {
  onProposeClick: () => void;
}

interface Candidate {
  id: string;
  name: string;
  avatar: string;
  offsetAmount: number;
}

export const OffsetCandidates: React.FC<OffsetCandidatesProps> = ({
  onProposeClick,
}) => {
  const candidates: Candidate[] = [
    {
      id: '1',
      name: '鈴木 一郎',
      avatar: '鈴',
      offsetAmount: 2500,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>相殺できるフレンド</h2>
      </div>
      <div className={styles['offset-candidates']}>
        {candidates.map((candidate) => (
          <div key={candidate.id} className={styles['offset-candidate']}>
            <div className={styles['offset-candidate__avatar']}>
              {candidate.avatar}
            </div>
            <div className={styles['offset-candidate__info']}>
              <p className={styles['offset-candidate__name']}>
                {candidate.name}
              </p>
              <p className={styles['offset-candidate__balance']}>
                相殺可能: <span>¥{candidate.offsetAmount.toLocaleString()}</span>
              </p>
            </div>
            <button
              className={styles['offset-candidate__btn']}
              onClick={onProposeClick}
            >
              提案する
            </button>
          </div>
        ))}
      </div>
      <p className={styles.section__hint}>
        ※ お互いに貸し借りがあるフレンドのみ表示されます
      </p>
    </section>
  );
};
