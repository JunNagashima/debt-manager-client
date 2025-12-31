'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './RepaymentDetailModal.module.scss';

interface RepaymentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'received' | 'paid';
}

export const RepaymentDetailModal: React.FC<RepaymentDetailModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const handleDelete = () => {
    if (confirm('この記録を削除しますか？')) {
      console.log('返済記録削除');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="返済の詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span
              className={`${styles['transaction-badge']} ${styles['transaction-badge--repayment']}`}
            >
              返済
            </span>
          </div>
          <div
            className={`${styles['transaction-detail__amount']} ${
              type === 'received'
                ? styles['transaction-detail__amount--lent']
                : styles['transaction-detail__amount--borrowed']
            }`}
          >
            {type === 'received' ? '¥3,000' : '¥2,000'}
          </div>
          <p className={styles['transaction-detail__direction']}>
            {type === 'received'
              ? '佐藤 花子さん → あなた'
              : 'あなた → 鈴木 一郎さん'}
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>日付</span>
            <span className={styles['confirm-row__value']}>
              {type === 'received' ? '2025/12/20' : '2025/12/19'}
            </span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>
              {type === 'received'
                ? 'ランチ代の返済'
                : 'カフェ代の返済'}
            </span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>記録日時</span>
            <span className={styles['confirm-row__value']}>
              {type === 'received'
                ? '2025/12/20 15:30'
                : '2025/12/19 18:45'}
            </span>
          </div>
        </div>

        <div className={styles['balance-change']}>
          <p className={styles['balance-change__title']}>残高の変化</p>
          <div className={styles['balance-change__row']}>
            <div className={styles['balance-change__item']}>
              <span className={styles['balance-change__label']}>返済前</span>
              <span
                className={`${styles['balance-change__value']} ${
                  type === 'received'
                    ? styles['balance-change__value--lent']
                    : styles['balance-change__value--borrowed']
                }`}
              >
                {type === 'received' ? '¥9,000 貸し' : '¥4,500 借り'}
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
            <div className={styles['balance-change__item']}>
              <span className={styles['balance-change__label']}>返済後</span>
              <span
                className={`${styles['balance-change__value']} ${
                  type === 'received'
                    ? styles['balance-change__value--lent']
                    : styles['balance-change__value--borrowed']
                }`}
              >
                {type === 'received' ? '¥6,000 貸し' : '¥2,500 借り'}
              </span>
            </div>
          </div>
        </div>

        <div className={styles['footer--stack']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            閉じる
          </button>
          <button
            className={styles['btn--ghost-danger']}
            onClick={handleDelete}
          >
            この記録を削除
          </button>
        </div>
      </div>
    </Modal>
  );
};
