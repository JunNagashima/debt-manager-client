'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './DetailModal.module.scss';

interface ApprovedDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApprovedDetailModal: React.FC<ApprovedDetailModalProps> = ({
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
            <span className={`${styles['transaction-badge']} ${styles['transaction-badge--approved']}`}>
              承認済み
            </span>
          </div>
          <div className={`${styles['transaction-detail__amount']} ${styles['transaction-detail__amount--borrowed']}`}>
            ¥2,500
          </div>
          <p className={styles['transaction-detail__direction']}>
            鈴木 一郎さん → あなた
          </p>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請日</span>
            <span className={styles['confirm-row__value']}>2025/12/15</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>承認日</span>
            <span className={styles['confirm-row__value']}>2025/12/15</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>飲み物代</span>
          </div>
        </div>

        <button className={styles['btn--full']} onClick={onClose}>
          閉じる
        </button>
      </div>
    </Modal>
  );
};
