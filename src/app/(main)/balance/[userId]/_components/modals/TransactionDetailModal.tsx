'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './TransactionDetailModal.module.scss';

interface TransactionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TransactionDetailModal: React.FC<TransactionDetailModalProps> = ({
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
    <Modal isOpen={isOpen} onClose={onClose} title="取引詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span className={`${styles['transaction-badge']} ${styles['transaction-badge--advance']}`}>
              立替
            </span>
          </div>
          <div className={`${styles['transaction-detail__amount']} ${styles['transaction-detail__amount--lent']}`}>
            +¥3,000
          </div>
          <p className={styles['transaction-detail__direction']}>
            あなた → 佐藤 花子さん
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>日付</span>
            <span className={styles['confirm-row__value']}>2025/12/19</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>ランチ代</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>ステータス</span>
            <span className={styles['confirm-row__value']}>
              <span className={styles.status}>承認待ち</span>
            </span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請日時</span>
            <span className={styles['confirm-row__value']}>2025/12/19 14:30</span>
          </div>
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
