'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './ApproveOffsetModal.module.scss';

interface OffsetApproveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OffsetApproveModal: React.FC<OffsetApproveModalProps> = ({
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
          <div className={styles['confirm-row']}>
            <span className={styles['confirm-row__label']}>申請日</span>
            <span className={styles['confirm-row__value']}>2025/12/20</span>
          </div>
        </div>

        <div className={styles['offset-result']}>
          <p className={styles['offset-result__title']}>相殺後の残高</p>
          <div className={styles['offset-result__change']}>
            <div className={styles['offset-result__before']}>
              <span className={styles['offset-result__label']}>現在</span>
              <span
                className={`${styles['offset-result__value']} ${styles['offset-result__value--borrowed']}`}
              >
                ¥2,500 借り
              </span>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className={styles['offset-result__after']}>
              <span className={styles['offset-result__label']}>相殺後</span>
              <span
                className={`${styles['offset-result__value']} ${styles['offset-result__value--settled']}`}
              >
                ¥0 清算
              </span>
            </div>
          </div>
        </div>

        <div className={styles['impact-notice']}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <div className={styles['impact-notice__content']}>
            <p className={styles['impact-notice__title']}>承認すると...</p>
            <p className={styles['impact-notice__desc']}>
              鈴木さんとの残高が<strong>清算</strong>されます
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles['btn--danger']} onClick={handleReject}>
            却下
          </button>
          <button className={styles['btn--primary']} onClick={handleApprove}>
            承認する
          </button>
        </div>
      </div>
    </Modal>
  );
};
