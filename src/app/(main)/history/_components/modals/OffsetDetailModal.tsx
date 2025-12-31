'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './HistoryDetailModal.module.scss';

interface OffsetDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OffsetDetailModal: React.FC<OffsetDetailModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="取引詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span
              className={`${styles['transaction-badge']} ${styles['transaction-badge--offset']}`}
            >
              相殺
            </span>
            <span
              className={`${styles['transaction-badge']} ${styles['transaction-badge--approved']}`}
            >
              完了
            </span>
          </div>
          <div className={styles['transaction-detail__amount']}>¥3,000</div>
          <p className={styles['transaction-detail__direction']}>
            高橋 健太さん との相殺
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>完了日</span>
            <span className={styles['confirm-row__value']}>2025/12/15</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>残高を清算</span>
          </div>
        </div>

        <div className={styles['success-message']}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <p>残高が清算されました</p>
        </div>

        <button className={styles['btn--full']} onClick={onClose}>
          閉じる
        </button>
      </div>
    </Modal>
  );
};
