'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './ApproveModal.module.scss';

interface ApproveFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApproveFriendModal: React.FC<ApproveFriendModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleApprove = () => {
    console.log('フレンド申請承認');
    onClose();
  };

  const handleCancel = () => {
    console.log('フレンド申請キャンセル');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="フレンド申請" size="sm">
      <div className={styles.modal}>
        <div className={styles['user-card']}>
          <div className={styles['user-card__avatar']}>山</div>
          <p className={styles['user-card__name']}>山本 太郎</p>
          <p className={styles['user-card__id']}>@yamamoto_taro</p>
        </div>

        <p className={styles['confirm-note']}>フレンドになりますか？</p>

        <div className={styles.footer}>
          <button className={`${styles.btn} ${styles['btn--secondary']}`} onClick={handleCancel}>
            キャンセル
          </button>
          <button className={`${styles.btn} ${styles['btn--primary']}`} onClick={handleApprove}>
            承認する
          </button>
        </div>
      </div>
    </Modal>
  );
};
