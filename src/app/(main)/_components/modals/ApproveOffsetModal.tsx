'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './ApproveModal.module.scss';

interface ApproveOffsetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApproveOffsetModal: React.FC<ApproveOffsetModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleApprove = () => {
    console.log('相殺申請承認');
    onClose();
  };

  const handleReject = () => {
    console.log('相殺申請却下');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="相殺申請の確認">
      <div className={styles.modal}>
        <div className={styles['confirm-card']}>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請者</span>
            <span className={styles['confirm-row__value']}>鈴木 一郎さん</span>
          </div>
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>相殺額</span>
            <span
              className={`${styles['confirm-row__value']} ${styles['confirm-row__value--amount']}`}
            >
              ¥2,500
            </span>
          </div>
        </div>

        <div className={styles['confirm-card']}>
          <div className={styles['offset-result']}>
            <p className={styles['offset-result__label']}>相殺後の残高</p>
            <div className={styles['offset-result__flow']}>
              <span className={styles['offset-result__before']}>
                ¥2,500 借り
              </span>
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
              <span className={styles['offset-result__after']}>¥0 清算</span>
            </div>
          </div>
        </div>

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
