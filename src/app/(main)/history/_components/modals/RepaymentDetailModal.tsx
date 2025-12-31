'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './HistoryDetailModal.module.scss';

interface RepaymentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RepaymentDetailModal: React.FC<RepaymentDetailModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="取引詳細">
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
            className={`${styles['transaction-detail__amount']} ${styles['transaction-detail__amount--lent']}`}
          >
            +¥3,000
          </div>
          <p className={styles['transaction-detail__direction']}>
            佐藤 花子さん → あなた
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>日付</span>
            <span className={styles['confirm-row__value']}>2025/12/20</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>ランチ代の返済</span>
          </div>
        </div>

        <div className={styles['balance-change']}>
          <p className={styles['balance-change__title']}>
            この取引による残高変化
          </p>
          <div className={styles['balance-change__row']}>
            <div className={styles['balance-change__item']}>
              <span className={styles['balance-change__label']}>取引前</span>
              <span
                className={`${styles['balance-change__value']} ${styles['balance-change__value--lent']}`}
              >
                ¥9,000 貸し
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
              <span className={styles['balance-change__label']}>取引後</span>
              <span
                className={`${styles['balance-change__value']} ${styles['balance-change__value--lent']}`}
              >
                ¥6,000 貸し
              </span>
            </div>
          </div>
        </div>

        <button className={styles['btn--full']} onClick={onClose}>
          閉じる
        </button>
      </div>
    </Modal>
  );
};
