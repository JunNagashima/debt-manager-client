'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './OffsetModal.module.scss';

interface CreateOffsetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateOffsetModal: React.FC<CreateOffsetModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleSubmit = () => {
    console.log('相殺提案作成');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="相殺を提案">
      <div className={styles.modal}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>相手</label>
          <div className={styles['form-static']}>
            <div className={styles['form-static__avatar']}>鈴</div>
            <span className={styles['form-static__name']}>鈴木 一郎</span>
          </div>
        </div>

        <div className={styles['offset-info']}>
          <div className={styles['offset-info__card']}>
            <p className={styles['offset-info__label']}>相殺可能額</p>
            <p className={styles['offset-info__amount']}>¥2,500</p>
          </div>
        </div>

        <div className={styles['offset-breakdown']}>
          <p className={styles['offset-breakdown__title']}>現在の貸し借り</p>
          <div className={styles['offset-breakdown__row']}>
            <span className={styles['offset-breakdown__label']}>
              あなた → 鈴木さん
            </span>
            <span
              className={`${styles['offset-breakdown__value']} ${styles['offset-breakdown__value--lent']}`}
            >
              ¥5,000 貸し
            </span>
          </div>
          <div className={styles['offset-breakdown__row']}>
            <span className={styles['offset-breakdown__label']}>
              鈴木さん → あなた
            </span>
            <span
              className={`${styles['offset-breakdown__value']} ${styles['offset-breakdown__value--borrowed']}`}
            >
              ¥2,500 貸し
            </span>
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
