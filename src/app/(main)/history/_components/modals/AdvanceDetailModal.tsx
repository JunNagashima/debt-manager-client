'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './HistoryDetailModal.module.scss';

interface AdvanceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvanceDetailModal: React.FC<AdvanceDetailModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="取引詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span
              className={`${styles['transaction-badge']} ${styles['transaction-badge--advance']}`}
            >
              立替
            </span>
          </div>
          <div
            className={`${styles['transaction-detail__amount']} ${styles['transaction-detail__amount--lent']}`}
          >
            +¥2,000
          </div>
          <p className={styles['transaction-detail__direction']}>
            あなた → 鈴木 一郎さん
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>日付</span>
            <span className={styles['confirm-row__value']}>2025/12/20</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>タクシー代</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>ステータス</span>
            <span className={styles['confirm-row__value']}>
              <span
                className={`${styles['status-badge']} ${styles['status-badge--pending']}`}
              >
                承認待ち
              </span>
            </span>
          </div>
        </div>

        <button className={styles['btn--full']} onClick={onClose}>
          閉じる
        </button>
      </div>
    </Modal>
  );
};
