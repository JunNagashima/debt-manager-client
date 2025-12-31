'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './FriendConfirmModal.module.scss';

interface AcceptConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcceptConfirmModal: React.FC<AcceptConfirmModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleAccept = () => {
    console.log('フレンド申請承認');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="フレンド申請">
      <div className={styles.modal}>
        <div className={styles['user-card']}>
          <div className={styles['user-card__avatar']}>山</div>
          <p className={styles['user-card__name']}>山本 太郎</p>
          <p className={styles['user-card__id']}>@yamamoto_taro</p>
        </div>
        <p className={styles['confirm-note']}>フレンドになりますか？</p>
        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleAccept}>
            承認する
          </button>
        </div>
      </div>
    </Modal>
  );
};
