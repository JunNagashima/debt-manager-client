'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './FriendConfirmModal.module.scss';

interface RemoveFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RemoveFriendModal: React.FC<RemoveFriendModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleRemove = () => {
    console.log('フレンド解除');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="フレンドを解除">
      <div className={styles.modal}>
        <div className={styles['user-card']}>
          <div className={styles['user-card__avatar']}>佐</div>
          <p className={styles['user-card__name']}>佐藤 花子</p>
          <p className={styles['user-card__id']}>@sato_hanako</p>
        </div>
        <div className={styles['warning-box']}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <div className={styles['warning-box__content']}>
            <p className={styles['warning-box__title']}>
              未清算の残高があります
            </p>
            <p className={styles['warning-box__desc']}>
              このフレンドとの残高: <strong>¥6,000 貸し</strong>
            </p>
          </div>
        </div>
        <p className={styles['confirm-note']}>
          フレンドを解除しますか？
          <br />
          <span className={styles['confirm-note__sub']}>
            取引履歴は保持されます
          </span>
        </p>
        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--danger']} onClick={handleRemove}>
            解除する
          </button>
        </div>
      </div>
    </Modal>
  );
};
