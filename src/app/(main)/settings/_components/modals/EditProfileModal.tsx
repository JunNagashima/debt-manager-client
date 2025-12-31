'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './SettingsModal.module.scss';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('山田 花子');
  const [userId, setUserId] = useState('yamada_hanako');
  const [bio, setBio] = useState('');

  const handleSave = () => {
    console.log('プロフィール保存:', { name, userId, bio });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="プロフィール編集">
      <div className={styles.modal}>
        <div className={styles['profile-edit-avatar']}>
          <div className={styles['profile-edit-avatar__image']}>🌸</div>
          <button className={styles['profile-edit-avatar__btn']}>
            画像を変更
          </button>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>表示名</label>
          <input
            type="text"
            className={styles['form-input']}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>ユーザーID</label>
          <div className={styles['form-input-with-prefix']}>
            <span className={styles['form-input-with-prefix__prefix']}>@</span>
            <input
              type="text"
              className={styles['form-input']}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <p className={styles['form-hint']}>
            半角英数字とアンダースコアのみ使用できます
          </p>
        </div>

        <div className={styles['form-group']}>
          <label className={styles['form-label']}>自己紹介（任意）</label>
          <textarea
            className={styles['form-textarea']}
            rows={3}
            placeholder="自己紹介を入力"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className={styles['form-footer']}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleSave}>
            保存する
          </button>
        </div>
      </div>
    </Modal>
  );
};
