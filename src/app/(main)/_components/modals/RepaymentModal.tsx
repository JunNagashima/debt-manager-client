'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import styles from './AdvanceModal.module.scss';

interface RepaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RepaymentModal: React.FC<RepaymentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [friendId, setFriendId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    console.log('返済記録:', { friendId, amount, date, note });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="返済を記録">
      <div className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>誰に返済した？</label>
          <select
            className={styles.form__select}
            value={friendId}
            onChange={(e) => setFriendId(e.target.value)}
          >
            <option value="">フレンドを選択</option>
            <option value="1">佐藤 花子（¥6,000 貸し）</option>
            <option value="2">鈴木 一郎（¥2,500 借り）</option>
            <option value="3">田中 美咲（¥6,500 貸し）</option>
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
          <button className={styles.btn__secondary} onClick={onClose}>
            キャンセル
          </button>
          <button className={styles.btn__primary} onClick={handleSubmit}>
            記録する
          </button>
        </div>
      </div>
    </Modal>
  );
};
