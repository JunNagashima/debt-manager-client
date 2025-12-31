'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './DetailModal.module.scss';

interface RejectedDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RejectedDetailModal: React.FC<RejectedDetailModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="立替申請の詳細">
      <div className={styles.modal}>
        <div className={styles['transaction-detail']}>
          <div className={styles['transaction-detail__type']}>
            <span className={`${styles['transaction-badge']} ${styles['transaction-badge--advance']}`}>
              立替
            </span>
            <span className={`${styles['transaction-badge']} ${styles['transaction-badge--rejected']}`}>
              却下
            </span>
          </div>
          <div className={styles['transaction-detail__amount']}>¥1,000</div>
          <p className={styles['transaction-detail__direction']}>
            高橋 健太さん → あなた
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請日</span>
            <span className={styles['confirm-row__value']}>2025/12/05</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>却下日</span>
            <span className={styles['confirm-row__value']}>2025/12/06</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>交通費</span>
          </div>
        </div>

        <button className={styles['btn--full']} onClick={onClose}>
          閉じる
        </button>
      </div>
    </Modal>
  );
};
