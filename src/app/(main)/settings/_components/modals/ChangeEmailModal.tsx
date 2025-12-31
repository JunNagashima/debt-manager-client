'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SettingsModal.module.scss';

interface ChangeEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangeEmailModal: React.FC<ChangeEmailModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = () => {
    console.log('メールアドレス変更:', { newEmail, password });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="メールアドレス変更">
      <div className={styles.modal}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>
            現在のメールアドレス
          </label>
          <p className={styles['form-static-text']}>hanako@example.com</p>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>
            新しいメールアドレス
          </label>
          <input
            type="email"
            className={styles['form-input']}
            placeholder="新しいメールアドレスを入力"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>パスワード</label>
          <input
            type="password"
            className={styles['form-input']}
            placeholder="現在のパスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
