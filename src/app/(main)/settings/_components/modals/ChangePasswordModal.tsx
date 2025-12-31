'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SettingsModal.module.scss';

interface ChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = () => {
    console.log('パスワード変更:', { currentPassword, newPassword });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="パスワード変更">
      <div className={styles.modal}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>現在のパスワード</label>
          <input
            type="password"
            className={styles['form-input']}
            placeholder="現在のパスワードを入力"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>新しいパスワード</label>
          <input
            type="password"
            className={styles['form-input']}
            placeholder="新しいパスワードを入力"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <p className={styles['form-hint']}>8文字以上で設定してください</p>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>
            新しいパスワード（確認）
          </label>
          <input
            type="password"
            className={styles['form-input']}
            placeholder="もう一度入力"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleChange}>
            変更する
          </button>
        </div>
      </div>
    </Modal>
  );
};
