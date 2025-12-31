'use client';

import React from 'react';
import styles from './OffsetCard.module.scss';

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

interface OffsetCardProps {
  request: OffsetRequest;
  onClick: () => void;
}

export const OffsetCard: React.FC<OffsetCardProps> = ({ request, onClick }) => {
  const getStatusLabel = (status: OffsetRequest['status']) => {
    switch (status) {
      case 'pending':
        return '承認待ち';
      case 'approved':
        return '承認済み';
      case 'rejected':
        return '却下';
    }
  };

  const getPreviewValue = (
    value: number,
    type: 'lent' | 'borrowed' | 'settled'
  ) => {
    if (type === 'settled') return '¥0 清算';
    if (type === 'lent') return `¥${value.toLocaleString()} 貸し`;
    return `¥${value.toLocaleString()} 借り`;
  };

  return (
    <li
      className={`${styles['offset-card']} ${
        request.status === 'pending' ? styles['offset-card--pending'] : ''
      } ${request.status === 'rejected' ? styles['offset-card--rejected'] : ''}`}
      onClick={onClick}
    >
      <div className={styles['offset-card__header']}>
        <div className={styles['offset-card__user']}>
          <div className={styles['offset-card__avatar']}>
            {request.user.avatar}
          </div>
          <div className={styles['offset-card__info']}>
            <p className={styles['offset-card__name']}>{request.user.name}</p>
            <p className={styles['offset-card__date']}>{request.date}</p>
          </div>
        </div>
        <span
          className={`${styles['offset-card__status']} ${
            styles[`offset-card__status--${request.status}`]
          }`}
        >
          {getStatusLabel(request.status)}
        </span>
      </div>

      <div className={styles['offset-card__body']}>
        <div className={styles['offset-card__amount']}>
          <span className={styles['offset-card__amount-label']}>相殺額</span>
          <span className={styles['offset-card__amount-value']}>
            ¥{request.amount.toLocaleString()}
          </span>
        </div>

        {request.status === 'pending' && (
          <div className={styles['offset-card__preview']}>
            <div className={styles['offset-card__before']}>
              <span className={styles['offset-card__preview-label']}>現在</span>
              <span
                className={`${styles['offset-card__preview-value']} ${
                  styles[
                    `offset-card__preview-value--${request.preview.before.type}`
                  ]
                }`}
              >
                {getPreviewValue(
                  request.preview.before.value,
                  request.preview.before.type
                )}
              </span>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className={styles['offset-card__after']}>
              <span className={styles['offset-card__preview-label']}>
                相殺後
              </span>
              <span
                className={`${styles['offset-card__preview-value']} ${
                  styles[
                    `offset-card__preview-value--${request.preview.after.type}`
                  ]
                }`}
              >
                {getPreviewValue(
                  request.preview.after.value,
                  request.preview.after.type
                )}
              </span>
            </div>
          </div>
        )}
      </div>

      {request.status === 'pending' && (
        <div className={styles['offset-card__footer']}>
          <span className={styles['offset-card__action']}>確認する →</span>
        </div>
      )}
    </li>
  );
};
