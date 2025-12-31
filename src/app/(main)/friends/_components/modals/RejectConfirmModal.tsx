'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './FriendConfirmModal.module.scss';

interface RejectConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RejectConfirmModal: React.FC<RejectConfirmModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleReject = () => {
    console.log('フレンド申請却下');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="申請を拒否">
      <div className={styles.modal}>
        <div className={styles['user-card']}>
          <div className={styles['user-card__avatar']}>山</div>
          <p className={styles['user-card__name']}>山本 太郎</p>
          <p className={styles['user-card__id']}>@yamamoto_taro</p>
        </div>
        <p className={styles['confirm-note']}>
          この申請を拒否しますか？
          <br />
          <span className={styles['confirm-note__sub']}>
            相手には通知されません
          </span>
        </p>
        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--danger']} onClick={handleReject}>
            拒否する
          </button>
        </div>
      </div>
    </Modal>
  );
};
