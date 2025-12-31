'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './OffsetModal.module.scss';

interface OffsetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OffsetModal: React.FC<OffsetModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [friendId, setFriendId] = useState('');

  const handleSubmit = () => {
    console.log('相殺提案:', { friendId });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="相殺を提案">
      <div className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>誰と相殺する？</label>
          <select
            className={styles.form__select}
            value={friendId}
            onChange={(e) => setFriendId(e.target.value)}
          >
            <option value="">フレンドを選択</option>
            <option value="2">鈴木 一郎</option>
          </select>
          <p className={styles.form__hint}>
            お互いに貸し借りがあるフレンドのみ表示
          </p>
        </div>

        {friendId && (
          <div className={styles.preview}>
            <p className={styles.preview__label}>相殺可能額</p>
            <p className={styles.preview__amount}>¥2,500</p>
            <p className={styles.preview__note}>
              双方の残高から自動計算されます
            </p>
          </div>
        )}

        <div className={styles.form__footer}>
          <button className={styles.btn__secondary} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles.btn__primary} onClick={handleSubmit}>
            提案する
          </button>
        </div>
      </div>
    </Modal>
  );
};
