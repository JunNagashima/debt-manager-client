'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './DetailModal.module.scss';

interface SentPendingDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SentPendingDetailModal: React.FC<SentPendingDetailModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleCancel = () => {
    if (confirm('この提案を取り消しますか？')) {
      console.log('相殺提案取消');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="相殺申請の詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span
              className={`${styles['transaction-badge']} ${styles['transaction-badge--offset']}`}
            >
              相殺
            </span>
            <span
              className={`${styles['transaction-badge']} ${styles['transaction-badge--pending']}`}
            >
              承認待ち
            </span>
          </div>
          <div className={styles['transaction-detail__amount']}>¥4,000</div>
          <p className={styles['transaction-detail__direction']}>
            田中 美咲さん への提案
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請日</span>
            <span className={styles['confirm-row__value']}>2025/12/19</span>
          </div>
        </div>

        <div className={styles['offset-result']}>
          <p className={styles['offset-result__title']}>相殺後の残高（予定）</p>
          <div className={styles['offset-result__change']}>
            <div className={styles['offset-result__before']}>
              <span className={styles['offset-result__label']}>現在</span>
              <span
                className={`${styles['offset-result__value']} ${styles['offset-result__value--lent']}`}
              >
                ¥6,500 貸し
              </span>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className={styles['offset-result__after']}>
              <span className={styles['offset-result__label']}>相殺後</span>
              <span
                className={`${styles['offset-result__value']} ${styles['offset-result__value--lent']}`}
              >
                ¥2,500 貸し
              </span>
            </div>
          </div>
        </div>

        <div className={styles['pending-notice']}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p>相手の承認をお待ちください</p>
        </div>

        <div className={styles['footer--stack']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            閉じる
          </button>
          <button
            className={styles['btn--ghost-danger']}
            onClick={handleCancel}
          >
            この提案を取り消す
          </button>
        </div>
      </div>
    </Modal>
  );
};
