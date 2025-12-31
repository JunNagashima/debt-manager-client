'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SettingsModal.module.scss';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleLogout = () => {
    console.log('ログアウト');
    // TODO: ログアウト処理
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="ログアウト">
      <div className={styles.modal}>
        <p className={styles['confirm-note']}>ログアウトしますか？</p>
        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleLogout}>
            ログアウト
          </button>
        </div>
      </div>
    </Modal>
  );
};
