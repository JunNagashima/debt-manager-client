'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './HistoryDetailModal.module.scss';

interface RejectedDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RejectedDetailModal: React.FC<RejectedDetailModalProps> = ({
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
              className={`${styles['transaction-badge']} ${styles['transaction-badge--rejected']}`}
            >
              却下
            </span>
          </div>
          <div className={styles['transaction-detail__amount']}>¥5,000</div>
          <p className={styles['transaction-detail__direction']}>
            佐藤 花子さん からの提案
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請日</span>
            <span className={styles['confirm-row__value']}>2025/12/09</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>却下日</span>
            <span className={styles['confirm-row__value']}>2025/12/10</span>
          </div>
        </div>

        <div className={styles['rejected-message']}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          <p>この提案は却下されました</p>
        </div>

        <button className={styles['btn--full']} onClick={onClose}>
          閉じる
        </button>
      </div>
    </Modal>
  );
};
