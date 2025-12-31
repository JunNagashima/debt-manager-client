'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './FriendConfirmModal.module.scss';

interface CancelRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CancelRequestModal: React.FC<CancelRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleCancel = () => {
    console.log('フレンド申請取消');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="申請を取り消す">
      <div className={styles.modal}>
        <div className={styles['user-card']}>
          <div className={styles['user-card__avatar']}>木</div>
          <p className={styles['user-card__name']}>木村 健一</p>
          <p className={styles['user-card__id']}>@kimura_k</p>
        </div>
        <p className={styles['confirm-note']}>この申請を取り消しますか？</p>
        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--danger']} onClick={handleCancel}>
            取り消す
          </button>
        </div>
      </div>
    </Modal>
  );
};
