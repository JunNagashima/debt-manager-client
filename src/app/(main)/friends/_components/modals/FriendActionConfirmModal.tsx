'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './FriendConfirmModal.module.scss';

interface FriendActionConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'accept' | 'reject' | 'cancel';
}

const CONFIG = {
  accept: {
    title: 'フレンド申請',
    message: 'フレンドになりますか？',
    buttonText: '承認する',
    buttonClass: 'btn--primary',
    logMessage: 'フレンド申請承認',
  },
  reject: {
    title: '申請を拒否',
    message: (
      <>
        この申請を拒否しますか？
        <br />
        <span className={styles['confirm-note__sub']}>
          相手には通知されません
        </span>
      </>
    ),
    buttonText: '拒否する',
    buttonClass: 'btn--danger',
    logMessage: 'フレンド申請却下',
  },
  cancel: {
    title: '申請を取り消す',
    message: 'この申請を取り消しますか？',
    buttonText: '取り消す',
    buttonClass: 'btn--danger',
    logMessage: 'フレンド申請取消',
  },
} as const;

export const FriendActionConfirmModal: React.FC<FriendActionConfirmModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const handleConfirm = () => {
    console.log(CONFIG[type].logMessage);
    onClose();
  };

  const config = CONFIG[type];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={config.title}>
      <div className={styles.modal}>
        <div className={styles['user-card']}>
          <div className={styles['user-card__avatar']}>
            {type === 'cancel' ? '木' : '山'}
          </div>
          <p className={styles['user-card__name']}>
            {type === 'cancel' ? '木村 健一' : '山本 太郎'}
          </p>
          <p className={styles['user-card__id']}>
            {type === 'cancel' ? '@kimura_k' : '@yamamoto_taro'}
          </p>
        </div>
        <p className={styles['confirm-note']}>{config.message}</p>
        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button
            className={styles[config.buttonClass]}
            onClick={handleConfirm}
          >
            {config.buttonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};
