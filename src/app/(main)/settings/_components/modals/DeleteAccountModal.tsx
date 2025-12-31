'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SettingsModal.module.scss';

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleDelete = () => {
    if (confirmation === '削除する') {
      console.log('アカウント削除:', { password });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="アカウントを削除">
      <div className={styles.modal}>
        <div className={styles['danger-box']}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <div className={styles['danger-box__content']}>
            <p className={styles['danger-box__title']}>
              この操作は取り消せません
            </p>
            <ul className={styles['danger-box__list']}>
              <li>すべての取引履歴が削除されます</li>
              <li>フレンドとの接続が解除されます</li>
              <li>未清算の残高情報も失われます</li>
            </ul>
          </div>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>
            確認のためパスワードを入力
          </label>
          <input
            type="password"
            className={styles['form-input']}
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>
            「削除する」と入力してください
          </label>
          <input
            type="text"
            className={styles['form-input']}
            placeholder="削除する"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
          />
        </div>

        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button
            className={styles['btn--danger']}
            onClick={handleDelete}
            disabled={confirmation !== '削除する'}
          >
            アカウントを削除
          </button>
        </div>
      </div>
    </Modal>
  );
};
