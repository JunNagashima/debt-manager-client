'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './ApproveModal.module.scss';

interface ApproveAdvanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApproveAdvanceModal: React.FC<ApproveAdvanceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleApprove = () => {
    console.log('立替申請承認');
    onClose();
  };

  const handleReject = () => {
    console.log('立替申請却下');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="立替申請の確認">
      <div className={styles.modal}>
        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請者</span>
            <span className={styles['confirm-row__value']}>佐藤 花子さん</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>金額</span>
            <span
              className={`${styles['confirm-row__value']} ${styles['confirm-row__value--amount']}`}
            >
              ¥3,000
            </span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>日付</span>
            <span className={styles['confirm-row__value']}>2025/12/19</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>メモ</span>
            <span className={styles['confirm-row__value']}>ランチ代</span>
          </div>
        </div>

        <p
          className={`${styles['confirm-note']} ${styles['confirm-note--warning']}`}
        >
          承認すると、あなたの借りが
          <br />
          <strong>¥3,000 増えます</strong>
        </p>

        <div className={styles.footer}>
          <button className={`${styles.btn} ${styles['btn--danger']}`} onClick={handleReject}>
            却下
          </button>
          <button className={`${styles.btn} ${styles['btn--primary']}`} onClick={handleApprove}>
            承認する
          </button>
        </div>
      </div>
    </Modal>
  );
};
