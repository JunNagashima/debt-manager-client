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
    if (confirm('この申請を取り消しますか？')) {
      console.log('申請取消');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="立替申請の詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span className={`${styles['transaction-badge']} ${styles['transaction-badge--advance']}`}>
              立替
            </span>
            <span className={`${styles['transaction-badge']} ${styles['transaction-badge--pending']}`}>
              承認待ち
            </span>
          </div>
          <div className={`${styles['transaction-detail__amount']} ${styles['transaction-detail__amount--lent']}`}>
            ¥2,000
          </div>
          <p className={styles['transaction-detail__direction']}>
            あなた → 鈴木 一郎さん
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請日</span>
            <span className={styles['confirm-row__value']}>2025/12/20</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>タクシー代</span>
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
          <button className={styles['btn--ghost-danger']} onClick={handleCancel}>
            この申請を取り消す
          </button>
        </div>
      </div>
    </Modal>
  );
};
