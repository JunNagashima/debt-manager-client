'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './RepaymentModal.module.scss';

interface CreateRepaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateRepaymentModal: React.FC<CreateRepaymentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [type, setType] = useState<'received' | 'paid'>('received');
  const [friendId, setFriendId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    console.log('返済記録作成:', { type, friendId, amount, date, note });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="返済を記録">
      <div className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>返済の種類</label>
          <div className={styles['toggle-buttons']}>
            <button
              className={`${styles['toggle-btn']} ${
                type === 'received' ? styles['toggle-btn--active'] : ''
              }`}
              onClick={() => setType('received')}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 19V5M5 12l7 7 7-7" />
              </svg>
              受け取った
            </button>
            <button
              className={`${styles['toggle-btn']} ${
                type === 'paid' ? styles['toggle-btn--active'] : ''
              }`}
              onClick={() => setType('paid')}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12l7-7 7 7" />
              </svg>
              支払った
            </button>
          </div>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>相手</label>
          <select
            className={styles.form__select}
            value={friendId}
            onChange={(e) => setFriendId(e.target.value)}
          >
            <option value="">フレンドを選択</option>
            <option value="1">佐藤 花子（¥6,000 貸し）</option>
            <option value="2">鈴木 一郎（¥2,500 借り）</option>
            <option value="3">田中 美咲（¥6,500 貸し）</option>
            <option value="4">高橋 健太（¥0 清算済み）</option>
          </select>
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
