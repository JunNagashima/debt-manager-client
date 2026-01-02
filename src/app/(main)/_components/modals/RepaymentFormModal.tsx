'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './RepaymentFormModal.module.scss';

interface Friend {
  id: string;
  name: string;
  avatar: string;
  balance?: string;
}

interface RepaymentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  friend?: Friend; // 指定された場合は固定表示、未指定の場合は選択式
}

export const RepaymentFormModal: React.FC<RepaymentFormModalProps> = ({
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
    console.log('返済記録:', data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="返済を記録">
      <div className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>
            {friend ? '相手' : '誰から/誰に返済？'}
          </label>
          {friend ? (
            <div className={styles['form-static']}>
              <div className={styles['form-static__avatar']}>{friend.avatar}</div>
              <div className={styles['form-static__info']}>
                <span className={styles['form-static__name']}>{friend.name}</span>
                {friend.balance && (
                  <span className={styles['form-static__balance']}>
                    {friend.balance}
                  </span>
                )}
              </div>
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
          {friend && (
            <p className={styles.form__hint}>
              相手からあなたへの返済として記録されます
            </p>
          )}
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
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>メモ（任意）</label>
          <input
            type="text"
            className={styles.form__input}
            placeholder="例：ランチ代の返済"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className={styles.form__footer}>
          <button className={styles['btn--secondary']} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles['btn--primary']} onClick={handleSubmit}>
            記録する
          </button>
        </div>
      </div>
    </Modal>
  );
};
