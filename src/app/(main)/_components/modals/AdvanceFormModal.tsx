'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './AdvanceFormModal.module.scss';

interface Friend {
  id: string;
  name: string;
  avatar: string;
}

interface AdvanceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  friend?: Friend; // 指定された場合は固定表示、未指定の場合は選択式
}

export const AdvanceFormModal: React.FC<AdvanceFormModalProps> = ({
  isOpen,
  onClose,
  friend,
}) => {
  const [friendId, setFriendId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    const data = friend
      ? { friendId: friend.id, amount, date, note }
      : { friendId, amount, date, note };
    console.log('立替申請:', data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="立替を申請">
      <div className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>
            {friend ? '相手' : '誰に立て替えた？'}
          </label>
          {friend ? (
            <div className={styles['form-static']}>
              <div className={styles['form-static__avatar']}>{friend.avatar}</div>
              <span className={styles['form-static__name']}>{friend.name}</span>
            </div>
          ) : (
            <select
              className={styles.form__select}
              value={friendId}
              onChange={(e) => setFriendId(e.target.value)}
            >
              <option value="">フレンドを選択</option>
              <option value="1">佐藤 花子</option>
              <option value="2">鈴木 一郎</option>
              <option value="3">田中 美咲</option>
              <option value="4">高橋 健太</option>
            </select>
          )}
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>金額</label>
          <div className={styles.form__amount}>
            <span className={styles.form__prefix}>¥</span>
            <input
              type="number"
              className={styles.form__input}
              placeholder="0"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>日付</label>
          <input
            type="date"
            className={styles.form__input}
            value={date}
            max={new Date().toISOString().split('T')[0]}
            onChange={(e) => setDate(e.target.value)}
          />
          <p className={styles.form__hint}>未来の日付は選択できません</p>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>メモ（任意）</label>
          <input
            type="text"
            className={styles.form__input}
            placeholder="例：ランチ代"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className={styles.form__footer}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleSubmit}>
            申請する
          </button>
        </div>
      </div>
    </Modal>
  );
};
