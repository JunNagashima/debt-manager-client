'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './OffsetModal.module.scss';

interface OffsetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OffsetModal: React.FC<OffsetModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleSubmit = () => {
    console.log('相殺提案');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="相殺を提案">
      <div className={styles.modal}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>相手</label>
          <div className={styles['form-static']}>
            <div className={styles['form-static__avatar']}>佐</div>
            <span className={styles['form-static__name']}>佐藤 花子</span>
          </div>
        </div>

        <div className={styles['offset-info']}>
          <div className={styles['offset-info__card']}>
            <p className={styles['offset-info__label']}>相殺可能額</p>
            <p className={styles['offset-info__amount']}>¥6,000</p>
            <p className={styles['offset-info__note']}>全額相殺で清算完了</p>
          </div>
        </div>

        <div className={styles['offset-result']}>
          <p className={styles['offset-result__title']}>相殺後の残高</p>
          <div className={styles['offset-result__change']}>
            <div className={styles['offset-result__before']}>
              <span className={styles['offset-result__label']}>現在</span>
              <span
                className={`${styles['offset-result__value']} ${styles['offset-result__value--lent']}`}
              >
                ¥6,000 貸し
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

        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleSubmit}>
            提案する
          </button>
        </div>
      </div>
    </Modal>
  );
};
